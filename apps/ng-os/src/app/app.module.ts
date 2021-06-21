import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgOsCoreModule } from '@ng-os/ng-os/core';
import { NgOsSecurityModule } from '@ng-os/ng-os/security';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgOsSecurityModule.forRoot(),
    NgOsCoreModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
