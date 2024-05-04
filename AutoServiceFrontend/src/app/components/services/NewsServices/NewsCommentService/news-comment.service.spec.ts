import { TestBed } from '@angular/core/testing';

import { NewsCommentService } from './news-comment.service';

describe('NewsCommentService', () => {
  let service: NewsCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
