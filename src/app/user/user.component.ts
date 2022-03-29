import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'itd-user',
  templateUrl: './user.component.html',
  // template: '<p><strong>hello</strong> world</p>',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  name = "Saban";

  constructor() { }

  ngOnInit(): void {
  }

  chgName() {
    this.name = 'Peter';
  }
}
