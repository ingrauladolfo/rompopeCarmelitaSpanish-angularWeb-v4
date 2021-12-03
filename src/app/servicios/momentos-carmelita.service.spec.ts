import { TestBed } from '@angular/core/testing';

import { MomentosCarmelitaService } from './momentos-carmelita.service';

describe('MomentosCarmelitaService', () => {
  let service: MomentosCarmelitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentosCarmelitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
