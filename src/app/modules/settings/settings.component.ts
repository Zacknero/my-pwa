import {Component} from '@angular/core';
import {NewsApiService} from '../../core/news-api.service';
import {NetworkService} from '../../core/network.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  listCounty = [];

  constructor(private newsApiService: NewsApiService, public network: NetworkService) {
    this.listCounty = newsApiService.getCountries();
  }

  changeCountry(countryObj) {
    this.newsApiService.setLangCountry(countryObj);
  }

}
