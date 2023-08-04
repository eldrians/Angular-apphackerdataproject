import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
})
export class TopicsComponent {
  topicsId: number[] = [];
  topicsData: any[] = [];
  gridStyle = true;
  isCards = false;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getTopicsId();
    this.getTopicsData();
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

  getTopicsData() {
    this.api.getTopicsData(this.topicsId).subscribe(
      (data) => {
        this.topicsData = data;
        const dataStories = JSON.stringify(data);
        localStorage.setItem('dataStories', dataStories);
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
