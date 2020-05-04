const safeEval = require('safe-eval');

const getColorGetterFunction = (botCtx) => {
  const message = botCtx.message && botCtx.message.text;

  if (!message || typeof message !== 'string') {
    throw new Error('Invalid code provided. See /help');
  }

  const code = message
    .replace('/draw@ImageDrawBot', '')
    .replace('/draw', '');

  const func = safeEval(code);

  if (typeof func !== 'function') {
    throw new Error('Please, provide a valid function. See /help');
  }

  return func;
}

module.exports = {getColorGetterFunction};