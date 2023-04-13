import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPAB-2HiB2QCCYkK9d9QaUl5hOAavZMLM",
  authDomain: "you-tube-clo.firebaseapp.com",
  projectId: "you-tube-clo",
  storageBucket: "you-tube-clo.appspot.com",
  messagingSenderId: "222346764779",
  appId: "1:222346764779:web:0f8704b8d1ca172cc3f9ae",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
