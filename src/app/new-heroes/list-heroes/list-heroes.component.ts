import { Component }                from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

@Component({
    moduleId: String(module.id),
    selector: 'list-hero',
    templateUrl: './list-heroes.component.html',
    styleUrls: ['./list-heroes.component.css']
})
export class ListHeroes {
    constructor(private route: ActivatedRoute, private router: Router ) {

    }
    
    public toBigBoss() {
        this.router.navigate(['./bigboss'], { relativeTo: this.route });
    }
}