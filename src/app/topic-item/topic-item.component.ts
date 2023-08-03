import { Component, Input } from '@angular/core';
import { TopicItemService } from './topic-item.service';
import {
  faArrowRight,
  faCommentDots,
  faClock,
  faX,
} from '@fortawesome/free-solid-svg-icons';

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
  noOfComment = 0;
  isHidden = true;
  iconArrowRight = faArrowRight;
  iconCommentDots = faCommentDots;
  iconClock = faClock;
  iconX = faX;

  constructor(private topicItemService: TopicItemService) {}

  ngOnInit() {
    this.getTopic();
  }

  getTopic() {
    this.topicItemService.getTopicById(this.topicId).subscribe((res) => {
      this.topicData = res as InputData;
      this.noOfComment = this.topicData?.kids?.length || 0;
    });
  }

  toggleCommentSection() {
    this.isHidden = !this.isHidden;
    if (!this.isHidden) {
      console.log('kebuka');
    }
  }
}
