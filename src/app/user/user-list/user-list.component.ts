import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {UserDTO} from "../user-dto";
// import {UserService} from "../user.service";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  selectedUser?: UserDTO;
  @Input() userList?: UserDTO [];

  constructor( private readonly user: UserService ) {
  }

  addNewUser ( firstname: string, lastname: string, email: string ) {
    this.user.addUser( {firstname, lastname, email} ).subscribe(
      n => this.userList?.push( n )
    )
  }

  selectedUsr( user: UserDTO) {
    this.selectedUser =
      this.selectedUser  === user ? undefined : user;
    this.user.setSelectedUsr( this.selectedUser );
    // this.user.selectedName = this.selectedUserName;
    // test for update a user
    // if ( this.selectedUser ) {
    //   this.selectedUser.firstname = this.selectedUser.firstname + '_';
    //   this.selectedUser.save().subscribe()
    // }

    // if ( this.selectedUser ) {
    //   this.selectedUser.del().subscribe()
    // }



  }
}
