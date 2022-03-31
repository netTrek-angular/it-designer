import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {User} from "../../user";
import {UserDTO} from "../../user-dto";

@Component({
  selector: 'itd-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent /*implements OnInit, OnChanges*/ {

  @Input() user?: UserDTO;
  @Output() selectUsr: EventEmitter<UserDTO> = new EventEmitter<UserDTO>()

  @Input()
  @HostBinding('class.selected')
  isSelected = false;

  constructor() { }

  @HostListener('click')
  clicked() {
    this.selectUsr.emit( this.user );
  }
}
