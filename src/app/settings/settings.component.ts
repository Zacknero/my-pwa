import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../news-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  listCounty = [];

  constructor(private newsApiService: NewsApiService) {
    this.listCounty = newsApiService.getCountries();
  }

  ngOnInit() {
  }

  changeCountry(countryObj) {
    console.log(countryObj);
    this.newsApiService.setLangCountry(countryObj);
  }

}
