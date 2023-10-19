import { ConversationFlavor } from '@grammyjs/conversations';
import { Bot, Context } from 'grammy';

type MyContext = Context & ConversationFlavor;

const development = async (bot: Bot<MyContext>) => {
    await bot.init();
    const botInfo = bot.botInfo.username;

    console.log('Bot runs in development mode');
    console.log(`${botInfo} deleting webhook`);
    await bot.api.deleteWebhook();
    console.log(`${botInfo} starting polling`);

    await bot.start();

    process.once('SIGINT', () => bot.stop());
    process.once('SIGTERM', () => bot.stop());
};

export { development };
