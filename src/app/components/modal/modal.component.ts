import { Component } from '@angular/core';
import { faCommentDots, faX } from '@fortawesome/free-solid-svg-icons';
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
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  topicData!: InputData | undefined;

  // icon
  iconX = faX;
  iconCommentDots = faCommentDots;

  constructor(private global: DataService) {}

  ngOnInit() {
    this.topicData = this.getTopicData();
  }
  toggleCommentSection() {
    this.global.toggleCommentSection();
  }
  isHidden() {
    return this.global.getIsHidden();
  }
  getTopicData() {
    return this.global.getTopicData();
  }
}
