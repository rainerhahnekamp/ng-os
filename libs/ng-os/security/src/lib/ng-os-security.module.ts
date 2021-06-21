import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { UserService } from '@ng-os/types';
import { DefaultUserService } from './default-user.service';
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
  declarations: [LoginComponent, LogoutComponent],
})
export class NgOsSecurityModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgOsSecurityModule) {
    if (parentModule) {
      throw new Error('Security module can only be loaded by the host itself.');
    }
  }

  static forRoot(): ModuleWithProviders<NgOsSecurityModule> {
    return {
      ngModule: NgOsSecurityModule,
      providers: [{ provide: UserService, useClass: DefaultUserService }],
    };
  }
}
