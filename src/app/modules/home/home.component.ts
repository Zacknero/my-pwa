import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {NewsApiService} from '../../core/services/news-api.service';
import {NetworkService} from '../../core/services/network.service';

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
  imageUrlDefault = '../../../assets/images/Blank_Newspaper.png';
  imageLoader = '../../../assets/images/imgLoader.svg';

  constructor(private newsApi: NewsApiService, private route: ActivatedRoute, public network: NetworkService) {
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
      this.rowHeight = '2:2.6';
    } else if (window.innerWidth <= 360 && window.innerWidth <= 375) {
      this.rowHeight = '2:2.3';
    } else if (window.innerWidth <= 375) {
      this.rowHeight = '2:2.2';
    } else if (window.innerWidth <= 414) {
      this.rowHeight = '2:2';
    } else if (window.innerWidth >= 415 && window.innerWidth <= 768) {
      this.rowHeight = '2:1.5';
    } else if (window.innerWidth <= 1024) {
      this.rowHeight = '2:2.4';
    } else if (window.innerWidth >= 1025 && window.innerWidth <= 1280) {
      this.rowHeight = '2:1.7';
    } else if (window.innerWidth >= 1281 && window.innerWidth <= 1366) {
      this.rowHeight = '2:2.5';
    } else if (window.innerWidth >= 1367 && window.innerWidth <= 1440) {
      this.rowHeight = '2:2.4';
    } else if (window.innerWidth >= 1441 && window.innerWidth <= 1536) {
      this.rowHeight = '2:2.1';
    } else if (window.innerWidth === 1600) {
      this.rowHeight = '2:2';
    } else if (window.innerWidth === 1680) {
      this.rowHeight = '2:1.9';
    } else if (window.innerWidth === 1920) {
      this.rowHeight = '2:1.6';
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
