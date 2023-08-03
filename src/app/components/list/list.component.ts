import { Component, Input } from '@angular/core';
import {
  faArrowRight,
  faCommentDots,
  faClock,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data/data.service';

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
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() topicData!: InputData | undefined;

  // icon
  iconArrowRight = faArrowRight;
  iconCommentDots = faCommentDots;
  iconClock = faClock;
  iconX = faX;

  constructor(private global: DataService) {}

  toggleCommentSection() {
    this.global.toggleCommentSection();
  }

  getCommentNumber() {
    return this.global.getCommentNumber();
  }
}
