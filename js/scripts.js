// mobile slide-out nav function

  // set hamburger button variable
  const hamburgerBtn = document.getElementById(`hamburger-btn`);

  // set main nav variable
  const nav = document.getElementById(`main-nav`);

  // hamburger menu function (hide/show)
  function hamburger() {
    if (!nav.style.display) {
      nav.style.animation = `slide-in linear 0.3s`;
      nav.style.display = `block`;
    } else {
      nav.style.display = ``;
    };
  };

  // hamburger button event listener
    hamburgerBtn.addEventListener(`click`, hamburger);