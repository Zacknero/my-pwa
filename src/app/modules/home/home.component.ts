import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {NewsApiService} from '../../core/services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  breakpoint: number;
  rowHeight = '2:2.5';
  articles$: Array<any> = [];
  subscription: Subscription;
  private widthScreen = window.innerWidth;

  constructor(private newsApi: NewsApiService, private route: ActivatedRoute) {
    this.subscription = this.newsApi.newsServiceCheck$.subscribe(
      (data: any) => {
        this.articles$ = [];
        this.articles$ = data;
      }
    );
  }

  ngOnInit() {
    this.adjustRowsHeight();
    this.adjustBreakPoint();
    this.articles$ = this.route.snapshot.data.articles;
  }

  onNavigate(url: any): void {
    window.open(url, '_blank');
  }

  onResize() {
    this.adjustRowsHeight();
    this.adjustBreakPoint();
  }

  adjustRowsHeight() {
    if (this.widthScreen <= 320) {
      this.rowHeight = '2:2.6';
    } else if (this.widthScreen <= 360 && this.widthScreen <= 375) {
      this.rowHeight = '2:2.3';
    } else if (this.widthScreen <= 375) {
      this.rowHeight = '2:2.2';
    } else if (this.widthScreen <= 414) {
      this.rowHeight = '2:2';
    } else if (this.widthScreen >= 415 && this.widthScreen <= 768) {
      this.rowHeight = '2:1.5';
    } else if (this.widthScreen <= 1024) {
      this.rowHeight = '2:2.4';
    } else if (this.widthScreen >= 1025 && this.widthScreen <= 1280) {
      this.rowHeight = '2:1.7';
    } else if (this.widthScreen >= 1281 && this.widthScreen <= 1366) {
      this.rowHeight = '2:2.5';
    } else if (this.widthScreen >= 1367 && this.widthScreen <= 1440) {
      this.rowHeight = '2:2.4';
    } else if (this.widthScreen >= 1441 && this.widthScreen <= 1536) {
      this.rowHeight = '2:2.1';
    } else if (this.widthScreen === 1600) {
      this.rowHeight = '2:2';
    } else if (this.widthScreen === 1680) {
      this.rowHeight = '2:1.9';
    } else if (this.widthScreen === 1920) {
      this.rowHeight = '2:1.6';
    }
  }

  adjustBreakPoint() {
    if (this.widthScreen <= 768) {
      this.breakpoint = 1;
    } else if (this.widthScreen >= 415 && this.widthScreen <= 1365) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
