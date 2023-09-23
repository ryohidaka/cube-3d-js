import { setRotationDegree } from ".";

/**
 * Enable swipe behavior for a given element.
 * @param {HTMLElement} element - The element to make swipeable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} swipeIntensity - The sensitivity of the swipe effect.
 */
export const addSwipeBehavior = (
  element: HTMLElement,
  initialDeg: number,
  swipeIntensity: number,
) => {
  let isSwiping = false;
  let startX: number, endX: number;
  let currentDeg = initialDeg;

  element.addEventListener("touchstart", (e) => {
    isSwiping = true;
    startX = e.touches[0].clientX;
  });

  element.addEventListener("touchmove", (e) => {
    let newDeg;
    if (isSwiping) {
      endX = e.touches[0].clientX;
      const distance = Math.abs(endX - startX);
      if (distance < 10) return;

      if (startX < endX) {
        newDeg = (currentDeg + distance / swipeIntensity) % 360;
      } else {
        newDeg = (currentDeg - distance / swipeIntensity) % 360;
      }

      currentDeg = newDeg;

      setRotationDegree(element, newDeg);
    }
  });

  element.addEventListener("touchend", () => {
    isSwiping = false;
  });
};
