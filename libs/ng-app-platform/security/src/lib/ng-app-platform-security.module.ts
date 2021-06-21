import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  // providers: [
  //   {
  //     provide: UserService,
  //     useExisting: DefaultUserService,
  //   },
  // ],
  declarations: [LoginComponent, LogoutComponent],
})
export class NgAppPlatformSecurityModule {
  constructor(
    @Optional() @SkipSelf() parentModule?: NgAppPlatformSecurityModule
  ) {
    if (parentModule) {
      throw new Error('Security module can only be loaded by the host itself.');
    }
  }
}
