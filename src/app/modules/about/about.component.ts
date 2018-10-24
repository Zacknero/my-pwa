import {Component, OnInit} from '@angular/core';

import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  textContent = environment.aboutDescription;

  constructor() {
  }

  ngOnInit() {
  }

  onNavigate(): void {
    window.open('https://github.com/Zacknero/my-pwa', '_blank');
  }
}
