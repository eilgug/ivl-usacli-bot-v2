import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { IVLUSAcliService } from '../services/ivlusacli.service';
import { ILeaderboardDataRequest } from '../types';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getLeaderboard = async (conversation: MyConversation, groupId: string) => {
    const leaderboardRequestData: ILeaderboardDataRequest = {
        _a: '',
        inizio_stagione: '2023-09-01',
        fine_stagione: '2024-08-30',
    };
    return await conversation.external(() =>
        IVLUSAcliService.getLeaderboard(groupId, leaderboardRequestData),
    );
};
export { getLeaderboard };
