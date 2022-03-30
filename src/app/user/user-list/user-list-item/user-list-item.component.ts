import {Component, Input} from '@angular/core';

@Component({
  selector: 'itd-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {

  @Input() name = ''

  constructor() { }


}
