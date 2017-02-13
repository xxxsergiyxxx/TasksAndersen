import { Injectable }                             from '@angular/core';
import { TeamInfo }                    from '../../shared.types/types';

@Injectable()
export class ContentService {
    constructor() {

    }

    public getInfoTeam(team: TeamInfo): string {
        return `Name: ${team.name} (${team.shortName}). 
                Cost: ${team.squadMarketValue}`
    }
}