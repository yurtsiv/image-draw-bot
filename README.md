# ImageDrawBot

A Telegram bot for generating images based on a supplied function.

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
