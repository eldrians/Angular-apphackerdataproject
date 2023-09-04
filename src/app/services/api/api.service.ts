import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { storiesUrl, baseUrl } from '../../app.constant';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  topicsData: any[] = [];

  constructor(private http: HttpClient) {}

  getTopics(): Observable<any> {
    return this.http.get(storiesUrl).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return of([]);
      })
    );
  }

  private getData(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/item/${id}.json`);
  }

  getTopicsData(ids: number[]): Observable<any> {
    const topics = ids.map((id) => this.getData(id));
    return forkJoin(topics).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return [];
        ``;
      })
    );
  }

  getCommentsData(ids: number[]): Observable<any[]> {
    const comments = ids.map((id) => this.getData(id));
    return forkJoin(comments).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return [];
      })
    );
  }
}
