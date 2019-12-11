import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly auth: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    //  tslint:disable-next-line: max-line-length
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn;
  }

  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   //  tslint:disable-next-line: max-line-length
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.auth.isLoggedIn;
  // }
}

