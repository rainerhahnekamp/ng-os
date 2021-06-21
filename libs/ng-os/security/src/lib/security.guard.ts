import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ANONYMOUS_USER, UserService } from '@ng-os/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SecurityGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.user$.pipe(
      map((user) => {
        if (user === ANONYMOUS_USER) {
          return this.router.createUrlTree(['/login']);
        }
        return true;
      })
    );
  }
}
