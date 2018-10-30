import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {NewsApiService} from '../../core/services/news-api.service';
import {NetworkService} from '../../core/services/network.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  listCounty = [];
  diableRadios = false;

  constructor(private newsApiService: NewsApiService, public network: NetworkService, private snackBar: MatSnackBar) {
    this.listCounty = newsApiService.getCountries();
  }

  ngOnInit() {
    if (!this.checkOnline()) {
      this.showSnackBar();
    }
  }

  changeCountry(countryObj) {
    if (!this.diableRadios) {
      this.showSnackBar();
    } else {
      this.newsApiService.changeLangCountry(countryObj);
    }
  }

  checkedRadio(cnt: any) {
    return cnt === this.newsApiService.getCountryId();
  }

  checkOnline() {
    this.diableRadios = this.network.isOnline();
    return this.network.isOnline();
  }

  showSnackBar() {
    this.snackBar.open(`The network is offline, you don't change country`, null, {
      duration: 2000,
    });
  }

}
