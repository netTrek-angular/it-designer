import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {filter, map, Subscription, switchMap} from "rxjs";
import {UserDTO} from "../user-dto";

@Component({
  selector: 'itd-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  userDTO?: UserDTO;
  private subscription?: Subscription;

  constructor( private readonly activatedRoute: ActivatedRoute, private readonly userService: UserService ) {

  }

  ngOnInit(): void {
    console.log ( 'init userDetail' )
    this.subscription = this.activatedRoute.paramMap.pipe(
      map ( paramMap => Number (paramMap.get('id')) ),
      filter ( id => !!id ),
      switchMap ( id => this.userService.getUser( id ) )
    ).subscribe(
      userDTO => this.userDTO = userDTO
    )

    /* vermeide verschachtelte subscriptions
    this.activatedRoute.paramMap.pipe(
      map ( paramMap => Number (paramMap.get('id')) )
    )
      .subscribe(
      id => {
        this.userService.getUser( id ).subscribe(
          userDTO => this.userDTO = userDTO
        )
      }
    )
    */
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
