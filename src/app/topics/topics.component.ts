import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
})
export class TopicsComponent {
  topicsId: number[] = [];
  gridStyle = true;
  isCards = false;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getTopicsId();
  }

  getTopicsId() {
    this.api.getTopics().subscribe(
      (res) => {
        this.topicsId = res as number[];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  checkCard(index: number): boolean {
    this.isCards =
      index === 0 ? false : index % 4 === 0 ? !this.isCards : this.isCards;
    return this.isCards === true;
  }

  checkGrid(index: number): boolean {
    this.gridStyle =
      index === 0 ? false : index % 4 === 0 ? !this.gridStyle : this.gridStyle;
    return this.gridStyle === true;
  }
}
