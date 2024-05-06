import "./style.css";
import { init, onRotate, getFaceByIndex } from "../";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="cube-3d">
      <div data-cube-face>
        <img src="https://picsum.photos/800" />
      </div>
      <div data-cube-face>
        <img src="https://picsum.photos/800" />
      </div>
      <div data-cube-face>
        <img src="https://picsum.photos/800" />
      </div>
    </div>
  </div>
`;

// Initialize the library with optional configuration
init("cube-3d", {
  width: 500,
  height: 500,
  initialRotation: 0,
  swipeIntensity: 5,
});

// Register a callback for when the rotation changes
onRotate((currentFaceIndex: number, previousFaceIndex: number) => {
  // Your callback logic here
  console.log(
    `Face index changed from: ${previousFaceIndex} to: ${currentFaceIndex}`,
  );
});

// Retrieve a specific face element by index
const faceElement = getFaceByIndex(1);
console.log(faceElement);
