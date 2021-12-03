import { TestBed } from '@angular/core/testing';

import { RecetarioCarmelitaService } from './recetario-carmelita.service';

describe('RecetarioCarmelitaService', () => {
  let service: RecetarioCarmelitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetarioCarmelitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
