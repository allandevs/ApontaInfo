import { TestBed } from '@angular/core/testing';

import { SuporteService } from './suporte.service';

describe('SuporteService', () => {
  let service: SuporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
