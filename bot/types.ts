export interface XY {
  x: number;
  y: number;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export type GetColorFunction = (x: number, y: number) => RGB;
