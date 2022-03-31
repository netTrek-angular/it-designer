import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'itd-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent /*implements OnInit, OnChanges*/ {

  @Input() user?: User;
  @Output() selectUsr: EventEmitter<User> = new EventEmitter<User>()

  @Input()
  @HostBinding('class.selected')
  isSelected = false;

  constructor() { }

  @HostListener('click')
  clicked() {
    this.selectUsr.emit( this.user );
  }
}
