import { Composer, Context } from 'grammy';
import { healthcheck } from './utils/healthcheck';
import { start } from './utils/start';
import { ConversationFlavor } from '@grammyjs/conversations';

type MyContext = Context & ConversationFlavor;

const composer = new Composer<MyContext>();

composer.command('start', start);
composer.command('healthcheck', healthcheck);
composer.command('classifica', async (ctx) => await ctx.conversation.enter('leaderboard'));

export default composer;
