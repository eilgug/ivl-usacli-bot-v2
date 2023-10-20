import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { IVLUSAcliService } from '../services/ivlusacli.service';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const getTeamsByChampionship = async (conversation: MyConversation, championshipId: string) => {
    return await conversation.external(() =>
        IVLUSAcliService.getTeamByChampionship(championshipId),
    );
};

const getTeamsByGroup = async (conversation: MyConversation, groupId: string) => {
    return await conversation.external(() => IVLUSAcliService.getTeamByGroup(groupId));
};
export { getTeamsByChampionship, getTeamsByGroup };
