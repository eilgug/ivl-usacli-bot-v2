import { Context } from 'grammy';

const healthcheck = async (ctx: Context): Promise<void> => {
    console.log("RUN HEALTHCHECK");
    await ctx.reply("I'm alive! 🍀🚀");
};

export { healthcheck };
