import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {NewsApiService} from './services/news-api.service';

@Injectable()
export class ResolverRouter implements Resolve<any> {

  constructor(private newsApi: NewsApiService) {
  }

  resolve() {
    return this.newsApi.initArticles;
  }
}
