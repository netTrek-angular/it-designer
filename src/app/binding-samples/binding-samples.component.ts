import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'itd-binding-samples',
  templateUrl: './binding-samples.component.html',
  styleUrls: ['./binding-samples.component.scss']
})
export class BindingSamplesComponent {

  name: string = 'Saban';
  num: number = 300;
  crrImage: number = 200300;
  html: string = `<p>
Hello <strong>World</strong>
</p>`;
  fontColor: number|string = 'blue';


  isSelected = true;
  selectedIndex = -1;

  classes: string = 'desc-text-large';

  constructor( private readonly router: Router ) {
  }


  getName(prefix: string = '', num?: number ) {
    return `${prefix} ${this.name} ${num??0}`
  }

  increment( val: number = 1) {
    this.num = this.num + val ;
  }

  chgImg() {
    if ( this.crrImage > 200300 ) {
      this.crrImage -= 100000;
    } else {
      this.crrImage += 100000;
    }
  }

  chgColor( $event?: MouseEvent ) {
    this.fontColor = this.fontColor === 'red' ? 'blue' : 'red';
  }

  setSelected(selected: number) {
    if ( this.selectedIndex === selected ) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = selected;
    }
  }

  goToUser() {
    this.router.navigate(
      ['/user']
    )
  }
}
