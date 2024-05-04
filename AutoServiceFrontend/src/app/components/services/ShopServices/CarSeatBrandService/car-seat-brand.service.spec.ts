import { TestBed } from '@angular/core/testing';

import { CarSeatBrandService } from './car-seat-brand.service';

describe('CarSeatBrandService', () => {
  let service: CarSeatBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSeatBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
