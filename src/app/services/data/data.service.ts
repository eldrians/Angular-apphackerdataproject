import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isHidden = true;
  commentNumber!: number;

  toggleCommentSection() {
    this.isHidden = !this.isHidden;
    console.log('isHidden :', this.isHidden);
  }

  getIsHidden() {
    return this.isHidden;
  }

  setCommentNumber(n: number) {
    this.commentNumber = n;
  }

  getCommentNumber() {
    return this.commentNumber;
  }
}
