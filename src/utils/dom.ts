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

/**
 * Retrieve and style face elements within a target element.
 * @param {HTMLElement} targetElement - The target element containing face elements.
 * @param {number} width - The width used for transformations.
 * @returns {NodeListOf<HTMLDivElement>} - A NodeList of styled face elements.
 */
export const getFaceElements = (
  targetElement: HTMLElement,
  width: number,
): NodeListOf<HTMLDivElement> => {
  // Retrieve all div elements within the target element
  const faceElements = targetElement.querySelectorAll("div");

  // Apply common styles to all face elements
  faceElements.forEach((element) => {
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.height = "100%";
  });

  // Check if there are at least 1 face element
  if (faceElements.length === 0) {
    console.error("At least one face element is required for transformations.");
  } else {
    // Define the transformations for each face element
    const transformations = [
      `translateZ(${width / 2}px)`,
      `translateX(${width / 2}px) rotateY(90deg)`,
      `translateZ(-${width / 2}px) rotateY(180deg)`,
      `translateX(-${width / 2}px) rotateY(-90deg)`,
    ];

    // Apply transformations to each face element
    faceElements.forEach((element, index) => {
      if (element) {
        element.style.transform = transformations[index];
      }
    });
  }

  return faceElements;
};
