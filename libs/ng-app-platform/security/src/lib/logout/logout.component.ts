import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultUserService } from '../default-user.service';

@Component({
  selector: 'ng-app-platform-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: DefaultUserService
  ) {}

  ngOnInit() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }
}
