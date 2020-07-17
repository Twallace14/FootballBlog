import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyDwc_FenZjFjGT635qjHmTyljd-ldEKBDs",
    authDomain: "therabonareport.firebaseapp.com",
    databaseURL: "https://therabonareport.firebaseio.com",
    projectId: "therabonareport",
    storageBucket: "therabonareport.appspot.com",
    messagingSenderId: "477691029459",
    appId: "1:477691029459:web:1b5eeb60268dc9f3c1b126",
    measurementId: "G-T9Z78HZ1V6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    

    const snapShot = await userRef.get();
 
    if (!snapShot.exists) {
        const {email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ email, createdAt, ...additionalData })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

  export const addNewReport = async (additionalData) => {
    const reportRef = firestore.collection("articles").doc()
  
    
    
    
    await reportRef.set({
      ...additionalData 
    });
  
    return reportRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export default firebase;