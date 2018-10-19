import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar, private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        //this.showLoadingIndicator = true;
        console.log('Rout start');
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
        ///this.showLoadingIndicator = false;
        console.log('Rout end');
      }

    });
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {
        const snackBarRef = this.snackBar.open('New version available. Load New Version?', 'Refresh');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
    }
  }

}
