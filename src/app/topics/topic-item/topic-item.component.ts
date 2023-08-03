import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { DataService } from '../../services/data/data.service';

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

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
})
export class TopicItemComponent {
  @Input() topicId!: number;
  @Input() isCard!: boolean;
  topicData!: InputData | undefined;

  constructor(private api: ApiService, private global: DataService) {}

  ngOnInit() {
    this.getTopicData();
  }

  getTopicData() {
    this.api.getTopicItem(this.topicId).subscribe((res) => {
      this.topicData = res as InputData;
      this.setCommentNumber(res?.kids?.length || 0);
    });
  }

  isHidden() {
    return this.global.getIsHidden();
  }

  setCommentNumber(n: number) {
    this.global.setCommentNumber(n);
  }
}
