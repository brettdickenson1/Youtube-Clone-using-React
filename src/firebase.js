import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAwJ9ZkBNRrbc9Mx1o9C4INfohFB3M65VM',
  authDomain: 'clone-73793.firebaseapp.com',
  databaseURL: 'https://clone-73793.firebaseio.com',
  projectId: 'clone-73793',
  storageBucket: 'clone-73793.appspot.com',
  messagingSenderId: '362316013932',
  appId: '1:362316013932:web:0b882d591c9613899ed349',
  measurementId: 'G-4J7MBJS599',
});

const db = firebaseApp.firestore();

export { db };
