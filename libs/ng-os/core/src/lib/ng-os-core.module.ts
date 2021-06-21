// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../modules.d.ts" />

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SecurityGuard } from '@ng-os/ng-os/security';
import { AppsConfigurationLoaderGuard } from './apps-configuration-loader.guard';
import { CanvasComponent } from './canvas/canvas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteAppLinker, routeAppLinker } from './route-app-linker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CanvasComponent,
        canActivate: [SecurityGuard],
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
export class NgOsCoreModule {}
