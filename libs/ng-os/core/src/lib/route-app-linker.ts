import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfiguration } from './models/app-configuration';

export class RouteAppLinker {
  private appConfigurations: AppConfiguration[] = [];
  private _isLoaded$ = new BehaviorSubject(false);

  get isLoaded$(): Observable<boolean> {
    return this._isLoaded$.asObservable();
  }

  registerApps(appConfigurations: AppConfiguration[]) {
    if (appConfigurations.length === 0) {
      throw new Error('cannot register an empty list of AppConfiguration');
    }

    this.appConfigurations = [...this.appConfigurations, ...appConfigurations];
    this._isLoaded$.next(true);
  }

  handleRoute() {
    const routes = this.appConfigurations.map((appConfiguration) => ({
      path: appConfiguration.key,
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: appConfiguration.remoteEntry,
          remoteName: appConfiguration.remoteName,
          exposedModule: appConfiguration.exposedModule
        }).then((m) => m[appConfiguration.moduleName])
    }));

    @NgModule({
      imports: [CommonModule, RouterModule.forChild(routes)]
    })
    class WrapperModule {
    }

    return WrapperModule;
  }
}

export const routeAppLinker = new RouteAppLinker();
