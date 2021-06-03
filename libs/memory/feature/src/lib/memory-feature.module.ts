import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: '',
    component: MemoryComponent
  }])],
  declarations: [MemoryComponent]
})
export class MemoryFeatureModule {
}
