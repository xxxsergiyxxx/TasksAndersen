import { NgModule }             from '@angular/core';
import { NewHeroes }            from './new-heroes.component';
import { RouterModule, Routes } from '@angular/router';

import { BigBoss }              from './big-boss/big-bos.component';

const routes: Routes = [
    {
        path: '',
        component: NewHeroes,
        children: [
            {
                path: 'bigboss',
                component: BigBoss
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