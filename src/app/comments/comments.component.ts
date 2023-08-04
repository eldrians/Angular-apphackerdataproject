import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api/api.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  @Input() commentsId: number[] | undefined = [];
  commentsIdx: number[] = [];
  commentsData: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log('comments:', this.commentsId);
    this.getCommentsData();
  }

  getCommentsData() {
    this.api.getCommentsData(this.commentsIdx).subscribe(
      (data) => {
        this.commentsData = data;
        const dataComments = JSON.stringify(data);
        localStorage.setItem('dataComments', dataComments);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
