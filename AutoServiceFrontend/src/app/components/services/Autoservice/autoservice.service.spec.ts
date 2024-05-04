import { TestBed } from '@angular/core/testing';

import { AutoserviceService } from './autoservice.service';

describe('AutoserviceService', () => {
  let service: AutoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
