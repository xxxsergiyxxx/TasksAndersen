import { Injectable }               from '@angular/core';
import { Router, 
         Resolve, 
         RouterStateSnapshot, 
         ActivatedRouteSnapshot }   from '@angular/router';
import { Observable }               from 'rxjs';

import { GetDataService }           from '../shared.services/http.getdata.service';
import { Team }                     from '../shared.types/types';

@Injectable()
export class TeamsResolver implements Resolve <Team[]> {
    private url: string;

    constructor( private dataService: GetDataService ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <Team[]> {
        console.log(route.params);
        return this.dataService.getData(this.url);
    }
}