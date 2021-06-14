import firebase from "firebase";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyArnn2bCqYwF13gzMYddI_Gx4wp8rdUCuE",
    authDomain: "test-1-37237.firebaseapp.com",
    projectId: "test-1-37237",
    storageBucket: "test-1-37237.appspot.com",
    messagingSenderId: "211694068560",
    appId: "1:211694068560:web:1dba8e8aa4094edc914255",
    measurementId: "G-SSGZXR4X2N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;