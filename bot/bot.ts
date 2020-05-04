import { Telegraf } from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';

import { commands, Origin, resolutions } from './constants';
import { getColorGetterFunction } from './helpers';
import { generateImage } from './imageGeneration';
import { XY } from './types';

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpText = `
Commands:

/draw - Draw an image with origin located in the top left corner
/draw_center - Draw an image with origin located in the center (Cartesian coordinates)
/draw_hd - Draw an image in HD
/draw_center_hd - Draw an image in HD with Cartesian coordinates
/draw_fhd - Draw an image in Full HD
/draw_center_fhd - Draw an image in Full HD with Cartesian coordinates
/draw_2k - Draw an image in 2K
/draw_center_2k - Draw an image in 2K with Cartesian coordinates
/draw_4k - Draw an image in 4K 
/draw_center_4k - Draw an image in 4K with Cartesian coordinates

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

const handleDraw = async (botCtx: TelegrafContext, origin?: Origin, resolution?: XY): Promise<void> => {
  try {
    const getColor = getColorGetterFunction(botCtx);
    const imageFileStream = generateImage(getColor, origin, resolution);

    await botCtx.replyWithDocument({
      source: imageFileStream,
      filename: 'ImageDrawBot.png'
    });
  } catch (e) {
    botCtx.reply(e.message);
  }
}

bot.command(commands.draw, (ctx) => handleDraw(ctx));
bot.command(commands.drawCenter, (ctx) => handleDraw(ctx, Origin.Center));

bot.command(commands.drawHd, (ctx) =>
  handleDraw(ctx, Origin.TopLeft, resolutions.hd)
);
bot.command(commands.drawCenterHd, (ctx) =>
  handleDraw(ctx, Origin.Center, resolutions.hd)
);

bot.command(commands.drawFhd, (ctx) =>
  handleDraw(ctx, Origin.TopLeft, resolutions.fhd)
);
bot.command(commands.drawCenterFhd, (ctx) =>
  handleDraw(ctx, Origin.Center, resolutions.fhd)
);

bot.command(commands.draw2k, (ctx) =>
  handleDraw(ctx, Origin.TopLeft, resolutions['2k'])
);
bot.command(commands.drawCenter2k, (ctx) =>
  handleDraw(ctx, Origin.Center, resolutions['2k'])
);

bot.command(commands.draw4k, (ctx) =>
  handleDraw(ctx, Origin.TopLeft, resolutions['4k'])
);
bot.command(commands.drawCenter4k, (ctx) =>
  handleDraw(ctx, Origin.Center, resolutions['4k'])
);

bot.launch().then(() => console.log('Bot started'));
