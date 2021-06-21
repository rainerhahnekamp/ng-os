import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgAppPlatformCoreModule } from '@ng-app-platform/ng-app-platform/core';
import {
  DefaultUserService,
  NgAppPlatformSecurityModule,
} from '@ng-app-platform/ng-app-platform/security';
import { UserService } from '@ng-app-platform/types';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgAppPlatformSecurityModule,
    NgAppPlatformCoreModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: UserService,
      useExisting: DefaultUserService,
    },
  ],
})
export class AppModule {}
