import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { IVLUSAcliService } from '../services/ivlusacli.service';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getChampionships = async (conversation: MyConversation, territoryId: string) => {
    const championshipRequestData = {
        territorioId: territoryId,
        inizio_stagione: '2023-09-01',
        fine_stagione: '2024-08-30',
    };
    return await conversation.external(() =>
        IVLUSAcliService.getChampionshipData(championshipRequestData),
    );
};
export { getChampionships };
