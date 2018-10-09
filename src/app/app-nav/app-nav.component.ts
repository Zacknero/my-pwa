import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {NewsApiService} from '../news-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  disableAutoClose = false;
  mSources: Array<any>;

  constructor(private breakpointObserver: BreakpointObserver, private newsApi: NewsApiService) {
    this.isHandset$.subscribe(val => this.disableAutoClose = val);
  }

  ngOnInit() {
    this.newsApi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(id) {
    this.newsApi.getArticlesByID(id);
  }

}
