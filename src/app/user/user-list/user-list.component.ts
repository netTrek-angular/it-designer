import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
// import {UserService} from "../user.service";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  selectedUserName = '';
  @Input() userList?: User[];

  constructor( private readonly user: UserService ) {
  }

  selectedUsrName( userName: string) {
    this.selectedUserName =
      this.selectedUserName === userName ? '' : userName;
    this.user.setSelectedName( this.selectedUserName );
    // this.user.selectedName = this.selectedUserName;
  }
}
