import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UserService } from '@ng-app-platform/types';
import { of } from 'rxjs';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: UserService,
      useValue: { user$: of('Test User') },
    },
  ],
})
export class NgAppPlatformSecurityModule {
  constructor(
    @Optional() @SkipSelf() parentModule?: NgAppPlatformSecurityModule
  ) {
    console.log(parentModule);
    if (parentModule) {
      throw new Error('Security module can only be loaded by the host itself.');
    }
  }
}
