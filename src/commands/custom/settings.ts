import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { getTerritories } from '../../external/territories';
import { selectItem } from '../../utils/grammyHelper';
import { getChampionships } from '../../external/championship';
import { getGroups } from '../../external/group';
import { getSettingsMessage } from '../../utils/helper';
import { getTeamsByGroup } from '../../external/team';
import { saveChatSettings } from '../../external/settings';
import { ISettings } from '../../types';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const settings = async (conversation: MyConversation, ctx: MyContext) => {
    const chatId = ctx.chat?.id!;

    const territories = await getTerritories(conversation);
    const {
        selectedItem: territoryId,
        replyMessage,
        messageId: territoryMessageId,
    } = await selectItem(conversation, ctx, 'Seleziona un territorio:', territories, 'ter');

    const championships = await getChampionships(conversation, territoryId);
    const { selectedItem: championshipId, messageId: championshipMessageId } = await selectItem(
        conversation,
        ctx,
        'Seleziona un campionato:',
        championships,
        'cha',
        chatId,
        territoryMessageId,
    );

    const groups = await getGroups(conversation, territoryId, championshipId);
    const { selectedItem: groupId, messageId: groupMessageId } = await selectItem(
        conversation,
        ctx,
        'Seleziona un girone:',
        groups,
        'gru',
        chatId,
        championshipMessageId,
    );

    const teams = await getTeamsByGroup(conversation, groupId);
    const {selectedItem: teamId, messageId: teamMessageId} = await selectItem(
        conversation,
        ctx,
        'Seleziona una squadra:',
        teams,
        'tea',
        chatId,
        groupMessageId
    )

    const settings: ISettings = {
        territoryId: territoryId,
        championshipId: championshipId,
        groupId: groupId,
        teamId: teamId
    }
    const storedSettings = await saveChatSettings(conversation, chatId.toString(), settings);

    const message = getSettingsMessage();
    await ctx.api.editMessageText(chatId, teamMessageId, message);
};

export { settings };
