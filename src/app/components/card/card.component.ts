import { Component, Input } from '@angular/core';
import {
  faArrowRight,
  faCommentDots,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data/data.service';

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

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() topicData!: InputData | undefined;

  // icon
  iconClock = faClock;
  iconCommentDots = faCommentDots;
  iconArrowRight = faArrowRight;

  constructor(private global: DataService) {}

  toggleCommentSection() {
    this.global.toggleCommentSection();
    this.global.setTopicData(this.topicData);
  }
}
