import { TestBed } from '@angular/core/testing';

import { GreenAngularService } from './green-angular.service';

describe('GreenAngularService', () => {
  let service: GreenAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
