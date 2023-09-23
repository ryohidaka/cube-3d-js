import {
  DEFAULT_HEIGHT,
  DEFAULT_INTENSITY,
  DEFAULT_SCROLL_INTENSITY,
  DEFAULT_TARGET_ID,
  DEFAULT_WIDTH,
} from "./utils/constants";
import {
  generateBaseElement,
  getFaceElements,
  getTargetElement,
} from "./utils/dom";

import { observeRotateYChanges } from "./utils/observer";
import { setRotate } from "./utils/rotate";
import { Config } from "./utils/types";

let baseElement: HTMLDivElement;

/**
 * Initializes the application with optional configuration parameters.
 * @param {string} targetId - The ID of the target element (default is DEFAULT_TARGET_ID).
 * @param {Config} config - Optional configuration object for width, height, initialRotation, and intensity.
 */
export const init = (
  targetId: string = DEFAULT_TARGET_ID,
  {
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    initialRotation = 0,
    intensity = DEFAULT_INTENSITY,
    scrollIntensity = DEFAULT_SCROLL_INTENSITY,
  }: Config = {},
) => {
  // Get the target element
  const targetElement = getTargetElement(targetId);

  if (!targetElement) {
    console.error("Element not found.");
    return;
  }

  // Generate a base HTML div element
  baseElement = generateBaseElement(width, height);

  // Retrieve and style face elements within a target element
  const faceElements = getFaceElements(targetElement, width);

  // Append each face element to the base element
  faceElements.forEach((faceElement) => {
    baseElement.appendChild(faceElement);
  });

  // Append the base element to the target element
  targetElement.appendChild(baseElement);

  // Enable draggable behavior for the base element
  setRotate(baseElement, initialRotation, intensity, scrollIntensity);
};

/**
 * Registers a callback function to be executed when the rotation changes.
 *
 * @param callback - A function to call when the rotation changes with the detected face index and the previous face index.
 */
export const onRotate = (
  callback: (currentFaceIndex: number, previousFaceIndex: number) => void,
) => {
  // Observe changes in rotation and call the provided callback with both current and previous face indices
  observeRotateYChanges(baseElement, (currentFaceIndex, previousFaceIndex) => {
    callback(currentFaceIndex, previousFaceIndex);
  });
};

/**
 * Retrieves a specific face element by its index.
 *
 * @param index - The index of the face element to retrieve.
 * @returns The element corresponding to the specified index.
 */
export const getFaceByIndex = (index: number): HTMLElement => {
  // Get the child element corresponding to the provided index
  return baseElement.children[index - 1] as HTMLElement;
};
