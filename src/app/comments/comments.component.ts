import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  template: `
    <div class="p-2 rounded-md shadow-md flex flex-col gap-2">
      <app-comment-item
        *ngFor="let id of commentsId"
        [commentId]="id"
      ></app-comment-item>
    </div>
  `,
})
export class CommentsComponent {
  @Input() commentsId?: number[] = [];
}
