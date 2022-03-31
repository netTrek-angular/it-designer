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

  selectedUser?: User;
  @Input() userList?: User[];

  constructor( private readonly user: UserService ) {
  }

  selectedUsr( user: User) {
    this.selectedUser =
      this.selectedUser  === user ? undefined : user;
    this.user.setSelectedUsr( this.selectedUser );
    // this.user.selectedName = this.selectedUserName;
  }
}
