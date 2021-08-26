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

  export const createUserProfileDocument =  async (userAuth, additinalData) => {
     // if the userAuth does not exist,    exit from the function 
    if(!userAuth) return;
    // if it does exist, query inside the firestore 
    // firestore library initially puts out  one of two different objects
    // its either a query reference or snapshot 
    // a query is requesting firestore a document or collection 

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot)
    // if the user does not exist in the database dd
    // snapShot only represent the data 
    // to create the data we need to use documentRef, not the napshot 
    if(!snapShot.exists){
        //before creating, we need to see what we need to store
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additinalData
            })

        }catch(error){
            console.log('error creating user', error.message)
        }
    }

return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;

