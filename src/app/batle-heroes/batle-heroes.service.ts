import { Injectable } from '@angular/core';

@Injectable()
export class BatleService {
    public activeStyle: Object = {
                    'color': 'rgba(0,0,0,1)',
                    'cursor': 'pointer'
    }
    public disabledStyle: Object = {
                    'color': 'rgba(0,0,0,.38)',
                    'cursor': 'default'
    }
    public selection: Object = {
        'transform': 'translate(100px,500px)'
    }
    constructor() {

    }
}