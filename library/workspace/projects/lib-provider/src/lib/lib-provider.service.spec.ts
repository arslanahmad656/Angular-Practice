import { TestBed } from '@angular/core/testing';

import { LibProviderService } from './lib-provider.service';

describe('LibProviderService', () => {
  let service: LibProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
