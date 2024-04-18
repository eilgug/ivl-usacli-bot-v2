import { Composer, Context } from 'grammy';
import { healthcheck } from './utils/healthcheck';
import { start } from './utils/start';
import { ConversationFlavor } from '@grammyjs/conversations';
import { audio } from './troll/audio';

type MyContext = Context & ConversationFlavor;

const composer = new Composer<MyContext>();

composer.command('start', start);
composer.command('healthcheck', healthcheck);
composer.command('classifica', async (ctx) => await ctx.conversation.enter('leaderboard'));
composer.command('calendario', async (ctx) => await ctx.conversation.enter('calendar'));
composer.command('nextmatch', async (ctx) => await ctx.conversation.enter('nextmatch'));
composer.command('preferenze', async (ctx) => await ctx.conversation.enter('settings'));
composer.on('message:text', audio);

export default composer;
