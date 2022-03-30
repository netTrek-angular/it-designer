import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveSamplesComponent } from './directive-samples.component';
import { DangerDirective } from './danger/danger.directive';



@NgModule({
  declarations: [
    DirectiveSamplesComponent,
    DangerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectiveSamplesComponent,
    DangerDirective
  ]
})
export class DirectiveSamplesModule { }
