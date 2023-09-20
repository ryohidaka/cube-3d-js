/**
 * Enable draggable and scrollable behavior for a given base element.
 * @param {HTMLDivElement} baseElement - The base element to make draggable and scrollable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} intensity - The intensity of the dragging effect.
 * @param {number} scrollIntensity - The intensity of the scrolling effect.
 */
export const setDraggableAndScrollable = (
  baseElement: HTMLDivElement,
  initialDeg: number = 30,
  intensity: number,
  scrollIntensity: number,
) => {
  // Variables to track dragging state and initial values
  let isDragging = false;
  let startX: number, endX: number, windowWidth: number;
  let currentDeg = initialDeg;

  // Set the initial rotation degree for the base element
  baseElement.style.transform = `rotateY(${currentDeg}deg)`;

  // Event listener for mouse down event
  document.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    windowWidth = window.innerWidth;

    // Add event listeners for mouse move and mouse up events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Event listener for scroll
  window.addEventListener("wheel", handleScroll);

  // Handle mouse move event
  function handleMouseMove(e: MouseEvent) {
    if (isDragging) {
      endX = e.clientX;
      const distance = Math.abs(endX - startX);
      const percentage = (distance / windowWidth) * 100 * intensity;

      // Calculate the new rotation degree based on drag direction
      let newDeg: number;
      if (endX < startX) {
        // Dragged to the left
        newDeg = (currentDeg - (percentage % 360)) % 360;
      } else {
        // Dragged to the right
        newDeg = (currentDeg + (percentage % 360)) % 360;
      }
      currentDeg = newDeg;

      // Apply the new rotation to the base element
      baseElement.style.transform = `rotateY(${newDeg}deg)`;
    }
  }

  // Handle scroll event
  function handleScroll(e: WheelEvent) {
    // Check if dragging is in progress, if so, ignore scroll
    if (isDragging) {
      return;
    }

    // Calculate the new rotation degree based on scroll direction
    let newDeg: number;
    if (e.deltaX > 0) {
      // Scrolled up
      newDeg = (currentDeg - scrollIntensity) % 360;
    } else {
      // Scrolled down
      newDeg = (currentDeg + scrollIntensity) % 360;
    }
    currentDeg = newDeg;

    // Apply the new rotation to the base element
    baseElement.style.transform = `rotateY(${newDeg}deg)`;
  }

  // Handle mouse up event
  function handleMouseUp() {
    // Reset dragging state and remove event listeners
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }
};
