import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatBottomSheetModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ShareModule} from '@ngx-share/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppNavComponent} from './core/app-nav/app-nav.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './core/app-routing.module';
import {AboutComponent} from './modules/about/about.component';
import {HomeComponent} from './modules/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {SettingsComponent} from './modules/settings/settings.component';
import {LoaderComponent} from './shared/loader/loader.component';
import {ImagePreloadDirective} from './shared/directives/image-preload.directive';
import {SocialSharedComponent} from './shared/components/social-shared/social-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AboutComponent,
    HomeComponent,
    SettingsComponent,
    LoaderComponent,
    ImagePreloadDirective,
    SocialSharedComponent
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
    MatBottomSheetModule,
    FontAwesomeModule,
    ShareModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  entryComponents: [LoaderComponent, SocialSharedComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
