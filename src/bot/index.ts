import { Bot } from 'grammy';

import MyContext from '../types/context';
import config from '../config';
import commandList from './commands';
import startCommand from './commands/start';
import helpCommand from './commands/help';

const bot = new Bot<MyContext>(config.botToken);

bot.api.setMyCommands(commandList);
bot.command('start', startCommand);
bot.command('help', helpCommand);

bot.on('message:text', (ctx) => ctx.reply(ctx.message.text));

export default bot;
