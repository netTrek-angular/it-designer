import {Component} from '@angular/core';
import {UserService} from "./user/user.service";
import {filter, map} from "rxjs";

@Component({
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-designer';

  constructor( private readonly user: UserService ) {
    user.selectedUsr$.pipe(
      map ( user => user?.firstname ),
      filter ( val => val === 'Bernard' )
    ).subscribe(
      next => console.log ( 'Bernard is selected ', next )
    )
  }

  log(msg: string) {
    console.log( msg )
  }
}
