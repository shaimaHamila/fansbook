import { TestBed } from '@angular/core/testing';

import { EnpService } from './enp.service';

describe('EnpService', () => {
  let service: EnpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
