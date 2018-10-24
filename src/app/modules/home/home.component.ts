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
    if (window.innerWidth <= 320) {
      this.rowHeight = '2:3';
    } else if (window.innerWidth <= 360 && window.innerWidth <= 375) {
      this.rowHeight = '2:2.4';
    } else if (window.innerWidth <= 375) {
      this.rowHeight = '2:2.3';
    } else if (window.innerWidth <= 414) {
      this.rowHeight = '2:2.1';
    } else if (window.innerWidth >= 415 && window.innerWidth <= 768) {
      this.rowHeight = '2:1.6';
    } else if (window.innerWidth <= 1024) {
      this.rowHeight = '2:2.3';
    } else if (window.innerWidth <= 1365) {
      this.rowHeight = '2:2.3';
    } else if (window.innerWidth >= 1366) {
      this.rowHeight = '2:2.5';
    }
  }

  adjustBreakPoint() {
    if (window.innerWidth <= 768) {
      this.breakpoint = 1;
    } else if (window.innerWidth >= 415 && window.innerWidth <= 1365) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
