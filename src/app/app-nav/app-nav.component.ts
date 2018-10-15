import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {NewsApiService} from '../news-api.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  sources$: Observable<Array<any>>;
  @ViewChild('drawer') drawer: MatSidenav;
  disableAutoClose = false;

  constructor(private breakpointObserver: BreakpointObserver, private newsApi: NewsApiService) {
    this.isHandset$.subscribe(val => this.disableAutoClose = val);
  }

  ngOnInit() {
    this.sources$ = this.newsApi.initSources;
  }

  getTopics() {
    this.disableAutoClose ? null : this.drawer.toggle();
    this.sources$ = this.newsApi.initSources;
  }

  searchArticles(id) {
    this.newsApi.getArticlesByID(id);
  }

}
