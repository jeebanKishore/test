import { TestBed } from '@angular/core/testing';

import { ForminputService } from './forminput.service';

describe('ForminputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForminputService = TestBed.get(ForminputService);
    expect(service).toBeTruthy();
  });
});
