import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicModule } from '../public/public.module';
import { HomeComponent } from '../public/components/home/home.component';
import { LoginComponent } from '../public/components/login/login.component';
import { RegisterComponent } from '../public/components/register/register.component';
import { AppComponent } from '../app.component';

export const publicRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  exports: [],
  declarations: []
})
export class PublicRoutingModule { }
