  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD9avdsh8hYes7TfR6buXrx23e6JgKXJMA",
    authDomain: "firegram-8dec9.firebaseapp.com",
    projectId: "firegram-8dec9",
    storageBucket: "firegram-8dec9.appspot.com",
    messagingSenderId: "634905292658",
    appId: "1:634905292658:web:9dbc8200be03c6c206f7eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  // create a fn to call to get a firebase timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage,  projectFirestore, timestamp };
