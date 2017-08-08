import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicModule } from '../public/public.module';
import { ProfileModule } from '../profile/profile.module';

import { PublicRoutingModule } from '../public/public.routing.module';
import { SharedRoutingModule } from '../shared/shared.routing.module';

import { ProfileMainComponent } from '../profile/components/profile-main/profile-main.component';
import { HomeComponent } from '../public/components/home/home.component';
import { PageNotFoundComponent } from '../public/components/page-not-found/page-not-found.component';

import { publicRoutes } from '../public/public.routing.module';

import { AppComponent } from '../app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: "home/intro", pathMatch: 'full' },
  { path: 'logged', redirectTo: "main", pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedRoutingModule,
    RouterModule.forRoot(appRoutes, {useHash: true, enableTracing: false})
  ],
  exports: [],
  declarations: []
})
export class RoutingModule { }
