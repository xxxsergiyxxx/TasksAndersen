import { Component } from '@angular/core';
import { Hero } from '../processing-hero/heroes';
import '../../public/style.css';

@Component({
  moduleId: String(module.id),
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
