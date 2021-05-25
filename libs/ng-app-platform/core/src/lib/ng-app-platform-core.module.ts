// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../modules.d.ts" />

import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { RouteAppLinker, routeAppLinker } from './route-app-linker';
import { AppsConfigurationLoaderGuard } from './apps-configuration-loader.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CanvasComponent,
        children: [
          {
            path: '',
            component: DashboardComponent,
          },
          {
            path: 'apps',
            canActivate: [AppsConfigurationLoaderGuard],
            loadChildren: () => routeAppLinker.handleRoute(),
          },
        ],
      },
    ]),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: RouteAppLinker,
      useValue: routeAppLinker,
    },
  ],
  declarations: [DashboardComponent, CanvasComponent],
})
export class NgAppPlatformCoreModule {}
