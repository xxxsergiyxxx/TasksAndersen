import { Component } from '@angular/core';
import { Heroes } from '../processing-hero/heroes';
import { Hero } from '../processing-hero/heroes';

@Component({
  moduleId: String(module.id),
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[] = Heroes;
}
