import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { IVLUSAcliService } from '../services/ivlusacli.service';
import { ILeaderboardDataRequest, IMatchesDataRequest } from '../types';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getCalendar = async (conversation: MyConversation, territoryId:string, championshipId: string, groupId: string, teamId: string) => {
    const calendarRequestData: IMatchesDataRequest = {
        girone_id: groupId,
        territorio_id: territoryId,
        campionato_id: championshipId,
        societa_id: 'null',
        squadra_id: teamId,
        inizio_stagione: '2023-09-01',
        fine_stagione: '2024-08-30',
        pubblicato: 1,
        search: '',
        sort: '',
        order: '',
        offset: 0,
        limit: 20,
    };

    return await conversation.external(() =>
        IVLUSAcliService.getMatchData(calendarRequestData),
    );
};
export { getCalendar };
