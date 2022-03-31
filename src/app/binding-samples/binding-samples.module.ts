import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingSamplesComponent } from './binding-samples.component';
import {CountdownComponent} from "./countdown/countdown.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BindingSamplesComponent, CountdownComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    BindingSamplesComponent, CountdownComponent
  ]
})
export class BindingSamplesModule { }
