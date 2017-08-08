import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BigLogoComponent } from './components/big-logo/big-logo.component';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, HomeComponent, HomeHeaderComponent, PageNotFoundComponent, BigLogoComponent],
  exports: [HomeComponent, PageNotFoundComponent],
})
export class PublicModule { }
