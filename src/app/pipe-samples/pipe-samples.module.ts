import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples.component';
import { TaxPipe } from './tax/tax.pipe';



@NgModule({
  declarations: [
    PipeSamplesComponent,
    TaxPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeSamplesComponent,
    TaxPipe
  ]
})
export class PipeSamplesModule { }
