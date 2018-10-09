import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breakpoint: number;
  rowHeight = '2:2.5';
  mArticles: Array<any>;

  constructor(private newsApi: NewsApiService) {
    this.newsApi.newsServiceCheck$.subscribe(
      data => this.mArticles = data['articles']
    );
  }

  ngOnInit() {
    this.adjustRowsHeight();
    this.adjustBreakPoint();
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
  }

  onResize() {
    this.adjustRowsHeight();
    this.adjustBreakPoint();
  }

  adjustRowsHeight() {
    if (window.innerWidth <= 320) {
      this.rowHeight = '2:2.9';
    } else if (window.innerWidth <= 360 && window.innerWidth <= 375) {
      this.rowHeight = '2:2.6';
    } else if (window.innerWidth <= 375) {
      this.rowHeight = '2:2.5';
    } else if (window.innerWidth <= 414) {
      this.rowHeight = '2:2.3';
    } else if (window.innerWidth <= 1024) {
      this.rowHeight = '2:2.5';
    } else if (window.innerWidth <= 1366) {
      this.rowHeight = '2:2.8';
    }
  }

  adjustBreakPoint() {
    if (window.innerWidth <= 415) {
      this.breakpoint = 1;
    } else if (window.innerWidth >= 415 && window.innerWidth <= 1365) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

}
