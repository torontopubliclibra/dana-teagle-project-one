// mobile slide-out nav function
function hamburger() {

  // set main-nav variable
  const nav = document.getElementById("main-nav");

  // make nav appear
  if (nav.style.display === "none") {
    nav.style.display = "block";
    nav.style.animation = "slide-in linear 0.3s";
  } else {
    nav.style.display = "none";
  }
}

// shortcuts accordion effect
function accordion(item) {

  // set accordion text variable
  const accordionText = document.getElementById(`accordion${item}`)

  console.log(accordionText);

  // make accordionText appear
  if (accordionText.style.display === "none") {
    accordionText.style.display = "block";
  } else {
    accordionText.style.display = "none";
  }

}