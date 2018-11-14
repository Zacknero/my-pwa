import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private api_key = environment.api_key;
  private baseUrl = environment.baseUrl;
  private _newsServiceCheck = new Subject();
  newsServiceCheck$ = this._newsServiceCheck.asObservable();

  private _sourcesServiceCheck = new Subject();
  sourcesServiceCheck$ = this._sourcesServiceCheck.asObservable();
  private country = 'it';
  private lang = 'it';

  constructor(private http: HttpClient) {
  }

  getSourcesByLangCountry() {
    this.http.get(`${this.baseUrl}/sources?language=${this.lang}&country=${this.country}&apiKey=${this.api_key}`)
      .subscribe(
        data => this._sourcesServiceCheck.next(data['sources'])
      );
  }

  get initArticles() {
    return this.http.get(`${this.baseUrl}/top-headlines?country=${this.country}&apiKey=${this.api_key}`)
      .pipe(
        map((response: any) => {
          return response.articles;
        })
      );
  }

  getTopArticles() {
    this.http.get(`${this.baseUrl}/top-headlines?country=${this.country}&apiKey=${this.api_key}`)
      .subscribe(
        data => {
          this._newsServiceCheck.next(data['articles']);
        }
      );
  }

  getArticlesByID(source: String) {
    this.http.get(`${this.baseUrl}/top-headlines?language=${this.lang}&sources=${source}&apiKey=${this.api_key}`)
      .subscribe(
        data => {
          this._newsServiceCheck.next(data['articles']);
        }
      );
  }

  getCountries() {
    return environment.countries;
  }

  changeLangCountry(langCountry: Object) {
    this.lang = langCountry['lang'];
    this.country = langCountry['country'];
    this.getSourcesByLangCountry();
  }

  getCountryId() {
    return this.country;
  }
}
