import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyB9W4xHvOfwJnwVZqTQ7souWIB0x9zWQOY",
    authDomain: "crwn-clothing-ab5e0.firebaseapp.com",
    projectId: "crwn-clothing-ab5e0",
    storageBucket: "crwn-clothing-ab5e0.appspot.com",
    messagingSenderId: "287761726327",
    appId: "1:287761726327:web:630386ebca1a4909b3ff72",
    measurementId: "G-66KGCH2BMR"
  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;