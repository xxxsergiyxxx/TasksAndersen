import { NgModule }             from '@angular/core';
import { NewHeroes }            from './new-heroes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'newHeroes',
        component: NewHeroes
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
    declarations: [ NewHeroes ]
})
export class NewHeroesModule {

}