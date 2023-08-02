import { Component, Input } from '@angular/core';
import { showText } from '../app.constant';
import { TopicItemService } from './topic-item.service';

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
  styleUrls: ['./topic-item.component.css'],
})
export class TopicItemComponent {
  @Input() topicId!: number;
  topicData!: InputData | undefined;
  noOfComment = 0;

  constructor(private topicItemService: TopicItemService) {}

  ngOnInit() {
    this.getTopic();
  }

  getTopic() {
    this.topicItemService.getTopicById(this.topicId).subscribe((res) => {
      this.topicData = res as InputData;
      this.noOfComment = this.topicData?.kids?.length || 0;
      console.log(this.topicData);
    });
  }
}
