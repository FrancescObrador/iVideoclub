import { TestBed } from '@angular/core/testing';

import { PeliculaAPIService } from './pelicula-api.service';

describe('PeliculaAPIService', () => {
  let service: PeliculaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
