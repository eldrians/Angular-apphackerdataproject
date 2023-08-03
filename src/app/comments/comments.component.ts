import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  @Input() commentsId?: number[] = [];
  constructor() {
    console.log('commentid :', this.commentsId);
  }
}
