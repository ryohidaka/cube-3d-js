import { setRotationDegree } from ".";

/**
 * Enable draggable behavior for a given element.
 * @param {HTMLElement} element - The element to make draggable.
 * @param {number} initialDeg - The initial rotation degree.
 * @param {number} intensity - The intensity of the dragging effect.
 */
export const addDraggableBehavior = (
  element: HTMLElement,
  initialDeg: number,
  intensity: number,
) => {
  let isDragging = false;
  let startX: number, endX: number, windowWidth: number;
  let currentDeg = initialDeg;

  setRotationDegree(element, currentDeg);

  element.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    windowWidth = window.innerWidth;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  function handleMouseMove(e: MouseEvent) {
    if (isDragging) {
      endX = e.clientX;
      const distance = Math.abs(endX - startX);
      const percentage = (distance / windowWidth) * 100 * intensity;

      let newDeg;
      if (endX < startX) {
        newDeg = (currentDeg - (percentage % 360)) % 360;
      } else {
        newDeg = (currentDeg + (percentage % 360)) % 360;
      }
      currentDeg = newDeg;

      setRotationDegree(element, newDeg);
    }
  }

  function handleMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }
};
