// import firebase utility library
import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATkc6q0CYgH8nusij5XGu9AeVu7edXU1w",
    authDomain: "clothingshop-12f1f.firebaseapp.com",
    projectId: "clothingshop-12f1f",
    storageBucket: "clothingshop-12f1f.appspot.com",
    messagingSenderId: "773641597350",
    appId: "1:773641597350:web:d9b3414e20de8fa2831f67",
    measurementId: "G-BX6QR429SR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;

