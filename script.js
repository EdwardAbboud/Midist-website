/**
 * Intersection Observer. Fires whenever element enters / exists viewport.
 * @param {string} observedElement Element to get observed.
 * @param {string} modifyElement Element to get modified.
 * @returns {void} Changes display of observed element.
 */
const hideOnScroll = (observedElement, modifyElement) => {
    observedElement = document.getElementById(observedElement);
    modifyElement = document.getElementById(modifyElement);

    const states = ["none", "block"];
    let display = false;

    const intersectionObserver = new IntersectionObserver(() => {
        display = ! display;
        modifyElement.style.display = states[+ display];
    });

    intersectionObserver.observe(observedElement);
}

hideOnScroll("canvas-container", "myCanvas");