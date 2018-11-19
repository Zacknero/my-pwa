import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {NewsApiService} from '../../core/services/news-api.service';
import {NetworkService} from '../../core/services/network.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  listCounty = [];
  disableRadios = false;

  constructor(private newsApiService: NewsApiService, public network: NetworkService, private snackBar: MatSnackBar,
              private router: Router) {
    this.listCounty = newsApiService.getCountries();
  }

  ngOnInit() {
    if (!this.checkOnline()) {
      this.showSnackBar();
    }
  }

  changeCountry(countryObj) {
    if (!this.disableRadios) {
      this.showSnackBar();
    } else {
      this.newsApiService.changeLangCountry(countryObj);
      this.router.navigate(['home']);
    }
  }

  checkedRadio(cnt: any) {
    return cnt === this.newsApiService.getCountryId();
  }

  checkOnline() {
    this.disableRadios = this.network.isOnline();
    return this.network.isOnline();
  }

  showSnackBar() {
    this.snackBar.open(`The network is offline, you don't change country`, null, {
      duration: 2000,
    });
  }

}
