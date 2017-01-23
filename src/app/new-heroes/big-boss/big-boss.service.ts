import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Hero, HeroService } from '../../processing-hero/heroes';
import { AsyncValidator } from './big-boss.validator';

@Injectable()
export class BigBossService {
    public signUpForm: FormGroup;
    public hero: Hero;
    public formErrors: Object;
    constructor() {
    }
    public onValueChanged(data?: any): void {
        if (!this.signUpForm) { return; }
        const form = this.signUpForm;

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
        console.log(this.signUpForm.valid);
    }
    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
            'asyncValidator': 'This name already exist.',
            'forbiddenName': 'Someone named  cannot be a hero.',
            'duplicated': 'Duplicate',
            'panding': 'Check name...'
        },
        'story': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 25 characters long.',
            'asyncValidator': 'This name already exist.',
            'forbiddenName': 'Someone named  cannot be a history.',
            'duplicated': 'Duplicate',
            'panding': 'Check name...'
        }
    };
}

export class ValidParametr {

    constructor(
        public formErrors: Object,
        public fieldName: string,
        public message: string
        )
        { }
    public setError() {
        this.formErrors[this.fieldName] = this.message;
    }

    public delError() {
        this.formErrors[this.fieldName] = '';
    }
}