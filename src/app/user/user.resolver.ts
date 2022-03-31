import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {UserService} from "./user.service";
import {UserDTO} from "./user-dto";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserDTO> {

  constructor(private readonly userService: UserService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserDTO> {
    const id = Number ( route.paramMap.get( 'id' ) );
    return this.userService.getUser( id );
  }


  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return throwError(() => 'This is an error!' )
  // }
}
