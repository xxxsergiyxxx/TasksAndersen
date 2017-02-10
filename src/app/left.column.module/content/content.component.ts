import { Component, OnInit }                      from '@angular/core';
import { ActivatedRoute }                         from '@angular/router';
import { TeamLeague }                             from '../../shared.types/types';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class Content implements OnInit {
    public teams: TeamLeague[];
    public position: string = 'before';
    public tooltip: string;
    constructor(private route : ActivatedRoute) {
        this.route.data.subscribe(res =>{
            console.log(res);
            this.teams = res['teams'];
        })
    }

    ngOnInit(): void {
    }

    public getInfo(index: number) {
        this.tooltip = 'Loading...';
    }
}