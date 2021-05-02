import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OverviewComponent }]),
  ],
  declarations: [OverviewComponent],
})
export class VocabularyTrainerFeatureModule {}
