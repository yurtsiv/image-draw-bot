const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpText = `
  Guide:\n

  Use \`/draw\` command to generate a 256x256 image\n
  by supplying a JS function which takes \`(x, y)\`\n
  corrdinates and returns RGB color for that pixel.

  Example:\n
  \`\`\`
  /draw (x, y) => {
    ...whatever JS code...

    return {
      r: ...,
      g: ...,
      b: ...
    } 
  }
  \`\`\`
`;
 
bot.help((ctx) =>{
  ctx.reply(helpText)
})

bot.launch()
 