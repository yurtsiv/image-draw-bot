import * as safeEval from 'safe-eval';
import { TelegrafContext } from 'telegraf/typings/context';

import { botName, commands } from './constants';
import { GetColorFunction } from './types';

const commandsList = Object.values(commands);
const stripOutCommandRegex = [
  ...commandsList.map(c => `/${c}@${botName}`),
  ...commandsList.map(c => `/${c}`)
]
  .sort((s1, s2) => s2.length - s1.length)
  .join('|');


export const getColorGetterFunction = (botCtx: TelegrafContext): GetColorFunction => {
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
