import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserCompLogoComponent } from './user-comp-logo/user-comp-logo.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserComponent,
    UserAvatarComponent,
    UserCompLogoComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ],
})
export class UserModule { }
