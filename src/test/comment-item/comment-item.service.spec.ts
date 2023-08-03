import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CommentItemService } from '../../app/comments/comment-item/comment-item.service';
import { storyUrl } from '../../app/app.constant';

describe('CommentItemService', () => {
  let service: CommentItemService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentItemService],
    });
    service = TestBed.inject(CommentItemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP GET request to fetch comment data', () => {
    const mockCommentId = 123;
    const mockCommentData = { id: 123, text: 'Test comment' };

    service.getTopicById(mockCommentId).subscribe((response) => {
      expect(response).toEqual(mockCommentData);
    });

    const request = httpMock.expectOne(`${storyUrl}/${mockCommentId}.json`);
    expect(request.request.method).toBe('GET');
    request.flush(mockCommentData);
  });

  it('should handle error when HTTP request fails', () => {
    const mockCommentId = 456;
    const errorMessage = 'Error fetching comment data';

    service.getTopicById(mockCommentId).subscribe(
      () => {
        fail('The request should have failed');
      },
      (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${storyUrl}/${mockCommentId}.json`);
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });
});
