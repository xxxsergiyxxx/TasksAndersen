import { Directive, forwardRef, Injectable } from '@angular/core';
import { FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable, Subscription, Observer } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Hero } from '../../processing-hero/heroes';
import { ValidParametr } from './big-boss.service';

export interface IValidation {
    [key: string]: boolean;
}

@Injectable()
export class AsyncValidator {
    constructor(private http: Http) {

    }

    validateUnique(interval: number, validParam: ValidParametr): AsyncValidatorFn {
        return (control: AbstractControl): any => {
            control.setErrors({ 'panding': true })
            const name = control.value;
            return new Observable((observer: Observer<IValidation>) => {
                this.http.get('/src/data/heroes.json').subscribe(res => {
                    const data = res.json();
                    const find = data.find((elem: Hero) => {
                        return (elem.name === name)
                    });
                    setTimeout(() => {
                        console.log(interval);
                        if (find) {
                            observer.next({ 'forbiddenName': true });
                            validParam.setError();
                        } else {
                            observer.next(null);
                            validParam.delError();
                        }
                        observer.complete();
                    }, interval);
                })
            }).toPromise()
        }
    }

    validateUnique2(validParam: ValidParametr): AsyncValidatorFn {
        return (control: AbstractControl): any => {
            control.setErrors({ 'panding': true })
            const name = control.value;
            return this.http.get('/src/data/big_bosses.json').map(res => {
                const data = res.json();
                const find = data.find((elem: Hero) => {
                    return (elem.name === name)
                });
                if (find) {
                    validParam.setError();
                    return ({ 'forbiddenName': true });
                } else {
                    validParam.delError();
                    return (null);
                }
            }).first().toPromise()
        }
    }
}
