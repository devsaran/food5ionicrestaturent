// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA_JKAae64PLHgo-18UXBFSrnjTMvv4pR4",
    authDomain: "foodies5-bbfd6.firebaseapp.com",
    databaseURL: "https://foodies5-bbfd6.firebaseio.com",
    projectId: "foodies5-bbfd6",
    storageBucket: "foodies5-bbfd6.appspot.com",
    messagingSenderId: "947573900264",
    appId: "1:947573900264:web:733e2c90449cd9fc90da5d",
    measurementId: "G-4J46TXZT2B"
  },
  onesignal: {
    appId: 'e5025869-d1b5-4289-9f95-9d4482d55749',
    googleProjectNumber: '947573900264',
    restKey: 'NzViNjc4MmItOTljMS00OTI2LTg4NDAtOTNiYmM1ZjE2OGZl'
  },
  stripe: {
    sk: ''
  },
  general: {
    symbol: '₹',
    code: 'INR'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
