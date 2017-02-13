import { NgModule } from '@angular/core';

import { TeamInfoRouter } from './team.info.routing';
import { PlayerComponent } from './players/players.component';

@NgModule({
    imports: [TeamInfoRouter],
    declarations: [
        PlayerComponent
    ]
})
export class TeamInfo {

}