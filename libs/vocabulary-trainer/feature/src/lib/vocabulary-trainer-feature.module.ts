import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgAppPlatformSecurityModule } from '@ng-app-platform/ng-app-platform/security';
import { OverviewComponent } from './overview/overview.component';
import { Vocabulary } from './vocabulary';
import { VOCABULARY_SET } from './vocabulary-set';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OverviewComponent }]),
    NgAppPlatformSecurityModule,
  ],
  declarations: [OverviewComponent],
})
export class VocabularyTrainerFeatureModule {
  static forRoot(
    vocabularySet: Vocabulary[]
  ): ModuleWithProviders<VocabularyTrainerFeatureModule> {
    return {
      ngModule: VocabularyTrainerFeatureModule,
      providers: [{ provide: VOCABULARY_SET, useValue: vocabularySet }],
    };
  }
}
