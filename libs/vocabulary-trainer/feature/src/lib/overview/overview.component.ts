import { Component } from '@angular/core';
import { UserService } from '@ng-os/types';

@Component({
  selector: 'ng-os-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  constructor(public userService: UserService) {}
}
