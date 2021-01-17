export type Matrix = number[][];

export interface MatrizXY {
  x: number[];
  y: number[];
}

export interface MatrizGroup {
  matrixA: MatrizXY;
  matrixB: MatrizXY
}