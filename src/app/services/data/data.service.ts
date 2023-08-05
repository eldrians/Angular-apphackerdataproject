import { Injectable } from '@angular/core';

export interface InputData {
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
  topicData!: InputData | undefined;

  toggleCommentSection() {
    this.isHidden = !this.isHidden;
  }

  getIsHidden() {
    return this.isHidden;
  }

  setTopicData(topicData: any) {
    this.topicData = topicData;
  }

  getTopicData() {
    return this.topicData;
  }
}
