import { DEFAULT_TARGET_ID } from "./utils/constants";
import { getTargetElement } from "./utils/dom";

/**
 * Initializes the application with an optional target element ID.
 * @param {string} targetId - The ID of the target element (default is DEFAULT_TARGET_ID).
 */
export const init = (targetId: string = DEFAULT_TARGET_ID) => {
  // Get the target element
  const targetElement = getTargetElement(targetId);

  if (!targetElement) {
    console.error("Element not found.");
    return;
  }
};
