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
import { setDraggableAndScrollable } from "./utils/draggable";
import { observeRotateYChanges } from "./utils/observer";
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
  setDraggableAndScrollable(
    baseElement,
    initialRotation,
    intensity,
    scrollIntensity,
  );
};

/**
 * Registers a callback function to be executed when the rotation changes.
 *
 * @param callback - A function to call when the rotation changes with the detected face index.
 */
export const onRotate = (callback: (index: number) => void) => {
  // Observe changes in rotation and call the provided callback
  observeRotateYChanges(baseElement, (index) => {
    callback(index);
  });
};
