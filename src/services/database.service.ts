import { PrismaClient } from '@prisma/client';
import { ISettings } from '../types';

export class DatabaService {
    private static prismaClient = new PrismaClient();

    static async getChatSettings(chatId: string) {
        const chatSettings = await this.prismaClient.setting.findUnique({
            where: {
                chatId: chatId,
            },
        });

        return chatSettings;
    }

    static async saveChatSettings(
        chatId: string,
        settings: ISettings
    ) {
        const newChatSettings = await this.prismaClient.setting.upsert({
            where: {
                chatId: chatId,
            },
            update: {
                territoryId: settings.territoryId,
                championshipId: settings.championshipId,
                groupId: settings.groupId,
                teamId: settings.teamId,
            },
            create: {
                chatId: chatId,
                territoryId: settings.territoryId,
                championshipId: settings.championshipId,
                groupId: settings.groupId,
                teamId: settings.teamId,
            },
        });

        return newChatSettings;
    }
}
