import * as fs from 'fs';
import { createCanvas } from 'canvas';

const imageSize = {
  x: 256,
  y: 256
};

const transformCoords = (x: number, y: number, origin: string): { x: number, y: number } => {
  if (origin === 'top-left') {
    return { x, y };
  }

  if (origin === 'center') {
    const halfX = imageSize.x / 2;
    const halfY = imageSize.y / 2;

    return {
      x: x >= halfX ? x - halfX : -(halfX - x),
      y: y >= halfY ? y - halfY : halfY - y
    }
  }
}

export const generateImage = (getColor: Function, origin: string = 'top-left'): Promise<string> => {
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
