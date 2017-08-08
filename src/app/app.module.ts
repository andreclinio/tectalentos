import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {RoutingModule} from './routing/routing.module';
import {PublicModule} from './public/public.module';
import {SharedModule} from './shared/shared.module';
import {ProfileModule} from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),  BrowserModule, RouterModule,
    RoutingModule, PublicModule, SharedModule, ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
