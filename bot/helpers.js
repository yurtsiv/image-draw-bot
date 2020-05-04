const safeEval = require('safe-eval');

const {botName, commands} = require('./constants');

const commandsList = Object.values(commands);
const stripOutCommandRegex = [
  ...commandsList.map(c => `/${c}@${botName}`),
  ...commandsList.map(c => `/${c}`)
].join('|');


const getColorGetterFunction = (botCtx) => {
  const message = botCtx.message && botCtx.message.text;

  if (!message || typeof message !== 'string') {
    throw new Error('Invalid code provided. See /help');
  }

  const code = message.replace(new RegExp(stripOutCommandRegex), '');

  const func = safeEval(code);

  if (typeof func !== 'function') {
    throw new Error('Please, provide a valid function. See /help');
  }

  return func;
}

module.exports = {getColorGetterFunction};