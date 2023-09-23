export class Cube3DError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Cube3DError";
  }
}
