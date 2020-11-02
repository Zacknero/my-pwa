import {Component, OnDestroy, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {LoaderComponent} from './shared/components/loader/loader.component';
import {IosInstallComponent} from './shared/components/ios-install/ios-install.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private dialogRef;
  private subscription: Subscription;

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar, private router: Router, public dialog: MatDialog) {

    this.subscription = this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.openDialog();
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
        this.closeDialog();
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

    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.snackBar.openFromComponent(IosInstallComponent, {
        duration: 8000,
        horizontalPosition: 'start',
        panelClass: ['mat-elevation-z3']
      });
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(LoaderComponent, {
      width: '40%',
      height: '24%'
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
