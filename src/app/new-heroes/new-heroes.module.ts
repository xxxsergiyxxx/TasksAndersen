import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
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
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
    declarations: [ NewHeroes ]
})
export class NewHeroesModule {

}