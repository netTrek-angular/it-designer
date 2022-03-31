import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'itd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent {

  name = "Saban";

  constructor() { }

  chgName() {
    this.name = 'Peter';
  }
}
