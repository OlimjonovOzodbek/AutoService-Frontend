import { TestBed } from '@angular/core/testing';

import { CarRecordService } from './car-record.service';

describe('CarRecordService', () => {
  let service: CarRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
