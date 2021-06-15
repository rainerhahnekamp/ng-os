import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [CompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompComponent }]),
  ],
})
export class LazyModule {}
