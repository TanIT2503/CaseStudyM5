import { TestBed } from '@angular/core/testing';

import { FuramaServiceService } from './furama-service.service';

describe('FuramaServiceService', () => {
  let service: FuramaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuramaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
