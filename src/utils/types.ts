// Define a configuration type for specifying width and height options.
export type Cube3DConfig = {
  width?: number; // Optional width property.
  height?: number; // Optional height property.
  baseId?: string; // Optional base ID property.
  initialRotation?: number; // Optional initial rotate deg property.
  intensity?: number; // Optional intensity property.
  scrollIntensity?: number; // Optional intensity property for scroll .
  swipeIntensity?: number; // Optional intensity property for swipe .
};
