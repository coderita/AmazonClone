import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBYwTZ43Q-dh5R1n5NnVyW8MtAEwDiGWXY",
  authDomain: "clone-93ad9.firebaseapp.com",
  databaseURL: "http://clone-93ad9.firebaseio.com",
  projectId: "clone-93ad9",
  storageBucket: "clone-93ad9.appspot.com",
  messagingSenderId: "200432614402",
  appId: "1:200432614402:web:a6670413b2672df28d3b1b",
  measurementId: "G-SLNGZP7HS0"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };