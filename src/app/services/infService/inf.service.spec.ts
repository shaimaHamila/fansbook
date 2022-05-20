import { TestBed } from '@angular/core/testing';

import { InfService } from './inf.service';

describe('InfService', () => {
  let service: InfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
