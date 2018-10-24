import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSidenav, MatSnackBar} from '@angular/material';

import {NewsApiService} from '../services/news-api.service';
import {NetworkService} from '../services/network.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  sources$: Observable<Array<any>>;
  @ViewChild('drawer') drawer: MatSidenav;
  disableAutoClose = false;
  subscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private newsApi: NewsApiService, public network: NetworkService,
              private snackBar: MatSnackBar) {
    this.subscription = this.isHandset$.subscribe(val => this.disableAutoClose = val);
    this.subscription = this.newsApi.sourcesServiceCheck$.subscribe(
      (data: any) => {
        this.sources$ = data;
      }
    );
  }

  ngOnInit() {
    this.newsApi.getSourcesByLangCountry();
  }

  getTopics() {
    this.newsApi.getTopArticles();
    this.closeMenu();
  }

  searchArticles(id) {
    if (this.network.isOnline()) {
      this.newsApi.getArticlesByID(id);
    } else {
      this.snackBar.open(`The network is offline!`, null, {
        duration: 2000,
      });
    }
    this.closeMenu();
  }

  closeMenu() {
    if (this.drawer.mode === 'over') {
      this.drawer.toggle();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
