import { Component, OnInit } from '@angular/core';
import { TestService } from '@ng-app-platform/ng-lib';

@Component({
  selector: 'ng-app-platform-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent implements OnInit {
  constructor(public testService: TestService) {}

  ngOnInit(): void {}
}
