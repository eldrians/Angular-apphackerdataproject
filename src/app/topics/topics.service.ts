import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storiesUrl } from '../app.constant';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  // get stories id
  getTopics() {
    return this.http.get(storiesUrl);
  }
}
