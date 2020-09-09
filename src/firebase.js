import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDd3EfvIEk6m-LHYZqUrKDcr3e8w01wIPM",
    authDomain: "twitter-clone-53fa0.firebaseapp.com",
    databaseURL: "https://twitter-clone-53fa0.firebaseio.com",
    projectId: "twitter-clone-53fa0",
    storageBucket: "twitter-clone-53fa0.appspot.com",
    messagingSenderId: "68417042212",
    appId: "1:68417042212:web:a9b7f5df1977ca3c54a5b1",
    measurementId: "G-D1TSNKEKFX"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;