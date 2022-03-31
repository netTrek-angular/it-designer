import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserCompLogoComponent } from './user-comp-logo/user-comp-logo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UserComponent,
    UserAvatarComponent,
    UserCompLogoComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        UserComponent,
        UserListComponent
    ],
})
export class UserModule { }
