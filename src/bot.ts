import { Bot, Context, session, webhookCallback } from 'grammy';
import commands from './commands/composer';
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from '@grammyjs/conversations';
import { leaderboard } from './commands/custom/leaderboard';
import { calendar } from './commands/custom/calendar';
import express, { json, request, response } from 'express';
import { nextmatch } from './commands/custom/nextmatch';

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

bot.use(commands);

const server = express();
server.use(json())
server.post('/webhook', webhookCallback(bot, 'express'));
server.get('/healtcheck', (request, response) => {
    response.json({
        status: 200,
        message: "🍀 Server is alive"
    })
})

server.listen(3000, () => console.log("SERVER IS LISTENING ON PORT 3000"));

// export default webhookCallback(bot, 'http');
