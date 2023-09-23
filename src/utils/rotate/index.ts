import { addDraggableBehavior } from "./drag-and-drop";
import { addScrollableBehavior } from "./scroll";

/**
 * Enable draggable and scrollable behavior for a given element.
 * @param {HTMLElement} element - The element to make draggable and scrollable.
 * @param {number} initialDeg - The initial rotation degree (default is 30).
 * @param {number} intensity - The intensity of the dragging effect.
 * @param {number} scrollIntensity - The intensity of the scrolling effect.
 */
export function setRotate(
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
export const setRotationDegree = (element: HTMLElement, deg: number) => {
  element.style.transform = `rotateY(${deg}deg)`;
};
