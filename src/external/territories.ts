import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { IVLUSAcliService } from '../services/ivlusacli.service';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getTerritories = async (conversation: MyConversation) => {
    return await conversation.external(async () => await IVLUSAcliService.getTerritory());
};

export { getTerritories };
