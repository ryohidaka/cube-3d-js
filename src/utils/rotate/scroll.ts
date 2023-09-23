import { setRotationDegree } from ".";

/**
 * Enable scrollable behavior for a given element.
 * @param {HTMLElement} element - The element to make scrollable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} scrollIntensity - The intensity of the scrolling effect.
 */
export const addScrollableBehavior = (
  element: HTMLElement,
  initialDeg = 30,
  scrollIntensity: number,
) => {
  let currentDeg = initialDeg;

  element.addEventListener("wheel", (e) => {
    let newDeg;
    if (e.deltaX > 0) {
      newDeg = (currentDeg - scrollIntensity) % 360;
    } else {
      newDeg = (currentDeg + scrollIntensity) % 360;
    }
    currentDeg = newDeg;

    setRotationDegree(element, newDeg);
  });
};
