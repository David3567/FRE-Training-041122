import { TestBed } from '@angular/core/testing';

import { MoviedatailsGuard } from './moviedatails.guard';

describe('MoviedatailsGuard', () => {
  let guard: MoviedatailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MoviedatailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
