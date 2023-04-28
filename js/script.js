// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//overlay
const elementclose = document.getElementsByClassName("overlay");

for (let i = 0; i < elementclose.length; i++) {
  elementclose[i].addEventListener("click", function () {
    let url = window.location.href.substr(0, window.location.href.indexOf(""));
    window.location = url;
  });
}