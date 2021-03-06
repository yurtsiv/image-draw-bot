# ImageDrawBot

Bot username: `@ImageDrawBot`

A Telegram bot for generating images based on a supplied JavaScript function, 
which returns RGB color for each pixel coordinate.

## Commands

`/draw` - Draw an image with origin located in the top left corner

`/draw_center` - Draw an image with origin located in the center (Cartesian coordinates)

`/draw_hd` - Draw an image in HD

`/draw_center_hd` - Draw an image in HD with Cartesian coordinates

`/draw_fhd` - Draw an image in Full HD

`/draw_center_fhd` - Draw an image in Full HD with Cartesian coordinates

`/draw_2k` - Draw an image in 2K

`/draw_center_2k` - Draw an image in 2K with Cartesian coordinates

`/draw_4k` - Draw an image in 4K 

`/draw_center_4k` - Draw an image in 4K with Cartesian coordinates

## Examples

### Sierpinski triangle

![Sierpinski triangles](https://github.com/yurtsiv/image-draw-bot/blob/master/examples/serpinski.png?raw=true)

<details>
<summary>Command</summary>

```javascript
/draw (x, y) => {
  const c = x & y ? 0 : 255;

  return {
    r: c,
    g: c,
    b: c
  }
}
```

</details>

### Fancy sine

![Sine](https://github.com/yurtsiv/image-draw-bot/blob/master/examples/sine.png?raw=true)

<details>
<summary>Command</summary>

```javascript
/draw_center_hd (x, y) => {
  const val = Math.floor(Math.sin(x / 30) * 100);

  if (val < (y + 10) && val > (y - 10)) {
    return {
      r: x,
      g: y,
      b: x - y
    }
  }

  return {
    r: 255,
    g: 255,
    b: 255
  }
}
```

</details>

### Lovely heart

![Sine](https://github.com/yurtsiv/image-draw-bot/blob/master/examples/heart.png?raw=true)

<details>
<summary>Command</summary>

```javascript
/draw (x, y) => {
  const img = [0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0xff,0x00,0x2e,0xff,0x00,0x2e,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x00,0x00,0x00,0x00,0x00,0x00,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff];

  const newx = Math.floor(x/16);
  const newy = Math.floor(y/16);
  const offset = (newx*3 + newy * 48);

  return {
    r: img[offset],
    g: img[offset + 1],
    b: img[offset + 2]
  }
}
```

</details>

### Your next wallpaper

![Sine](https://github.com/yurtsiv/image-draw-bot/blob/master/examples/wallpaper.png?raw=true)

<details>
<summary>Command</summary>

```javascript
/draw_2k (x, y)  => {
  return {
    r: 0,
    g: 0,
    b: y === 0 ? 0 : x % y
  }
}
```

</details>

## Running

* `docker pull stepy/image-draw-bot`
* `docker run -d --env-file .env --publish 8001:8080 stepy/image-draw-bot`

`.env` file:
```
BOT_TOKEN=<token>
```
