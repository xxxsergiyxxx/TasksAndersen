import { Directive, Input, OnChanges, SimpleChanges, Injectable, forwardRef } from '@angular/core';
import { Http } from '@angular/http';
import { NG_ASYNC_VALIDATORS, AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from "rxjs/Rx";

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
      console.log('lal');
    const name = control.value;
    const no = nameRe.test(name);
    if(no) {
        return {'forbiddenName': ''};
    }else {
        return null;
    }
  };
}

@Directive({
  selector: "[asyncValidator][formControlName], [asyncValidator][ngModel]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncValidator), 
      multi: true
    }
  ]
})

export  class AsyncValidator implements Validator {
  validate( c : AbstractControl ) : Promise<{[key : string] : any}>|Observable<{[key : string] : any}> {
    return this.validateUniqueEmailPromise(c.value);
  }

  validateUniqueEmailPromise( email : string ) {
    return new Promise(resolve => {
      setTimeout(() => {
        if( email === 'alreadyExistsEmail@gmail.com' ) {
          resolve({
            asyncInvalid: true
          })
        } else {
          resolve(null);
        }
      }, 1000);
    })
  }
}

@Injectable()
export class MyValidators {
    constructor (private http: Http) {

    }
    public ValidName(control: AbstractControl):{[key: string]: any} {
        return new Promise((resolve, reject) => {
            this.http.get('/src/data/heroes.json')
            .map(res => res.json())
            .subscribe(data => {
                if(data != null) {
                    resolve({
                            'forbiddenName': {
                                name: 'name'
                                }
                            });
                }
                else resolve(null);  
            })
        })
    }
}