import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHeroes }            from './new-heroes.component';

import { BigBoss }              from './big-boss/big-boss.component';
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
                        path: 'bigBoss',
                        component: BigBoss
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
    exports: [ RouterModule ]
})
export class NewHeroesRouter {

}