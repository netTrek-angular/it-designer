import {Component, Input, OnInit} from '@angular/core';
// import {UserService} from "../user.service";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // providers: [UserService]
})
export class UserListComponent {

  selectedUserName = '';
  @Input() userList: string[] = ['peter', 'saban']

  constructor( /*private readonly user: UserService*/ ) {
  }

  selectedUsrName( userName: string) {
    this.selectedUserName =
      this.selectedUserName === userName ? '' : userName;
    // this.user.selectedName = this.selectedUserName;
  }
}
