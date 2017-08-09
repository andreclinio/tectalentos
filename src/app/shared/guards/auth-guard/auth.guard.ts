import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './../../services/userservice/user.service';

@Injectable()
export class AuthGuard {

  constructor( private userService: UserService, private router: Router) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : 
  Observable<boolean> | boolean | Promise<boolean> {
    return this.userService.hasLoggedUser();
  }


}
