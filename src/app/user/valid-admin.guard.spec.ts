import { TestBed } from '@angular/core/testing';

import { ValidAdminGuard } from './valid-admin.guard';

describe('ValidAdminGuard', () => {
  let guard: ValidAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
