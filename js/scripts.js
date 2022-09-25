// mobile slide-out nav function

  // set hamburger button variable
  const hamburgerBtn = document.getElementById(`hamburger-btn`);

  // set main nav variable
  const nav = document.getElementById(`main-nav`);

  // hamburger menu function (hide/show)
  function hamburger() {

    // if display = false
    if (!nav.style.display) {

      // add slide-in animation
      nav.style.animation = `slide-in linear 0.3s`;

      // make display = block
      nav.style.display = `block`;

    // if display = `block`
    } else {

      // add slide-out animation
      nav.style.animation = `slide-out linear 0.3s`;

      // wait until slide-out is complete
      setTimeout(function() {

        // empty display value
        nav.style.display = ``;
      }, 300);
    };
  };

  // run hamburger function on click of hamburger button
    hamburgerBtn.addEventListener(`click`, hamburger);


// scroll to top button function

  // set scroll button variable
  const scrollBtn = document.getElementById(`scroll-to-top`);

  // show button once scrolled down
  window.addEventListener(`scroll`, function() {
    
    // if window is scrolled down
    if (window.scrollY >= 600){

      // add show-button class
      scrollBtn.classList.add(`show-button`);

    // if window is near the top
    } else {

      // remove show-button class
      scrollBtn.classList.remove(`show-button`);
    }
  });

  // run scroll on button click
  scrollBtn.addEventListener(`click`, function() {

    // scroll to top function
    window.scrollTo({
          top: 0,
          behavior: `smooth`,
        });
  });
