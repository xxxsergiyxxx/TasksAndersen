import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftColumn } from './left.column.component';
import { Container } from './container/container.component';
import { Link } from './link/link.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LeftColumn,
        Container,
        Link
    ],
    exports: [
        LeftColumn
    ]
})
export class LeftColumnModule {

}