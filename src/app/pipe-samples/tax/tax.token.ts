import {InjectionToken} from "@angular/core";

export const FOOD: InjectionToken<string>
  = new InjectionToken<number>('food', {
    providedIn: 'root',
    factory: () => 1.19
})
export const NON_FOOD: InjectionToken<number>
  = new InjectionToken<number>('non_food', {
  providedIn: 'root',
  factory: () => 1.07
})
