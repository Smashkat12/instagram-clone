import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxtQjmyN0EEXMG67DcImzYxUZ-IG2bFWg",
  authDomain: "instagram-clone-37f17.firebaseapp.com",
  databaseURL: "https://instagram-clone-37f17.firebaseio.com",
  projectId: "instagram-clone-37f17",
  storageBucket: "instagram-clone-37f17.appspot.com",
  messagingSenderId: "716388062406",
  appId: "1:716388062406:web:5981c9e659c00c379b73c7",
  measurementId: "G-3CEGCH9RPY",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage};