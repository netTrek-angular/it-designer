import { Component } from '@angular/core';

@Component({
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-designer';
  countdownDuration = 2000;

  countdownCompleted() {
    console.log ( 'ich habe fertig' );
  }

  newPercentVal(percent: number) {
    console.log ( 'new val' + percent );
  }
}
