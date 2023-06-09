import { TestBed } from '@angular/core/testing';

import { HttpaccessService } from './httpaccess.service';

describe('HttpaccessService', () => {
  let service: HttpaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
