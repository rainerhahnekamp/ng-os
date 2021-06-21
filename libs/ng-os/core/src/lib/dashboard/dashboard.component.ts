import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigurationsSupplier } from '../app-configurations-supplier.service';
import { AppConfiguration } from '../models/app-configuration';

@Component({
  selector: 'ng-os-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  appConfigurations$: Observable<AppConfiguration[]> | undefined;

  constructor(public appConfigurationsSupplier: AppConfigurationsSupplier) {}
}
