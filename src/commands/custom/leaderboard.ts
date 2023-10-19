import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context } from 'grammy';
import { getTerritories } from '../../external/territories';
import { selectItem } from '../../utils/grammyHelper';
import { getChampionships } from '../../external/championship';
import { getGroups } from '../../external/group';
import { getLeaderboard } from '../../external/leaderboard';
import { MessageBuilder } from '../../utils/messageBuilder';
import { getLeaderboardMessage } from '../../utils/helper';

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const leaderboard = async (conversation: MyConversation, ctx: MyContext) => {
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

    const leaderboard = await getLeaderboard(conversation, groupId);
    const message = getLeaderboardMessage(leaderboard);
    await ctx.api.editMessageText(chatId, groupMessageId, message, { parse_mode: 'MarkdownV2' });
};

export { leaderboard };
