import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule }       from '@angular/material';
import { MdDialog }            from '@angular/material';

import { LeftColumn } from './left.column.component';
import { Container } from './container/container.component';
import { Link } from './link/link.component';
import { Content } from './content/content.component';
import { MainRouter } from './left.column.routing';
import { Border } from './content/content.directive';

@NgModule({
    imports: [
        CommonModule,
        MainRouter,
        MaterialModule.forRoot()
    ],
    declarations: [
        LeftColumn,
        Container,
        Link,
        Content,
        Border
    ],
    exports: [
        LeftColumn
    ]
})
export class LeftColumnModule {

}