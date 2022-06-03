import { TestBed } from '@angular/core/testing';

import { MovielistGuard } from './movielist.guard';

describe('MovielistGuard', () => {
  let guard: MovielistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovielistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
