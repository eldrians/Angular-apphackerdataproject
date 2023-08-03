import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storiesUrl, baseUrl } from 'src/app/app.constant';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<any> {
    const cachedData = localStorage.getItem('topicsId');
    if (cachedData) {
      // If data exists in local storage, return it as an Observable
      return of(JSON.parse(cachedData));
    } else {
      // Otherwise, make the API request, cache the data, and return the fresh data as an Observable
      return this.http.get(storiesUrl).pipe(
        map((response) => {
          const data = JSON.stringify(response);
          localStorage.setItem('topicsId', data);
          return response;
        }),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return of([]);
        })
      );
    }
  }

  getTopicItem(id: number): Observable<any> {
    const cachedData = localStorage.getItem('topicData');
    if (cachedData) {
      return of(JSON.parse(cachedData));
    } else {
      return this.http.get(`${baseUrl}/item/${id}.json`).pipe(
        map((res) => {
          const data = JSON.stringify(res);
          localStorage.setItem('topicData', data);
          return res;
        }),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return of([]);
        })
      );
    }
  }

  getCommentItem(id: number): Observable<any> {
    const cachedData = localStorage.getItem('commentData');
    if (cachedData) {
      return of(JSON.parse(cachedData));
    } else {
      return this.http.get(`${baseUrl}/item/${id}.json`).pipe(
        map((res) => {
          const data = JSON.stringify(res);
          localStorage.setItem('commentData', data);
          return res;
        }),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return of([]);
        })
      );
    }
  }
}
