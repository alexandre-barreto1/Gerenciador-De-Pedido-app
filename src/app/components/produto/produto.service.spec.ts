import { TestBed } from '@angular/core/testing';

import { Produto.ServiceService } from './produto.service.service';

describe('Produto.ServiceService', () => {
  let service: Produto.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Produto.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
