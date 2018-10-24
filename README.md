# PWA News

The web application "PWA News" is used to consult the top news for each country where each article refers to a
  specific newspaper.The application can be consulted from any device using the responsive technology, which is visible from mobile devices
  to desktop monitors.
The advantage of this application is developed with the "PWA" technology, synonymous with progressive web application, which can be 
installed on your device with a simple click without having to go to the store!!

The project was mainly developed with the Angular v6, Angular Material and RxJs freamework.

_**Test online**_ : <a href="pwa-news-67c22.firebaseapp.com">Link</a>

_**API reference of News**:_
- News API: https://newsapi.org

**Requirements for install the project**
- NodeJs & NPM installed or Yarn
- Firebase installed
- Last version of Chrome Browser
- run `npm install` or `yarn install`

For work with Service Worker, you must run in build because this isn't work without them.

_Build local with Service Worker_

`ng build --prod && lite-server --baseDir dist/my-pwa`

_Build Local without Service Worker_
`ng serve`
