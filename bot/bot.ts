import * as fs from 'fs';
import { Telegraf } from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';

import { commands, Origin } from './constants';
import { getColorGetterFunction } from './helpers';
import { generateImage } from './imageGeneration';

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpText = `
Commands:

/draw - draw an image with origin located in the top left corner
/draw_center - draw an image with origin located in the center (Cartesian coordinates)

For each command you need to supply a JavaScript function which takes x & y coordinates
and returns RGB color for that pixel.

Examples:

/draw (x, y) => ({
  r:  Math.floor(Math.pow(Math.sin(x / y), 2) * 500),
  g: 0,
  b: 0
})

/draw_center (x, y) => {
  const gray = (x * x + y * y) > 1000 ? 0 : 255;
  return {
    r: gray,
    g: gray,
    b: gray
  }
}
`;

const startText = `
Hello, ImageDrawBot here!\n
Use me to generate random images based on a function you supply.\n
See /help for more details and have fun!
`

bot.start((ctx) => {
  ctx.reply(startText);
});

bot.help((ctx) => {
  ctx.reply(helpText);
});

const handleDraw = async (botCtx: TelegrafContext, origin?: Origin): Promise<void> => {
  const getColor = getColorGetterFunction(botCtx);
  const imageFileName = await generateImage(getColor, origin);

  await botCtx.replyWithDocument({ source: imageFileName })

  fs.unlinkSync(imageFileName);
}

bot.command(commands.draw, (ctx) => {
  handleDraw(ctx).catch((e) => ctx.reply(e.message));
});

bot.command(commands.drawCenter, (ctx) => {
  handleDraw(ctx, Origin.Center).catch((e) => ctx.reply(e.message));
})

bot.launch().then(() => console.log('Bot started'));
