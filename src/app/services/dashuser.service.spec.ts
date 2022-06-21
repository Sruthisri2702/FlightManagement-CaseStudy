import { TestBed } from '@angular/core/testing';

import { DashuserService } from './dashuser.service';

describe('DashuserService', () => {
  let service: DashuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
