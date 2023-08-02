import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storyData } from './shared/listStoryModel';

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
  getStoryData() {
    let url =
      'https://hacker-news.firebaseio.com/v0/item/36956867.json?print=pretty';
    return this.http.get(url);
  }
}
