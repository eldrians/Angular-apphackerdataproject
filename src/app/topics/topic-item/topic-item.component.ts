import { Component, Input } from '@angular/core';
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
  @Input() isCard!: boolean;
  @Input() topicData!: InputData | undefined;

  constructor(private global: DataService) {}

  isHidden() {
    return this.global.getIsHidden();
  }
}
