import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';

import { PreloadBatleHeroes }   from '../main/strategy.preload';

@Component({
    moduleId: String(module.id),
    selector: 'batle-heroes',
    templateUrl: './batle-heroes.component.html',
    styleUrls: ['./batle-heroes.component.css']
})
export class BatleHeroes {
    public sessionId: Observable<string>;
    public token: Observable<string>;
    public modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: PreloadBatleHeroes
  ) {
        this.modules = preloadStrategy.preloadedModules;
  }

    ngOnInit() {
        this.sessionId = this.route
        .queryParams
        .map(params => params['session_id'] || 'None');
        this.token = this.route
        .fragment
        .map(fragment => fragment || 'None');
    }
}