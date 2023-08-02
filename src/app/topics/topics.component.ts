import { Component, Input } from '@angular/core';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent {
  topicsId: number[] = [];
  constructor(private topicsService: TopicsService) {}
  gridStyle = true;

  ngOnInit() {
    this.getTopicsId();
  }

  getTopicsId() {
    this.topicsService.getTopics().subscribe((res) => {
      this.topicsId = res as number[];
    });
  }

  isFourthItem(index: number): boolean {
    if (index == 0) {
      this.gridStyle = false;
    } else if ((index) % 4 === 0) {
      this.gridStyle = !this.gridStyle;
    }
    return this.gridStyle === true;
  }
}
