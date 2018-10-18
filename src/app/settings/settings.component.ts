import {Component} from '@angular/core';
import {NewsApiService} from '../news-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  listCounty = [];

  constructor(private newsApiService: NewsApiService) {
    this.listCounty = newsApiService.getCountries();
  }

  changeCountry(countryObj) {
    this.newsApiService.setLangCountry(countryObj);
  }

}
