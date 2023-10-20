import { ILeaderboard, IMatch } from '../types';
import { MessageBuilder } from './messageBuilder';

export function getLeaderboardMessage(leaderboardData: ILeaderboard[]) {
    return new MessageBuilder()
        .addText(
            `🏆 ${MessageBuilder.formatAsItalic(MessageBuilder.formatAsBold('CLASSIFICA'))} 🏆\n`,
        )
        .addText(getFormattedLeaderboard(leaderboardData), true)
        .build();
}

export function getCalendarMessage(calendarData: IMatch[], teamId: string) {
    return new MessageBuilder()
        .addText(
            `🗓️ ${MessageBuilder.formatAsItalic(MessageBuilder.formatAsBold('CALENDARIO'))} 🗓️\n`,
        )
        .addText(getFormattedCalendar(calendarData, teamId), true)
        .build();
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

function getFormattedCalendar(calendarData: IMatch[], teamId: string) {
    if (calendarData.length) {
        return calendarData
            .map((match) => {
                let { day, time } = formatDateTime(
                    match.data_orario_rinvio ? match.data_orario_rinvio : match.data_orario!,
                );
                let opponent: string;
                if (teamId == match.squadra_casa_id!.toString()) {
                    opponent = match.squadra_ospite_name!;
                } else {
                    opponent = match.squadra_casa_name!;
                }
                return MessageBuilder.truncateString(`${day} | ${opponent}`, 24) + '\n';
            })
            .join('');
    } else {
        return MessageBuilder.formatAsItalic('\nSembra che non ci siano partite');
    }
}

function formatDateTime(dateTimeString: string): { day: string; time: string } {
    const inputDate = new Date(dateTimeString);

    // Estrai il giorno nel formato 'dd/mm'
    const day = `${String(inputDate.getDate()).padStart(2, '0')}/${String(
        inputDate.getMonth() + 1,
    ).padStart(2, '0')}`;

    // Estrai l'ora nel formato 'HH:MM'
    const time = `${String(inputDate.getHours()).padStart(2, '0')}:${String(
        inputDate.getMinutes(),
    ).padStart(2, '0')}`;

    return { day, time };
}
