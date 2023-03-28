import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDaRMCvwXjy3TS7nH4_0y20kday5jgUvbI", //process.env.REACT_APP_API_KEY,
  authDomain:  "letmeask-a9822.firebaseapp.com", //process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://letmeask-a9822-default-rtdb.firebaseio.com", //process.env.REACT_APP_DATABASE_URL,
  projectId: "letmeask-a9822", //process.env.REACT_APP_PROJECT_ID,
  storageBucket:  "letmeask-a9822.appspot.com",  //process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "721165625164", //process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:721165625164:web:a7bbc9e36df067814011e9", //process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
export { firebase, auth, database }