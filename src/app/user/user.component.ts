import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";
import {UserDTO} from "./user-dto";

@Component({
  selector: 'itd-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent {
  name = "Saban";
  users?: UserDTO[];

  constructor( public readonly user: UserService ) {
    this.init()
  }

  private init() {
    this.user.getUsers().subscribe( users => this.users = users );
  }
}
