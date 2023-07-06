import { TestBed } from '@angular/core/testing';

import { ChildServiceService } from './child-service.service';

describe('ChildServiceService', () => {
  let service: ChildServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
