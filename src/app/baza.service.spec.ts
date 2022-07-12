import { TestBed } from '@angular/core/testing';

import { BazaService } from './baza.service';

describe('BazaService', () => {
  let service: BazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
