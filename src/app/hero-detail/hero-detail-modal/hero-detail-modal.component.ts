import { Component } from '@angular/core';
import { MdDialogRef }    from '@angular/material';
import { Skill } from '../../processing-hero/heroes';

@Component({
  selector: 'hero-detail-modal',
  templateUrl: './hero-detail-modal.component.html',
  styleUrls: ['./hero-detail-modal.component.css']
})
export class HeroModalDialog {
    public skill: Skill;
    constructor(public dialogRef: MdDialogRef<HeroModalDialog>) {
        
    }

}