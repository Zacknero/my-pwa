# PWA News

The web application "PWA News" is used to consult the top news for each country where each article refers to a
  specific newspaper.The application can be consulted from any device using the responsive technology, which is visible from mobile devices
  to desktop monitors.
The advantage of this application is developed with the "PWA" technology, synonymous with progressive web application, which can be 
installed on your device with a simple click without having to go to the store!!

The project was mainly developed with Angular v7 framework, Angular Material UI component library, RxJs library and Firebase for hosting.

_**Try online**_ : <a href="https://pwa-news-67c22.firebaseapp.com">Link</a>

_**API reference of News**:_
- News API: https://newsapi.org

**Requirements for install the project**
- NodeJs & NPM or Yarn installed
- Firebase installed
- Last version of Chrome Browser
- run `npm install` or `yarn install`

_Optional_: lighthouse installed for test PWA quality: https://developers.google.com/web/tools/lighthouse/
Alternative: 
1) use Google Chrome browser console, click tab 'Audits' and Run audits button
2) Install the Lighthouse extension for browser (only Chrome - 24 October 2018)

For work with Service Worker, you must run in build because this isn't work without them.

_Build local with Service Worker_ =>`ng build --prod && lite-server --baseDir dist/my-pwa`

_Build Local without Service Worker_ => `ng serve`

###### **UPDATE 2/11/2020**

The plan of news api is changed into developer and business. So from now don't work into production mode (hosted on firebase) but you can see running local with commands.
