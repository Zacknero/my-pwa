import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // api_key = 'cf0f762318e846f5820d5331832bb87d';
  private api_key = environment.api_key;
  private _newsServiceCheck = new Subject();
  newsServiceCheck$ = this._newsServiceCheck.asObservable();

  private _sourcesServiceCheck = new Subject();
  sourcesServiceCheck$ = this._sourcesServiceCheck.asObservable();
  private country = 'ar';
  private lang = 'es';

  constructor(private http: HttpClient) {
  }

  getSourcesByLangCountry() {
    this.http.get(`https://newsapi.org/v2/sources?language=${this.lang}&country=${this.country}&apiKey=${this.api_key}`)
      .subscribe(
        data => this._sourcesServiceCheck.next(data['sources'])
      );
  }

  get initArticles() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${this.api_key}`)
      .pipe(
        map((response: any) => {
          return response.articles;
        })
      );
  }

  getTopArticles() {
    this.http.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${this.api_key}`)
      .subscribe(
        data => this._newsServiceCheck.next(data['articles'])
      );
  }

  getArticlesByID(source: String) {
    this.http.get(`https://newsapi.org/v2/top-headlines?language=${this.lang}&sources=${source}&apiKey=${this.api_key}`)
      .subscribe(
        data => this._newsServiceCheck.next(data['articles'])
      );
  }

  getCountries() {
    return environment.countries;
  }

  setLangCountry(langCountry: Object) {
    this.lang = langCountry['lang'];
    this.country = langCountry['country'];
    this.getSourcesByLangCountry();
  }
}
