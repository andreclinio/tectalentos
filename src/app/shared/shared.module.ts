import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './services/userservice/user.service';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  declarations: [MainFooterComponent, MainPageComponent, MainHeaderComponent],
  exports: [MainPageComponent, MainHeaderComponent, MainFooterComponent]
})
export class SharedModule { }
