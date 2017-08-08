import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuRouteInfo } from '../../../shared/models/menu-route-info';

@Component({
  selector: 'tt-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  public menuItems: MenuRouteInfo[] = [
    { path: 'intro', title: 'Home', icon: 'home' },
    { path: 'login', title: 'Login', icon: 'sign-in' },
    { path: 'register',  title: 'Cadastro', icon: 'user-plus' }
  ];

  constructor() {}

  ngOnInit() {}
}
