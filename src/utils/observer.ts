/**
 * Observes changes in the rotation around the Y-axis (rotateY) of an HTMLDivElement.
 * Calls the provided callback with the detected face index and the previous face index when a change is detected.
 *
 * @param baseElement - The HTMLDivElement to observe for rotation changes.
 * @param callback - A function to call when a change in face index is detected.
 */
export const observeRotateYChanges = (
  baseElement: HTMLDivElement,
  callback: (currentFaceIndex: number, previousFaceIndex: number) => void,
) => {
  let lastFaceIndex: number;

  // Create a MutationObserver to watch for style attribute changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "style") {
        // Get the current transform value from the computed style
        const currentTransformValue = window
          .getComputedStyle(baseElement)
          .getPropertyValue("transform");
        const rotateYValue = extractRotateYFromMatrix3D(currentTransformValue);
        const faceIndex = detectFaceIndexByRotateValue(rotateYValue);

        // Check if the face index has changed and call the callback with both current and previous indices
        if (faceIndex !== lastFaceIndex) {
          const previousIndex = lastFaceIndex;
          lastFaceIndex = faceIndex;
          callback(faceIndex, previousIndex);
        }
      }
    });
  });

  // Start observing attribute changes for the baseElement's style attribute
  observer.observe(baseElement, { attributes: true });
};

/**
 * Extracts the rotation around the Y-axis (rotateY) from a 3D transformation matrix.
 *
 * @param matrix3d - The 3D transformation matrix as a string.
 * @returns The rotation around the Y-axis in degrees.
 */
function extractRotateYFromMatrix3D(matrix3d: string): number {
  const matches = matrix3d.match(/\((.*?)\)/);
  if (!matches) return 0;

  const matrix = matches[1].split(", ").map(Number);
  const sinTheta = matrix[8]; // Element at (0, 2) in the matrix
  const cosTheta = matrix[0]; // Element at (0, 0) in the matrix
  const rotationY = Math.atan2(sinTheta, cosTheta);

  // Convert radians to degrees
  const rotationYDegrees = (rotationY * 180) / Math.PI;
  return rotationYDegrees;
}

/**
 * Detects the face index based on the rotation around the Y-axis (rotateY) in degrees.
 *
 * @param rotateY - The rotation around the Y-axis in degrees.
 * @returns The detected face index (1, 2, 3, or 4).
 */
function detectFaceIndexByRotateValue(rotateY: number): number {
  switch (true) {
    case rotateY >= -45 && rotateY < 45:
      return 1;
    case rotateY >= 45 && rotateY < 135:
      return 4;
    case rotateY >= -135 && rotateY < -45:
      return 2;
    default:
      return 3;
  }
}
