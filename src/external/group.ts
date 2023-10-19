import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { IVLUSAcliService } from '../services/ivlusacli.service';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getGroups = async (conversation: MyConversation, territoryId: string, championshipId: string) => {
    const groupRequestData = {
        territorio_id: territoryId,
        campionato_id: championshipId,
        inizio_stagione: '2023-09-01',
        fine_stagione: '2024-08-30',
        return_all: 1,
    };
    return await conversation.external(() =>
        IVLUSAcliService.getGroupData(groupRequestData),
    );
};
export { getGroups };
