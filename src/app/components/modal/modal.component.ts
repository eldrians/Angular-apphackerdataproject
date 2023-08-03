import { Component, Input } from '@angular/core';
import { faCommentDots, faX } from '@fortawesome/free-solid-svg-icons';
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
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() topicData!: InputData | undefined;

  // icon
  iconX = faX;
  iconCommentDots = faCommentDots;

  constructor(private global: DataService) {}

  toggleCommentSection() {
    this.global.toggleCommentSection();
  }
  get isHidden() {
    return this.global.getIsHidden();
  }

  getCommentNumber() {
    return this.global.getCommentNumber();
  }
}