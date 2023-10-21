import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { getTerritories } from '../../external/territories';
import { selectItem } from '../../utils/grammyHelper';
import { getChampionships } from '../../external/championship';
import { getGroups } from '../../external/group';
import { getCalendarMessage, getLeaderboardMessage, getNextMatchMessage } from '../../utils/helper';
import { getTeamsByGroup } from '../../external/team';
import { getCalendar } from '../../external/calendar';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const nextmatch = async (conversation: MyConversation, ctx: MyContext) => {
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

    const nextMatch = (await getCalendar(conversation, territoryId, championshipId, groupId, teamId, 1, new Date().toISOString())).rows;

    const message = getNextMatchMessage(nextMatch, teamId);
    await ctx.api.editMessageText(chatId, teamMessageId, message, { parse_mode: 'MarkdownV2' });
};

export { nextmatch };
