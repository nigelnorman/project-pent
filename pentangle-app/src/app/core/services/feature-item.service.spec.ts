import { TestBed } from '@angular/core/testing';

import { FeatureItemService } from './feature-item.service';

describe('FeatureItemService', () => {
  let service: FeatureItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
