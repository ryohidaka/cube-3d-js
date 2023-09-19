/**
 * Get the target element by its ID.
 * @param {string} targetId - The ID of the target element.
 * @returns {HTMLElement | undefined} The target element or undefined if not found.
 */
export const getTargetElement = (targetId: string): HTMLElement | undefined => {
  const targetElement = document.getElementById(targetId) as HTMLElement;

  if (targetElement) {
    targetElement.style.overflow = "hidden";
    targetElement.style.userSelect = "none";
    return targetElement;
  } else {
    console.log(`Element with ID ${targetId} not found.`);
    return undefined;
  }
};

/**
 * Generate a base HTML div element with specified width and height.
 * @param {number} width - The width of the div element.
 * @param {number} height - The height of the div element.
 * @returns {HTMLDivElement} The created div element.
 */
export const generateBaseElement = (
  width: number,
  height: number,
): HTMLDivElement => {
  // Create a new div element
  const baseElement = document.createElement("div");

  // Apply 3D transformation style
  baseElement.style.transformStyle = "preserve-3d";

  // Set the width and height of the div element
  baseElement.style.width = `${width}px`;
  baseElement.style.height = `${height}px`;

  return baseElement;
};
