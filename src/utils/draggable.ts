/**
 * Enable draggable behavior for a given element.
 * @param {HTMLElement} element - The element to make draggable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} intensity - The intensity of the dragging effect.
 */
function addDraggableBehavior(
  element: HTMLElement,
  initialDeg = 30,
  intensity: number,
) {
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
}

/**
 * Enable scrollable behavior for a given element.
 * @param {HTMLElement} element - The element to make scrollable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} scrollIntensity - The intensity of the scrolling effect.
 */
function addScrollableBehavior(
  element: HTMLElement,
  initialDeg = 30,
  scrollIntensity: number,
) {
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
}

/**
 * Enable draggable and scrollable behavior for a given element.
 * @param {HTMLElement} element - The element to make draggable and scrollable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} intensity - The intensity of the dragging effect.
 * @param {number} scrollIntensity - The intensity of the scrolling effect.
 */
export function setDraggableAndScrollable(
  element: HTMLElement,
  initialDeg = 30,
  intensity: number,
  scrollIntensity: number,
) {
  addDraggableBehavior(element, initialDeg, intensity);
  addScrollableBehavior(element, initialDeg, scrollIntensity);
}

/**
 * Set the rotation degree for a given element.
 * @param {HTMLElement} element - The element to set the rotation degree for.
 * @param {number} deg - The rotation degree to set.
 */
function setRotationDegree(element: HTMLElement, deg: number) {
  element.style.transform = `rotateY(${deg}deg)`;
}
