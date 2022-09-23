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

  // hamburger button callback function
  hamburgerBtn.addEventListener(`click`, hamburger);

// // shortcuts accordion function
// function accordion(item) {

//   // set accordion text variable
//   const accordionText = document.getElementById(`accordion${item}`)

//   // make accordionText appear
//   if (accordionText.style.display === "none") {
//     accordionText.style.display = "block";
//   } else {
//     accordionText.style.display = "none";
//   }

// }