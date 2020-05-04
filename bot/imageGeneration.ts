import * as fs from 'fs';
import { createCanvas } from 'canvas';
import { XY, GetColorFunction } from './types';
import { Origin, resolutions } from './constants';


const transformCoords = (x: number, y: number, origin: Origin, imageSize: XY): XY => {
  if (origin === Origin.TopLeft) {
    return [x, y];
  }

  if (origin === Origin.Center) {
    const [xSize, ySize] = imageSize;
    const halfX = xSize / 2;
    const halfY = ySize / 2;

    return [
      x >= halfX ? x - halfX : -(halfX - x),
      y >= halfY ? y - halfY : halfY - y
    ]
  }
}

export const generateImage = (
  getColor: GetColorFunction,
  origin: Origin = Origin.TopLeft,
  imageSize: XY = resolutions.default
): Promise<string> => {
  const canvas = createCanvas(imageSize[0], imageSize[1]);
  const canvasCtx = canvas.getContext('2d')

  for (let x = 0; x < imageSize[0]; x++) {
    for (let y = 0; y < imageSize[1]; y++) {
      const [tX, tY] = transformCoords(x, y, origin, imageSize);
      const { r, g, b } = getColor(tX, tY);

      canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      canvasCtx.fillRect(x, y, 1, 1);
    }
  }

  const dataUrl = canvas.toDataURL().replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(dataUrl, 'base64');
  const fileName = `${process.env.PWD}/${Date.now()}.png`;

  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, buffer, (err) => {
      if (err) reject(err);

      resolve(fileName);
    });
  });
}
