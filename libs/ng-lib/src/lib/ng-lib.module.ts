import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TestService } from './test.service';

@NgModule({
  imports: [CommonModule],
  providers: [TestService],
})
export class NgLibModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgLibModule) {
    console.log('module call');
    if (parentModule) {
      throw new Error('NgLibModule has already been imported.');
    }
  }
}
