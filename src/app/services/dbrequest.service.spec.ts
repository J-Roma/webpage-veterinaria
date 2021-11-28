import { TestBed } from '@angular/core/testing';

import { DbrequestService } from './dbrequest.service';

describe('DbrequestService', () => {
  let service: DbrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
