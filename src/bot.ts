import { Bot } from 'grammy';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.on('message:text', (ctx) => ctx.reply(ctx.message.text));

bot.start();
