import { IChampionship, IChampionshipDataRequest, IGroup, IGroupDataRequest, ILeaderboard, ILeaderboardDataRequest, IMatchRows, IMatchesDataRequest, ITerritory } from '../types';
import { RestManager } from '../utils/restManager';

export class IVLUSAcliService {
    private static restClient = new RestManager('https://ivl.usacli.it');
    private static endpoint = {
        GET_TERRITORY_PUBLIC: '/ListaTerritoriPubblica',
        GET_CHAMPIONSHIP_DATA: '/CampionatiData',
        GET_MATCHS_DATA: '/PartiteData',
        GET_STANDINGS: '/Classifica',
        GET_GROUP: '/GironiData',
        GET_TEAM_FROM_CHAMPIONSHIP: '/SquadreIscritteACampionato',
    };

    static async getTerritory(): Promise<ITerritory[]> {
        return this.restClient.get(this.endpoint.GET_TERRITORY_PUBLIC);
    }

    static async getChampionshipData(queryParams: IChampionshipDataRequest): Promise<IChampionship[]> {
        return this.restClient.get(this.endpoint.GET_CHAMPIONSHIP_DATA, {
            params: queryParams,
        });
    }

    static async getMatchData(queryParams: IMatchesDataRequest): Promise<IMatchRows> {
        return this.restClient.get(this.endpoint.GET_MATCHS_DATA, { params: queryParams });
    }

    static async getGroupData(queryParams: IGroupDataRequest): Promise<IGroup[]> {
        return this.restClient.get(this.endpoint.GET_GROUP, { params: queryParams });
    }

    static async getLeaderboard(group: string, queryParams: ILeaderboardDataRequest): Promise<ILeaderboard[]> {
        return this.restClient.get(`${this.endpoint.GET_STANDINGS}/${group}`, { params: queryParams });
    }

    static async getTeamByChampionship(championship: string) {
        return this.restClient.get(`${this.endpoint.GET_TEAM_FROM_CHAMPIONSHIP}/${championship}`);
    }
}
