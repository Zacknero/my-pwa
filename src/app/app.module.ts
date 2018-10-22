import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatSnackBarModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import {environment} from '../environments/environment';

import {AppNavComponent} from './core/app-nav/app-nav.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './core/app-routing.module';
import {AboutComponent} from './modules/about/about.component';
import {HomeComponent} from './modules/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {SettingsComponent} from './modules/settings/settings.component';
import {LoaderComponent} from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AboutComponent,
    HomeComponent,
    SettingsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  entryComponents: [LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
