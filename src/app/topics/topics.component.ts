import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
})
export class TopicsComponent {
  topicsId: number[] = [];
  topicsData: any[] = [];
  gridStyle = true;
  isCards = false;
  constructor(private api: ApiService, private global: DataService) {}

  ngOnInit() {
    this.getTopicsIdFull();
  }

  getTopicsIdFull() {
    this.api.getTopics().subscribe(
      (res: any) => {
        this.topicsId = res as number[];
        this.api.getTopicsData(this.topicsId).subscribe(
          (data) => {
            this.topicsData = data;
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  isHidden() {
    return this.global.getIsHidden();
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
