import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css'],
})
export class ListStoryComponent {
  constructor(private api: ApiService) {
    this.getData();
  }
  getData() {
    this.api.getStoryId().subscribe((data: any) => {
      console.log(data);
    });
  }
}
