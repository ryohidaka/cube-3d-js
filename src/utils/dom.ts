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
