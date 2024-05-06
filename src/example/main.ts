import "./style.css";
import { init, onRotate, getFaceByIndex } from "../";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="cube-3d">
    <div><h1>1</h1></div>
    <div><h1>2</h1></div>
    <div><h1>3</h1></div>
  </div>
  <style>
    #cube-3d-base > div {
      box-sizing: border-box;
      border: 0.5px solid black;
      color: blue;
      background-color: rgb(255 255 255 / 0.5);
    }
  </style>
  </div>
`;

// Initialize the library with optional configuration
init("cube-3d", {
  width: 500,
  height: 500,
  initialRotation: 0,
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
