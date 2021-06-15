import { Component, OnInit } from '@angular/core';
import { UserService } from '@ng-app-platform/types';

@Component({
  selector: 'ng-app-platform-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
