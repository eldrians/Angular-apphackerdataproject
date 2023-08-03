import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TopicsService } from '../../app/topics/topics.service';

describe('TopicsService', () => {
  let service: TopicsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TopicsService],
    });
    service = TestBed.inject(TopicsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP GET request to fetch topics', () => {
    const mockTopics = [1, 2, 3];
    service.getTopics().subscribe((response) => {
      expect(response).toEqual(mockTopics);
    });

    const request = httpMock.expectOne('your_stories_url_here');
    expect(request.request.method).toBe('GET');
    request.flush(mockTopics);
  });

  it('should handle error when HTTP request fails', () => {
    const errorMessage = 'Error fetching topics';
    service.getTopics().subscribe(
      () => {
        fail('The request should have failed');
      },
      (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne('your_stories_url_here');
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('Network error', { message: errorMessage }));
  });
});
