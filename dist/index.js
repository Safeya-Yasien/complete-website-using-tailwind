const mobileButton = document.querySelector("#mobile-button");
const mobileMenu = document.querySelector("#mobile-menu");

mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
