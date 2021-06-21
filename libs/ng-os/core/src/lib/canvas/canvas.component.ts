import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfigurationsSupplier } from '../app-configurations-supplier.service';
import { AppConfiguration } from '../models/app-configuration';
import { RouteAppLinker } from '../route-app-linker';

@Component({
  selector: 'ng-os-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  constructor(
    private appConfigurationSupplier: AppConfigurationsSupplier,
    private httpClient: HttpClient,
    private routeAppLinker: RouteAppLinker
  ) {}
  ngOnInit(): void {
    this.httpClient
      .get<{ apps: AppConfiguration[] }>('/assets/apps.json')
      .subscribe(({ apps }) => {
        this.appConfigurationSupplier.set(apps);
        this.routeAppLinker.registerApps(apps);
      });
  }
}
