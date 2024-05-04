import { TestBed } from '@angular/core/testing';

import { CarSeatServiceService } from './car-seat-service.service';

describe('CarSeatServiceService', () => {
  let service: CarSeatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSeatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
