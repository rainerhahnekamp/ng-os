import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RouteAppLinker } from './route-app-linker';

@Injectable({
  providedIn: 'root',
})
export class AppsConfigurationLoaderGuard implements CanActivate {
  constructor(private routeAppLinker: RouteAppLinker) {}

  canActivate(): Observable<boolean> {
    return this.routeAppLinker.isLoaded$.pipe(filter((isLoaded) => isLoaded));
  }
}
