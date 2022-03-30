import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'itd-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {

  @Input() name = ''
  @Output() selectUsr: EventEmitter<string> = new EventEmitter<string>()

  @Input()
  @HostBinding('class.selected')
  isSelected = false;

  constructor() { }

  @HostListener('click')
  clicked() {
    this.selectUsr.emit( this.name );
  }
}
