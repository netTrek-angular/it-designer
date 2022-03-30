import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingSamplesComponent } from './binding-samples.component';
import {CountdownComponent} from "./countdown/countdown.component";



@NgModule({
  declarations: [
    BindingSamplesComponent, CountdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BindingSamplesComponent, CountdownComponent
  ]
})
export class BindingSamplesModule { }
