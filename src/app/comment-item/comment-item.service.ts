import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storyUrl } from '../app.constant';

@Injectable({
  providedIn: 'root',
})
export class CommentItemService {
  constructor(private http: HttpClient) {}

  getTopicById(commentId: number) {
    return this.http.get(`${storyUrl}/${commentId}.json`);
  }
}
