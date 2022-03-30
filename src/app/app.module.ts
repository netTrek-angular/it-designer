import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSamplesModule } from './binding-samples/binding-samples.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import '@angular/common/locales/global/de'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSamplesModule,
    DirectiveSamplesModule,
    PipeSamplesModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'} // der Injektor bekommt die Info, dass de die Standrdsprache ist
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
