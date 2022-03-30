import { Component } from '@angular/core';
import {UserService} from "./user/user.service";

@Component({
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-designer';
  countdownDuration = 2000;

  constructor( public userService: UserService ) {
    // console.log ( userService )
  }

  countdownCompleted() {
    console.log ( 'ich habe fertig' );
  }

  newPercentVal(percent: number) {
    console.log ( 'new val' + percent );
  }

  log(msg: string) {
    console.log( msg )
  }
}
