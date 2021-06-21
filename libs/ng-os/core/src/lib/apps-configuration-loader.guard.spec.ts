import { TestBed } from '@angular/core/testing';

import { AppsConfigurationLoaderGuard } from './apps-configuration-loader.guard';

describe('AppsConfigurationLoaderGuard', () => {
  let guard: AppsConfigurationLoaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppsConfigurationLoaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
