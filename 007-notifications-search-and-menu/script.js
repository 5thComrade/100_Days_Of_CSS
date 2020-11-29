const searchIcon = document.querySelector(".search-icon");
const toggleButton = document.querySelector(".toggle-button");
const heading = document.querySelector(".heading");
const searchBox = document.querySelector(".search-box");
const notifications = document.querySelector(".notifications");

searchIcon.addEventListener("click", toggleSearchBox);
toggleButton.addEventListener("click", showMenu);

function toggleSearchBox() {
  if (searchBox.classList.contains("search")) {
    searchBox.classList.remove("search");
    toggleButton.classList.remove("search");
    heading.classList.remove("search");
  } else {
    searchBox.classList.add("search");
    toggleButton.classList.add("search");
    heading.classList.add("search");
    searchBox.style.transition = "all 2s";
  }
}

function showMenu() {
  if (notifications.classList.contains("active")) {
    notifications.classList.remove("active");
  } else {
    notifications.classList.add("active");
  }
}
