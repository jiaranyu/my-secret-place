import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  private isUserLoggedIn = false;

  constructor(private as: AuthService, private router: Router) {
    this.as.status.subscribe((res) => {
      this.isUserLoggedIn = res;
    });
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isUserLoggedIn){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
