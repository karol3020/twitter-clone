import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBsmVLcrw4aWG30hUFn04-R9N2HAr1-0Sk",
  authDomain: "twitter-clone-9c493.firebaseapp.com",
  projectId: "twitter-clone-9c493",
  storageBucket: "twitter-clone-9c493.appspot.com",
  messagingSenderId: "256971313555",
  appId: "1:256971313555:web:4e035b70cf25e4eae51866"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db