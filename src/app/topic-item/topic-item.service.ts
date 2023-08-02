import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storyUrl } from '../app.constant';

@Injectable({
  providedIn: 'root',
})
export class TopicItemService {
  constructor(private http: HttpClient) {}

  getTopicById(topicId: number) {
    return this.http.get(`${storyUrl}/${topicId}.json`);
  }
}
