# cube-3d

[![npm version](https://badge.fury.io/js/cube-3d.svg)](https://badge.fury.io/js/cube-3d)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Provides a 3D cube carousel display with perspective.

## Installation

You can install this library using npm:

```shell
npm install cube-3d
```

## Usage

### HTML

```html
<body>
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
</body>
```

### JavaScript

```javascript
import { init, onRotate, getFaceByIndex } from "cube-3d";

// Initialize the library with optional configuration
init("cube-3d", {
  width: 500,
  height: 500,
  initialRotation: 0,
});

// Register a callback for when the rotation changes
onRotate((currentFaceIndex, previousFaceIndex) => {
  // Your callback logic here
  console.log(`Face index changed from: ${previousIndex} to: ${index}`);
});

// Retrieve a specific face element by index
const faceElement = getFaceByIndex(1);
```

## API Documentation

### `init(targetId: string, config?: Config)`

Initializes the application with optional configuration parameters.

- `targetId` (string, optional): The ID of the target element (default is `cube-3d`).
- `config` (object, optional): Optional configuration object for width, height, baseId, initialRotation, intensity, scrollIntensity, and swipeIntensity.

#### Config

| Property Name     | Description                            | Default Value  |
| ----------------- | -------------------------------------- | -------------- |
| `width`           | Sets the width.                        | `500`          |
| `height`          | Sets the height.                       | `500`          |
| `baseId`          | Sets the baseElement ID.               | `cube-3d-base` |
| `initialRotation` | Sets the initial rotation degree.      | `0`            |
| `intensity`       | Sets the intensity of light.           | `0.2`          |
| `scrollIntensity` | Sets the intensity of light on scroll. | `1.5`          |
| `swipeIntensity`  | Sets the intensity of light on swipe.  | `75`           |

### `onRotate(callback: (currentFaceIndex: number, previousFaceIndex: number) => void)`

Registers a callback function to be executed when the rotation changes.

- `callback` (function): A function to call when the rotation changes with the detected face index and the previous face index.

### `getFaceByIndex(index: number): HTMLElement`

Retrieves a specific face element by its index.

- `index` (number): The index of the face element to retrieve.
- Returns: The element corresponding to the specified index.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
