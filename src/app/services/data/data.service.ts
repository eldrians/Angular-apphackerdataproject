import { Injectable } from '@angular/core';

interface InputData {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  isHidden = true;
  commentNumber!: number;
  topicData!: InputData | undefined;

  toggleCommentSection() {
    this.isHidden = !this.isHidden;
  }

  getIsHidden() {
    return this.isHidden;
  }

  setCommentNumber(n: number) {
    this.commentNumber = n;
  }

  getCommentNumber() {
    return this.commentNumber;
  }

  setTopicData(topicData: any) {
    this.topicData = topicData;
  }

  getTopicData() {
    return this.topicData;
  }
}
