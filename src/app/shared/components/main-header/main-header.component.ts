import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuRouteInfo } from '../../../shared/models/menu-route-info';

@Component({
  selector: 'tt-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public menuItems: MenuRouteInfo[] = [
    { path: 'profile-main', title: 'Perfil', icon: 'user' },
    { path: 'search-main',  title: 'Busca', icon: 'search' },
    { path: 'skills-main',  title: 'Competências', icon: 'trophy' }
  ];

  constructor(private router: Router) { }

  public logout() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
