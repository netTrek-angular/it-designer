import {Component} from '@angular/core';

@Component({
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-designer';

  log(msg: string) {
    console.log( msg )
  }
}
