import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'cf0f762318e846f5820d5331832bb87d';
  _newsServiceCheck = new Subject();
  newsServiceCheck$ = this._newsServiceCheck.asObservable();

  private cacheResource$: Observable<Array<any>>;
  private cacheArticles$: Observable<Array<any>>;

  constructor(private http: HttpClient) {
  }

  get initSources() {
    if (!this.cacheResource$) {
      this.cacheResource$ = this.requestSources().pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.cacheResource$;
  }

  private requestSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=it&country=it&apiKey=' + this.api_key)
      .pipe(
        map((response: any) => {
          return response.sources;
        })
      );
  }

  get initArticles() {
    if (!this.cacheArticles$) {
      this.cacheArticles$ = this.requestArticles().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cacheArticles$;
  }

  private requestArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=it&apiKey=' + this.api_key)
      .pipe(
        map((response: any) => {
          return response.articles;
        })
      );
  }

  getArticlesByID(source: String) {
    this.http.get('https://newsapi.org/v2/top-headlines?language=it&sources=' + source + '&apiKey=' + this.api_key)
      .subscribe(
        data => this._newsServiceCheck.next(data['articles'])
      );
  }
}
