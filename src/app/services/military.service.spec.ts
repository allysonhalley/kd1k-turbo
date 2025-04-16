import { TestBed } from '@angular/core/testing';

import { MilitaryService } from './military.service';

describe('MilitaryService', () => {
  let service: MilitaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilitaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
