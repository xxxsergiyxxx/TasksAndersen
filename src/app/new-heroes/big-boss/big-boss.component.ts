import { Component, OnInit }                                from '@angular/core';
import { FormGroup, FormBuilder, Validators }               from '@angular/forms';
import { Hero, HeroService }                                from '../../processing-hero/heroes';
import { forbiddenNameValidator, MyValidators }             from './big-boss.validator';

@Component({
    selector: 'bigboss',
    moduleId: String(module.id),
    templateUrl: './big-boss.component.html',
    styleUrls: ['./big-boss.component.css']
})
export class BigBoss implements OnInit {
    public powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    public active = true;
    public hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. What');
    public submitted = false;
    public heroForm: FormGroup;

    constructor(private fb: FormBuilder, private validator: MyValidators) {

    }
    
    onSubmit() {
        this.submitted = true;
        this.hero = this.heroForm.value;
    }
    addHero() {
        this.hero = new Hero(42, '', '', '');
        this.buildForm();

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.heroForm = this.fb.group({
        'name': [this.hero.name, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(24),
            //this.validator.ValidName.bind(this.validator),
            forbiddenNameValidator(/bob/i)
            ]
        ],
        'alterEgo': [this.hero.name],
        'power':    [this.hero.story, Validators.required],
         mail:['']
        });

        this.heroForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); 
    }

    onValueChanged(data?: any) {
        if (!this.heroForm) { 
            return; 
        }
        const form = this.heroForm;

        for (const field in this.formErrors) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
            }
        }
        }
    }

    formErrors = {
        'name': '',
        'power': ''
    };

    validationMessages = {
        'name': {
        'required':      'Name is required.',
        'minlength':     'Name must be at least 4 characters long.',
        'maxlength':     'Name cannot be more than 24 characters long.',
        'forbiddenName': 'Someone named "Bob" cannot be a hero.'
        },
        'power': {
        'required': 'Power is required.'
        }
    };
}