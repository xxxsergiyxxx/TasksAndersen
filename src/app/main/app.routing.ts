import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
const routes: Routes = [
    {
        path: 'competition/:id'
    },
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'competition',
        redirectTo: ''
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
        ],
    exports: [
        RouterModule
    ]
})
export class MainRouter {

}