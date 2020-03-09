import { TestBed } from '@angular/core/testing';

import { EntryItemsService } from './entry-items.service';

describe('EntryItemsService', () => {
  let service: EntryItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
