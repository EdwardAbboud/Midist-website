/**
 * Opens Nav-Overlay.
 * @returns {void} Changes style of DOM-Element
 */
function openNav() {
  document.getElementById("myNav").style.height = "100vh";
  // document.querySelector(".mobile-nav").style.height = "700px";
}

/**
 * Closes Nav-Overlay.
 * @returns {void} Changes style of DOM-Element
 */
function closeNav() {
  document.getElementById("myNav").style.height = "0";
  // document.querySelector(".mobile-nav").style.height = "0%";
}

window.onload(closeNav());
