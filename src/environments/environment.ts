// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_key: 'cf0f762318e846f5820d5331832bb87d',
  countries: [
    {
      lang: 'it',
      country: 'it',
      name: 'Italy',
      src: '003-italy'
    },
    {
      lang: 'en',
      country: 'gb',
      name: 'England',
      src: '005-uk'
    },
    {
      lang: 'de',
      country: 'de',
      name: 'Germany',
      src: '002-germany'
    },
    {
      lang: 'fr',
      country: 'fr',
      name: 'France',
      src: '001-france'
    },
    {
      lang: 'es',
      country: 'ar',
      name: 'Argentina',
      src: '006-argentina'
    },
    {
      lang: 'nl',
      country: 'nl',
      name: 'Netherlands',
      src: '007-netherlands'
    },
    {
      lang: 'pt',
      country: 'br',
      name: 'Brazil',
      src: '008-brazil'
    },
    {
      lang: 'ru',
      country: 'ru',
      name: 'Russia',
      src: '004-russia'
    }
  ]
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
