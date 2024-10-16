window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};

function toggleNavbar() {
  var navbar = document.getElementById("nav-list");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}
