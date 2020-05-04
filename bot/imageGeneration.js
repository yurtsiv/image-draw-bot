const fs = require('fs');
const {createCanvas} = require('canvas');

const imageSize = {
  x: 256,
  y: 256
};

const transformCoords = (x, y, origin) => {
  if (origin === 'top-left') {
    return {x, y};
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

const generateImage = (getColor, origin = 'top-left') => {
  const canvas = createCanvas(imageSize.x, imageSize.y);
  const canvasCtx = canvas.getContext('2d')

  for (let x = 0; x < imageSize.x; x++) {
    for (let y = 0; y < imageSize.y; y++) {
      const tCoords = transformCoords(x, y, origin);
      const {r,g,b} = getColor(tCoords.x, tCoords.y);

      canvasCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      canvasCtx.fillRect(x, y, 1, 1);
    }
  }

  const dataUrl = canvas.toDataURL().replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(dataUrl, 'base64');
  const fileName = `${Date.now()}.png`;

  return new Promise((res, rej) => {
    fs.writeFile(fileName, buffer, (err) => {
      if (err) rej(err);

      res(fileName);
    });
  });
}

module.exports = {generateImage};