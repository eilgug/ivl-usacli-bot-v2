import { Bot, Context, InputFile, session, webhookCallback } from 'grammy';
import commands from './commands/composer';
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from '@grammyjs/conversations';
import { leaderboard } from './commands/custom/leaderboard';
import { calendar } from './commands/custom/calendar';
import { nextmatch } from './commands/custom/nextmatch';
import { settings } from './commands/custom/settings';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const BOT_TOKEN = process.env.BOT_TOKEN!;

const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(
    session({
        initial() {
            return {};
        },
    }),
);
bot.use(conversations());
bot.use(createConversation(leaderboard));
bot.use(createConversation(calendar));
bot.use(createConversation(nextmatch));
bot.use(createConversation(settings));
bot.use(commands);

export default bot;
