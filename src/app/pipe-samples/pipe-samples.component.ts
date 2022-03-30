import {Component} from '@angular/core';

@Component({
  selector: 'itd-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls: ['./pipe-samples.component.scss']
})
export class PipeSamplesComponent {

  sampleStr = 'Hello World, Lorem Saban und vieles mehr';
  sampleNum = Math.PI;
  sampleDate = new Date();
  sampleObj = {name: 'saban', age: 44 };
  samplePrice = 99.99;

  constructor() { }

}
