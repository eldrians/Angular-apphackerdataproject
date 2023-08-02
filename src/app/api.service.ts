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
  getStoryData(idStory: number) {
    let url = `https://hacker-news.firebaseio.com/v0/item/${idStory}.json?print=pretty `;
    return this.http.get(url);
  }
}
