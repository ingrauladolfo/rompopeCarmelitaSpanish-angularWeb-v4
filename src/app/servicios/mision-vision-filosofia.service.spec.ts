import { TestBed } from '@angular/core/testing';

import { MisionVisionFilosofiaService } from './mision-vision-filosofia.service';

describe('MisionVisionFilosofiaService', () => {
  let service: MisionVisionFilosofiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisionVisionFilosofiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
