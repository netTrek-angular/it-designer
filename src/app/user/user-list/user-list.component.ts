import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  selectedUserName = '';
  @Input() userList: string[] = ['peter', 'saban']

  constructor() {
  }

  selectedUsrName( userName: string) {
    this.selectedUserName =
      this.selectedUserName === userName ? '' : userName;
  }
}
