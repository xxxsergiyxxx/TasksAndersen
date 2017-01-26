import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService, Hero, Skill } from '../processing-hero/heroes';
import { HeroDetailService } from './hero-detail.service';
import { MdDialog }    from '@angular/material';
import { HeroModalDialog } from './hero-detail-modal/hero-detail-modal.component';

@Component({
    moduleId: String(module.id),
    templateUrl: './hero-detail.component.html',
    styleUrls:['./hero-detail.css']
})
export class HeroDetail implements OnInit {
    public currentHero: Hero;
    public value: number;
    public values: string;
    public skills: Skill[];
    public damage: Object[];
    private selectedOption: string;
    public exist: boolean = false;
    constructor(
        private route: ActivatedRoute,
        private service: HeroDetailService,
        private HeroesService: HeroService,
        private dialog: MdDialog
    ) {}

    public openDialog(index: number): void {
        let dialogRef = this.dialog.open(HeroModalDialog);
        dialogRef.componentInstance.skill = this.skills[index].skill;
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    public ngOnInit(): void {
        this.route.params
        .map((params: Params) => {
                return this.service.FindHero(+params['id']);
            })
        .subscribe ((hero: Hero) => {
                this.currentHero = hero;
            });
        this.damage = [];
        this.skills = this.route.snapshot.data['skills'];
        this.skills.forEach((element: Skill, index: number) => {
            this.damage.push(
                {
                    'width': element.skill.damage * 100/this.HeroesService.maxDamage + '%'
                }
            )
        });
        this.exist = !!this.HeroesService.myTeam.find((elem: Hero) => {
            console.log(elem.id === this.currentHero.id);
            return elem.id === this.currentHero.id;
        })
        
    }
    
    public addToTeam() {
        this.HeroesService.myTeam.push(this.currentHero);
        this.exist = true;
    }
}
