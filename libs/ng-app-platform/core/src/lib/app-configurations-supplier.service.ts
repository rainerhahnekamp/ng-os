import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppConfiguration } from './models/app-configuration';

@Injectable({ providedIn: 'root' })
export class AppConfigurationsSupplier {
  _appConfigurations$ = new BehaviorSubject<AppConfiguration[]>([]);
  constructor(private httpClient: HttpClient) {}

  get appConfigurations$(): Observable<AppConfiguration[]> {
    return this._appConfigurations$.asObservable();
  }

  set(appConfigurations: AppConfiguration[]) {
    this._appConfigurations$.next(appConfigurations);
  }
}
