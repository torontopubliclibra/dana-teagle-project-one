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

      // make button visible
      scrollBtn.style.opacity = `1`;
      scrollBtn.style.visibility = `visible`;

    // if window is near the top
    } else {

        // make button hidden
        scrollBtn.style.opacity = `0`;
        scrollBtn.style.visibility = `hidden`;
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


// comments button function

  // set comments button variable
  const commentBtn = document.getElementById(`show-comments`);

  // set comments section variable
  const comments = document.getElementById(`blog-comments`);

  // hide/reveal comments on button click
  commentBtn.addEventListener(`click`, function() {

    // if display = false
    if (!comments.style.display){

      // make display = block
      comments.style.display = `block`;

      // change button to say `hide comments`
      commentBtn.innerText = `Hide Comments`;

    // if display = block
    } else {

      // make display = none
      comments.style.display = ``;

      // change button to say `show comments`
      commentBtn.innerText = `Show Comments`;
    }
  })