import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from '../modules/about/about.component';
import {HomeComponent} from '../modules/home/home.component';
import {SettingsComponent} from '../modules/settings/settings.component';
import {ResolverRouter} from './resolver-router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {articles: ResolverRouter}
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverRouter]
})
export class AppRoutingModule {
}
