import { TestBed } from '@angular/core/testing';

import { CadastroUserService } from './cadastro-user.service';

describe('CadastroUserService', () => {
  let service: CadastroUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
