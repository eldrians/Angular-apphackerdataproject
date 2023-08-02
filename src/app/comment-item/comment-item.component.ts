import { Component, Input } from '@angular/core';
import { CommentItemService } from './comment-item.service';

interface InputData {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent {
  @Input() commentId!: number;
  commentData!: InputData | undefined;

  constructor(private commentItemService: CommentItemService) {}

  ngOnInit() {
    this.getComment();
  }

  getComment() {
    this.commentItemService.getTopicById(this.commentId).subscribe((res) => {
      this.commentData = res as InputData;
    });
  }
}
