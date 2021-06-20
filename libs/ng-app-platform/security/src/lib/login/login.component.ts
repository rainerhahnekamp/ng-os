import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultUserService } from '../default-user.service';

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

  constructor(
    private userService: DefaultUserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login() {
    if (this.formGroup.valid) {
      const { username } = this.formGroup.value;
      this.userService.login({
        id: 1,
        firstname: username,
        name: '',
        email: '',
      });
      this.router.navigateByUrl('/');
    }
  }
}
