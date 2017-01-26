import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHeroes }            from './new-heroes.component';

import { BigBoss }              from './big-boss/big-boss.component';
import { NormalHero }           from './normal-hero/normal-hero.component';
import { ListHeroes }           from './list-heroes/list-heroes.component';

const routes: Routes = [
    {
        path: '',
        component: NewHeroes,
        children: [
            {
                path: '',
                component: ListHeroes,
                children: [
                    {
                        path: 'bigboss',
                        component: BigBoss
                    },
                    {
                        path: 'normalhero',
                        component: NormalHero
                    }
                ]
            }
        ]
    }
    ]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NewHeroesRouter {

}
