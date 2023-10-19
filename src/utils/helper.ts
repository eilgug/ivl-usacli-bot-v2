import { ILeaderboard } from '../types';
import { MessageBuilder } from './messageBuilder';

export function getLeaderboardMessage(leaderboardData: ILeaderboard[]) {
    return new MessageBuilder().addText(
        `🏆 ${MessageBuilder.formatAsItalic(MessageBuilder.formatAsBold('CLASSIFICA'))} 🏆\n`,
    ).addText(getFormattedLeaderboard(leaderboardData), true).build();
}

function getFormattedLeaderboard(leaderboardData: ILeaderboard[]) {
    if (leaderboardData.length) {
        return leaderboardData
            .map((team, index) => {
                let text = '';
                switch (index) {
                    case 0:
                        text += '🥇 ';
                        break;
                    case 1:
                        text += '🥈 ';
                        break;
                    case 2:
                        text += '🥉 ';
                        break;
                    default:
                        text += '🏐 ';
                        break;
                }
                text += `${MessageBuilder.truncateString(team.name, 24)} | ${team.Punteggio}\n`;
                return text;
            })
            .join('');
    } else {
        return MessageBuilder.formatAsItalic('\nSembra che non ci siano squadre');
    }
}
