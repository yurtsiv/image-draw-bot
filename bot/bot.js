const fs = require('fs');
const { Telegraf } = require('telegraf');

const {getColorGetterFunction} = require('./helpers');
const {generateImage} = require('./imageGeneration');

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

const handleDraw = async (botCtx) => {
  const getColor = await getColorGetterFunction(botCtx);
  const imgFileName = await generateImage(getColor);
  await botCtx.replyWithPhoto({source: imgFileName});
  fs.unlinkSync(imgFileName);
};

bot.command('draw', (ctx) => {
  console.log(ctx.message.entities);
  handleDraw(ctx).catch((e) => ctx.reply(e.message));
});

bot.launch();

 