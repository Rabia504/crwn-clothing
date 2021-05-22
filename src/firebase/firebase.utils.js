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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;
    //console.log(firestore.doc('users/1234ffghhh'));
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error created user ",error.message );
      }
    }
    return userRef;

  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;