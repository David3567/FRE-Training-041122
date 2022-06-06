import { TestBed } from '@angular/core/testing';

import { AuthLocalInterceptor } from './auth-local.interceptor';

describe('AuthLocalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthLocalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthLocalInterceptor = TestBed.inject(AuthLocalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
