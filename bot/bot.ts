import * as fs from 'fs';
import { Telegraf } from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';

import { commands, Origin } from './constants';
import { getColorGetterFunction } from './helpers';
import { generateImage } from './imageGeneration';

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpText = `
Guide:

Use /draw command to generate a \`256x256\` image
by supplying a JS function which takes \`(x, y)\`
corrdinates and returns RGB color for that pixel.

Example:

/draw (x, y) => {
  ...whatever JS code...

  return {
    r: ...,
    g: ...,
    b: ...
  } 
}
`;


bot.start((ctx) => {
  ctx.reply(`
    Hello, ImageDrawBot here!\n
    Use me to generate random images based on a function you supply.\n
    See \`/help\` for more details.\n\n
    Have fun :)
  `);
});

bot.help((ctx) => {
  ctx.reply(helpText)
});

const handleDraw = async (botCtx: TelegrafContext, origin?: Origin): Promise<void> => {
  const getColor = await getColorGetterFunction(botCtx);
  const imgFileName = await generateImage(getColor, origin);
  await botCtx.replyWithPhoto({ source: imgFileName });
  fs.unlinkSync(imgFileName);
};

bot.command(commands.draw, (ctx) => {
  handleDraw(ctx).catch((e) => ctx.reply(e.message));
});

bot.command(commands.drawCenter, (ctx) => {
  handleDraw(ctx, Origin.Center).catch((e) => ctx.reply(e.message));
})

bot.launch().then(() => console.log('Bot started'));
