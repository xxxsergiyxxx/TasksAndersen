import { Component }                from '@angular/core';
import { Team }                     from '../../shared.types/types';
@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class Content {
    public teams: Team[];
}