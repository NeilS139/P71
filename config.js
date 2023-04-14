import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBnGrNUF-IlEKfUt8PFH09pKc_93Rjxwd0",
    authDomain: "pr71-903c0.firebaseapp.com",
    projectId: "pr71-903c0",
    storageBucket: "pr71-903c0.appspot.com",
    messagingSenderId: "761733294327",
    appId: "1:761733294327:web:d466d68ac0c8c9bedf4bf2"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
