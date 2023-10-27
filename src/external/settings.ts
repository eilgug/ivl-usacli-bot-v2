import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { DatabaService } from '../services/database.service';
import { ISettings } from '../types';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getChatSettings = async (conversation: MyConversation, chatId: string) => {
    return await conversation.external(async () => await DatabaService.getChatSettings(chatId));
};

const saveChatSettings = async (
    conversation: MyConversation,
    chatId: string,
    settings: ISettings
) => {
    return await conversation.external(
        async () =>
            await DatabaService.saveChatSettings(
                chatId,
                settings
            ),
    );
};

export { getChatSettings, saveChatSettings };
