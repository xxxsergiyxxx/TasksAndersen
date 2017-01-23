import { Directive, forwardRef, Injectable } from "@angular/core";
import { FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from "@angular/forms";
import { Observable, Subscription, Observer } from "rxjs/Rx";
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
    static duplicated(control: AbstractControl) {
        const q = new Promise<IValidation>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'john.doe@gmail.com') {
                    resolve({ 'duplicated': true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
        return q;
    }
    getTestValid(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<IValidation> => {
            const name = control.value;
            return new Promise((resolve, reject) => {
                this.http.get('/src/data/heroes.json').toPromise().then(res => {
                    const data = res.json();
                    const find = data.find((elem: Hero) => {
                        return (elem.name === name)
                    });
                    if (find) {
                        resolve({ 'forbiddenName': true });
                    } else {
                        resolve(null);
                    }
                })
            })
        }
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
            return this.http.get('/src/data/heroes.json').map(res => {
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
    testValid(control: AbstractControl): Promise<any> {
        const name = control.value;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ 'forbiddenName': true });
            }, 1000);
        }).then(data => {
            console.log(data);
        })
    };
}
