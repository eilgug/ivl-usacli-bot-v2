import { Context } from 'grammy';
import { WELCOME_MESSAGE } from '../../const';

const start = async (ctx: Context): Promise<void> => {
    await ctx.reply(WELCOME_MESSAGE);
};

export { start };
