import { TestBed } from '@angular/core/testing';

import { AuthLocalStorageService } from './auth-local-storage.service';

describe('AuthLocalStorageService', () => {
  let service: AuthLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
