import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfiguration } from './models/app-configuration';

@Injectable({ providedIn: 'root' })
export class AppConfigurationsSupplier {
  constructor(private httpClient: HttpClient) {}

  _appConfigurations$ = new BehaviorSubject<AppConfiguration[]>([]);

  get appConfigurations$(): Observable<AppConfiguration[]> {
    return this._appConfigurations$.asObservable();
  }

  set(appConfigurations: AppConfiguration[]) {
    this._appConfigurations$.next(appConfigurations);
  }
}
