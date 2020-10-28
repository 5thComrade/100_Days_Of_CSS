const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", toggleActive);

function toggleActive() {
  if (menuIcon.classList.contains("active")) {
    menuIcon.classList.remove("active");
    menuIcon.classList.add("not-Active");
  } else {
    menuIcon.classList.add("active");
    menuIcon.classList.remove("not-Active");
  }
}
