import {Component, OnInit} from '@angular/core';

import {environment} from '../../../environments/environment';
import {NetworkService} from '../../core/services/network.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  textContent = environment.aboutDescription;

  constructor(public network: NetworkService) {
  }

  ngOnInit() {
  }

  onNavigate(): void {
    window.open('https://github.com/Zacknero/my-pwa', '_blank');
  }
}
