import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDGzX6jqTWrkEgf-QEU3l05Kilc8G7nmtI",
    authDomain: "comprapp-38073.firebaseapp.com",
    databaseURL: "https://comprapp-38073.firebaseio.com",
    projectId: "comprapp-38073",
    storageBucket: "comprapp-38073.appspot.com",
    messagingSenderId: "866716196971"
  };
  firebase.initializeApp(config);
export const Autentication= firebase.auth();
export const firebaseDatabase = firebase.database();
export default firebase;

 








