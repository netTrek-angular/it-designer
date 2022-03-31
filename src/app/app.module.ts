import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {BindingSamplesModule} from './binding-samples/binding-samples.module';
import {DirectiveSamplesModule} from './directive-samples/directive-samples.module';
import {PipeSamplesModule} from './pipe-samples/pipe-samples.module';

import '@angular/common/locales/global/de'
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppAuthInterceptor} from "./app-auth.interceptor";
import { NotFoundModule } from './not-found/not-found.module';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    BindingSamplesModule,
    DirectiveSamplesModule,
    PipeSamplesModule,
    NotFoundModule,
  ],
  providers: [
    // UserService,
    {provide: LOCALE_ID, useValue: 'de'}, // der Injektor bekommt die Info, dass de die Standrdsprache ist
    {provide: HTTP_INTERCEPTORS, useClass: AppAuthInterceptor, multi: true }
    // {provide: FOOD, useValue: 1.07 },
    // {provide: NON_FOOD, useValue: 1.19 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( router: Router ) {

    router.events.pipe(
      filter ( events => events instanceof NavigationEnd )
    )
      .subscribe(
        // n => console.log( n )
      )

  }
}
