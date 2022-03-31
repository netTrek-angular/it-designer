import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {UserDTO} from "../user-dto";
import {Router} from "@angular/router";
// import {UserService} from "../user.service";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  selectedUser?: UserDTO;
  @Input() userList?: UserDTO [];

  constructor( private readonly user: UserService, private readonly router: Router) {
  }

  addNewUser ( firstname: string, lastname: string, email: string ) {
    this.user.addUser( {firstname, lastname, email} ).subscribe(
      n => this.userList?.push( n )
    )
  }

  selectedUsr( user: UserDTO) {

    this.router.navigate( ['/user', user.id ] )

    /*
    this.selectedUser =
      this.selectedUser  === user ? undefined : user;
    this.user.setSelectedUsr( this.selectedUser );
    */
    // this.user.selectedName = this.selectedUserName;

    // test for update a user
    // if ( this.selectedUser ) {
    //   this.selectedUser.firstname = this.selectedUser.firstname + '_';
    //   this.selectedUser.save().subscribe()
    // }

    // test for del a user
    if ( this.selectedUser ) {
      const toDel = this.selectedUser.id;
      this.selectedUser.del().subscribe( n => {
        this.selectedUser = undefined;
        this.user.setSelectedUsr( this.selectedUser );
        const ind = this.userList!.findIndex( value => value.id === toDel );
        this.userList!.splice( ind, 1 )
      });
    }



  }
}
