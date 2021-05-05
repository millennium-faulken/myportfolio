import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBY6IN-WcSui-zdP2l1SQVxUeBZ8koDbNE",
  authDomain: "myportfolio-aea81.firebaseapp.com",
  projectId: "myportfolio-aea81",
  storageBucket: "myportfolio-aea81.appspot.com",
  messagingSenderId: "794057941965",
  appId: "1:794057941965:web:4e7b3f26f7444c02495a84",
  measurementId: "G-8BJJ0HTHZ1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;