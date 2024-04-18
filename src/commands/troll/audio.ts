import { Context, InputFile } from 'grammy';
import fs from 'fs';

export const audio = async (ctx: Context) => {
    const msg = ctx.message!.text;

    if (msg) {
        let path = '';
        if (msg.toLowerCase().includes('ciao')) {
            path = `${__dirname}/../../../static/ciao_a_tutti.opus`;
            fs.existsSync(path)
                ? await ctx.replyWithAudio(new InputFile(path))
                : console.log(`FILE ${path} DOESN'T EXIST`);
        } else if (msg.toLowerCase().includes('daje') || msg.toLowerCase().includes('santa')) {
            path = `${__dirname}/../../../static/daje_santa.opus`;
            fs.existsSync(path)
                ? await ctx.replyWithAudio(new InputFile(path))
                : console.log(`FILE ${path} DOESN'T EXIST`);
        }
    }
};
