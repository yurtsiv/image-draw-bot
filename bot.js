const { Telegraf } = require('telegraf')

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

bot.command('draw', (ctx) => {
  // const code = ctx?.message?.text;

  // const canvas = createCanvas(200, 200)
  // const ctx = canvas.getContext('2d')
});

bot.launch()
 