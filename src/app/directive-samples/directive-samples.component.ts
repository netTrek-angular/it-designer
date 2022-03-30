import {Component} from '@angular/core';

@Component({
  selector: 'itd-directive-samples',
  templateUrl: './directive-samples.component.html',
  styleUrls: ['./directive-samples.component.scss']
})
export class DirectiveSamplesComponent {

  names: string [] = [ 'peter', 'heike', 'frank' ]

  show: boolean = false;

  constructor() { }

  toggleShow() {
    this.show = !this.show;
  }
}
