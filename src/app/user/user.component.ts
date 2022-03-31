import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'itd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent {

  name = "Saban";

  constructor( public readonly user: UserService ) {}

  startInterval() {
    this.user.subScribeToSharedObs();
  }
}
