/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPerformanceDataService } from './user-performance-data.service';

describe('Service: UserPerformanceData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPerformanceDataService]
    });
  });

  it('should ...', inject([UserPerformanceDataService], (service: UserPerformanceDataService) => {
    expect(service).toBeTruthy();
  }));
});
