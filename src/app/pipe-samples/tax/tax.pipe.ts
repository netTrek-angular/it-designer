import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {FOOD, NON_FOOD} from "./tax.token";

@Pipe({
  name: 'tax',
  // pure: false
})
export class TaxPipe implements PipeTransform {

  constructor(
    @Inject( FOOD ) private readonly food: number,
    @Inject( NON_FOOD ) private readonly nonFood: number
  ) {
    // console.log ( this.food, this.nonFood )
  }
  transform(value: number, isFood?: boolean ): number {
    return value * ( isFood ? this.food! : this.nonFood! ) ;
  }

}
