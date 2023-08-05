import { Component, Input } from '@angular/core';

interface InputData {
  by?: string;
  id?: number;
  kids?: number[];
  parent?: number;
  text?: string;
  time?: number;
  type?: string;
  dead?: boolean;
}

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent {
  @Input() commentData!: InputData | undefined;
}
