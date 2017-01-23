import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Observable, Subscription, Observer, AsyncSubject } from "rxjs/Rx";
import { FormGroup, FormBuilder, Validators, NgForm, NG_ASYNC_VALIDATORS, FormControl } from '@angular/forms';
import { Hero, HeroService } from '../../processing-hero/heroes';
import { AsyncValidator } from './big-boss.validator';
import { IValidation } from './big-boss.validator';
import { BigBossService, ValidParametr} from './big-boss.service';

@Component({
    selector: 'bigboss',
    moduleId: String(module.id),
    templateUrl: './big-boss.component.html',
    styleUrls: ['./big-boss.component.css']
})
export class BigBoss implements OnInit {
    public signUpForm: FormGroup;
    public hero: Hero;
    public name: FormControl;
    public story: FormControl;
    public formError: Object;
    public paramValidName: ValidParametr;
    public paramValidHistory: ValidParametr;
    public formErrors: Object = {
        'name': '',
        'story': ''
    };
    constructor(private fb: FormBuilder, 
                private asyncValidator: AsyncValidator, 
                private bigBossService: BigBossService) 
                {}

    ngOnInit() {
        this.bigBossService.formErrors = this.formErrors;
        this.paramValidName = new ValidParametr(
            this.bigBossService.formErrors,
            'name',
            this.bigBossService.validationMessages.name.forbiddenName
        );
        this.paramValidHistory = new ValidParametr(
            this.bigBossService.formErrors,
            'story',
            this.bigBossService.validationMessages.story.forbiddenName
        )
        this.hero = new Hero(5, '', '', '');
        this.name = new FormControl(this.hero.name,
            Validators.compose([
                Validators.required,
                Validators.minLength(4)]),
            Validators.composeAsync([
                this.asyncValidator.validateUnique2(this.paramValidName)]
            ));
        this.story = new FormControl(this.hero.story,
            Validators.compose([
                Validators.required,
                Validators.minLength(25)]),
            Validators.composeAsync([
                this.asyncValidator.validateUnique(1000, this.paramValidHistory)]));
        this.signUpForm = this.fb.group({
            'name': this.name,
            'story': this.story
        })
        this.bigBossService.signUpForm = this.signUpForm;
        this.signUpForm.valueChanges.subscribe(res => {
            this.bigBossService.onValueChanged();
        })

    }
}