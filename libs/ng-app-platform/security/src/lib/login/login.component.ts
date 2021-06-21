import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ANONYMOUS_USER } from '@ng-app-platform/types';
import { map } from 'rxjs/operators';
import { UserSubject } from '../user-subject.service';

@Component({
  selector: 'ng-app-platform-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formGroup = this.fb.group({
    username: [],
    password: [],
  });

  isLoggedIn$ = this.userSubject.user$.pipe(
    map((user) => user !== ANONYMOUS_USER)
  );

  constructor(
    private userSubject: UserSubject,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login() {
    if (this.formGroup.valid) {
      const { username } = this.formGroup.value;
      this.userSubject.login({
        id: 1,
        firstname: username,
        name: '',
        email: '',
      });
      this.router.navigateByUrl('/');
    }
  }
}
