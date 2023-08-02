import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getStoryId() {
    let url =
      'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
    return this.http.get(url);
  }
}
