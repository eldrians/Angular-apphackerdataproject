import { TestBed } from '@angular/core/testing';

import { CommentItemService } from './comment-item.service';

describe('CommentItemService', () => {
  let service: CommentItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
