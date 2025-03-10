import { TestBed } from '@angular/core/testing';

import { SupersetService } from './superset.service';

describe('SupersetService', () => {
  let service: SupersetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupersetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
