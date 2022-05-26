import { TestBed } from '@angular/core/testing';

import { TmdbAPIService } from './tmdb-api.service';

describe('TmdbAPIService', () => {
  let service: TmdbAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
