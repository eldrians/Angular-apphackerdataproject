import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from '../../../app/services/api/api.service';
import { storiesUrl, baseUrl } from '../../../app/app.constant';
import { of, throwError } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch topics data for given ids', (done) => {
    const topicIds = [1, 2];
    const topicsResponse = [
      { id: 1, title: 'Topic 1' },
      { id: 2, title: 'Topic 2' },
    ];

    service.getTopicsData(topicIds).subscribe((data) => {
      expect(data).toEqual(topicsResponse);
      done();
    });
    topicIds.forEach((id) => {
      const request = httpMock.expectOne(`${baseUrl}/item/${id}.json`);
      expect(request.request.method).toBe('GET');
      request.flush({ id, title: `Topic ${id}` });
    });
  });

  it('should fetch comments data for given ids', (done) => {
    const commentIds = [1, 2];
    const commentsResponse = [
      { id: 1, title: 'Topic 1' },
      { id: 2, title: 'Topic 2' },
    ];

    service.getCommentsData(commentIds).subscribe((data) => {
      expect(data).toEqual(commentsResponse);
      done();
    });
    commentIds.forEach((id) => {
      const request = httpMock.expectOne(`${baseUrl}/item/${id}.json`);
      expect(request.request.method).toBe('GET');
      request.flush({ id, title: `Topic ${id}` });
    });
  });
});
