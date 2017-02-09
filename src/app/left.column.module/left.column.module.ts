import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftColumn } from './left.column.component';
import { Container } from './container/container.component';
import { Link } from './link/link.component';
import { Content } from './content/content.component';
import { MainRouter } from './left.column.routing';

@NgModule({
    imports: [
        CommonModule,
        MainRouter
    ],
    declarations: [
        LeftColumn,
        Container,
        Link,
        Content
    ],
    exports: [
        LeftColumn
    ]
})
export class LeftColumnModule {

}