import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from '../shared/components/main-page/main-page.component';
import { MainHeaderComponent } from '../shared/components/main-header/main-header.component';
import { MainFooterComponent } from '../shared/components/main-footer/main-footer.component';

import { ProfileMainComponent } from '../profile/components/profile-main/profile-main.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';


export const sharedRoutes: Routes = [
  { path: 'main', 
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile-main', component: ProfileMainComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [],
  declarations: []
})
export class SharedRoutingModule { }
