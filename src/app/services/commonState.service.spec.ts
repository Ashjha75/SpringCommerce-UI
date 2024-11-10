import { TestBed } from '@angular/core/testing';

import { CommonstateService } from './commonstate.service';

describe('CommonserviceService', () => {
  let service: CommonstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
