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