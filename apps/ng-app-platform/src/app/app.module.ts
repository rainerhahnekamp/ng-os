import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAppPlatformCoreModule } from '@ng-app-platform/ng-app-platform/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgAppPlatformCoreModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
