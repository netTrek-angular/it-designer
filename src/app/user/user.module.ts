import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserCompLogoComponent } from './user-comp-logo/user-comp-logo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';



@NgModule({
  declarations: [
    UserComponent,
    UserAvatarComponent,
    UserCompLogoComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        UserComponent,
        UserListComponent
    ],
})
export class UserModule { }
