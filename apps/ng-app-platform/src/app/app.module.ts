import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgAppPlatformCoreModule } from '@ng-app-platform/ng-app-platform/core';
import { NgAppPlatformSecurityModule } from '@ng-app-platform/ng-app-platform/security';
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
})
export class AppModule {}
