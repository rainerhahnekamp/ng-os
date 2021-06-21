import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSubject } from '../user-subject.service';

@Component({
  selector: 'ng-app-platform-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private userSubject: UserSubject) {}

  ngOnInit() {
    this.userSubject.logout();
    this.router.navigateByUrl('/');
  }
}
