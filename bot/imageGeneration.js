const fs = require('fs');
const {createCanvas} = require('canvas');

const imageSize = {
  x: 256,
  y: 256
};

const generateImage = (getColor) => {
  const canvas = createCanvas(imageSize.x, imageSize.y);
  const canvasCtx = canvas.getContext('2d')

  for (let x = 0; x < imageSize.x; x++) {
    for (let y = 0; y < imageSize.y; y++) {
      const {r,g,b} = getColor(x, y);

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