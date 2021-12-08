import { TestBed } from '@angular/core/testing';

import { CallToastService } from './call-toast.service';

describe('CallToastService', () => {
  let service: CallToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
