// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../modules.d.ts" />

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'vocabulary-trainer',
        loadChildren: () =>
          loadRemoteModule<VocabularyTrainerModule>({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'vocabularyTrainer',
            exposedModule: './Module',
          }).then((m) => m.VocabularyTrainerFeatureModule),
      },
    ]),
  ],
  declarations: [DashboardComponent],
})
export class NgAppPlatformCoreModule {}
