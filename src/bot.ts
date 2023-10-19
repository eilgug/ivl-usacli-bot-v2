import { Bot, Context, session, webhookCallback } from 'grammy';
import commands from './commands/composer';
import * as dotenv from 'dotenv';
import { development } from './development';
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from '@grammyjs/conversations';
import { leaderboard } from './commands/custom/leaderboard';
import express, { json } from 'express';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

dotenv.config();
const BOT_TOKEN = process.env.BOT_TOKEN!;
const ENVIRONMENT = process.env.NODE_ENV!;

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

bot.use(commands);

// ENVIRONMENT !== 'production' && development(bot);

const server = express();
server.use(json())
server.post('/webhook', webhookCallback(bot, 'express'));

server.listen(3000, () => console.log("SERVER IS LISTENING"));

// export default webhookCallback(bot, 'http');
