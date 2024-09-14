import { TestBed } from '@angular/core/testing';

import { AccounterService } from './accounter.service';

describe('AccounterService', () => {
  let service: AccounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
