import {Component} from '@angular/core';
import {UserService} from "./user/user.service";
import {filter} from "rxjs";

@Component({
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-designer';

  constructor( private readonly user: UserService ) {
    user.selectedName$.pipe(
      filter ( val => val === 'peter' )
    ).subscribe(
      next => console.log ( 'peter is selected ', next )
    )
  }

  log(msg: string) {
    console.log( msg )
  }
}
