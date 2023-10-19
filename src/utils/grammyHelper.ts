import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context, InlineKeyboard } from 'grammy';

export const createInlineKeyboard = (
    items: { id: number | undefined; name: string | undefined }[],
    callbackPrefix: string,
) => {
    const buttons = items.map(({ id, name }) =>
        InlineKeyboard.text(name!, `${callbackPrefix}:${id!}`),
    );
    return InlineKeyboard.from([buttons]).toFlowed(2);
};

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;
export const selectItem = async (
    conversation: MyConversation,
    ctx: MyContext,
    message: string,
    items: { id: number | undefined; name: string | undefined; [key: string]: any}[],
    callbackPrefix: string,
    chatId?: number,
    messageId?: number,
) => {
    const { replyMessage, messageId: newMessageId } = await replyWithInlineKeyboard(
        ctx,
        message,
        items,
        callbackPrefix,
        chatId,
        messageId,
    );

    const selectedItem = (
        await conversation.waitForCallbackQuery(RegExp(`^${callbackPrefix}:.*`, 'g'), {
            maxMilliseconds: 30000
        })
    ).update.callback_query.data;
    return { selectedItem: selectedItem.split(':')[1]!, replyMessage, messageId: newMessageId };
};

const replyWithInlineKeyboard = async (
    ctx: MyContext,
    message: string,
    items: { id: number | undefined; name: string | undefined }[],
    callbackPrefix: string,
    chatId?: number,
    messageId?: number,
) => {
    const inlineKeyboard = createInlineKeyboard(items, callbackPrefix);

    if (!chatId || !messageId) {
        // Se chatId o messageId sono nulli, utilizza reply
        const replyMessage = await ctx.reply(message, { reply_markup: inlineKeyboard });
        return { replyMessage, messageId: replyMessage.message_id };
    } else {
        // Altrimenti, utilizza editMessageText
        await ctx.api.editMessageText(chatId, messageId, message, { reply_markup: inlineKeyboard });
        return { replyMessage: null, messageId };
    }
};
