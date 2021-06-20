import { Injectable } from '@angular/core';
import { ANONYMOUS_USER, User, UserService } from '@ng-app-platform/types';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DefaultUserService implements UserService {
  user$: Subject<User>;
  private storageKey = 'curent_user';

  constructor() {
    console.log('init');
    const lsUser = localStorage.getItem(this.storageKey);
    let user: User;
    if (lsUser) {
      user = JSON.parse(lsUser);
    } else {
      user = ANONYMOUS_USER;
    }
    this.user$ = new BehaviorSubject<User>(user);
  }

  login(user: User) {
    this.user$.next(user);
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.user$.next(ANONYMOUS_USER);
  }
}
