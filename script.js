const states = ["0", "100vh"];
let state = false;

/**
 * Opens Nav-Overlay.
 * @returns {void} Changes style of DOM-Element (navbar)
 */
function openNav() {
  document.getElementById("myNav").style.height = "100vh";
  // document.querySelector(".mobile-nav").style.height = "700px";
}

/**
 * Closes Nav-Overlay.
 * @returns {void} Changes style of DOM-Element (navbar)
 */
function closeNav() {
  document.getElementById("myNav").style.height = "0";
  // document.querySelector(".mobile-nav").style.height = "0%";
}

/**
 * Toggles Nav-Overlay
 * @returns {void} Toggles style of DOM-Element (navbar)
 */
function toggleNav() {
  state = !state;
  document.getElementById("myNav").style.height = states[+ state];
}

window.onload(closeNav());
