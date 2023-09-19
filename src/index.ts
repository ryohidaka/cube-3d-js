import {
  DEFAULT_HEIGHT,
  DEFAULT_TARGET_ID,
  DEFAULT_WIDTH,
} from "./utils/constants";
import { generateBaseElement, getTargetElement } from "./utils/dom";
import { Config } from "./utils/types";

/**
 * Initializes the application with optional configuration parameters.
 * @param {string} targetId - The ID of the target element (default is DEFAULT_TARGET_ID).
 * @param {Config} config - Optional configuration object for width, height, initialRotation, and intensity.
 */
export const init = (
  targetId: string = DEFAULT_TARGET_ID,
  { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT }: Config = {},
) => {
  // Get the target element
  const targetElement = getTargetElement(targetId);

  if (!targetElement) {
    console.error("Element not found.");
    return;
  }

  // Generate a base HTML div element
  const baseElement = generateBaseElement(width, height);

  // Append the base element to the target element
  targetElement.appendChild(baseElement);
};
