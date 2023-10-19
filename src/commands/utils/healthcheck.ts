import { Context } from 'grammy';

const healthcheck = async (ctx: Context): Promise<void> => {
    await ctx.reply("I'm alive! 🍀");
};

export { healthcheck };
