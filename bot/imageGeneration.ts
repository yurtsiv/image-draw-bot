import * as fs from 'fs';
import { createCanvas } from 'canvas';
import { XY, GetColorFunction } from './types';
import { Origin } from './constants';

const imageSize: XY = {
  x: 256,
  y: 256
};

const transformCoords = (x: number, y: number, origin: Origin): XY => {
  if (origin === Origin.TopLeft) {
    return { x, y };
  }

  if (origin === Origin.Center) {
    const halfX = imageSize.x / 2;
    const halfY = imageSize.y / 2;

    return {
      x: x >= halfX ? x - halfX : -(halfX - x),
      y: y >= halfY ? y - halfY : halfY - y
    }
  }
}

export const generateImage = (
  getColor: GetColorFunction,
  origin: Origin = Origin.TopLeft
): Promise<string> => {
  const canvas = createCanvas(imageSize.x, imageSize.y);
  const canvasCtx = canvas.getContext('2d')

  for (let x = 0; x < imageSize.x; x++) {
    for (let y = 0; y < imageSize.y; y++) {
      const tCoords = transformCoords(x, y, origin);
      const { r, g, b } = getColor(tCoords.x, tCoords.y);

      canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      canvasCtx.fillRect(x, y, 1, 1);
    }
  }

  const dataUrl = canvas.toDataURL().replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(dataUrl, 'base64');
  const fileName = `${Date.now()}.png`;

  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, buffer, (err) => {
      if (err) reject(err);

      resolve(fileName);
    });
  });
}
