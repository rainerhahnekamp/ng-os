import { Injectable } from '@angular/core';
import { UserService } from '@ng-os/types';
import { UserSubject } from './user-subject.service';

@Injectable()
export class DefaultUserService implements UserService {
  user$ = this.userSubject.user$.asObservable();

  constructor(private userSubject: UserSubject) {}
}
