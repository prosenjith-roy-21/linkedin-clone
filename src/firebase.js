import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCF3dovHK_RegAg4F0RkN9kc_7dEeOSdZA",
  authDomain: "linkedin-clone-yt-98524.firebaseapp.com",
  projectId: "linkedin-clone-yt-98524",
  storageBucket: "linkedin-clone-yt-98524.appspot.com",
  messagingSenderId: "706899412908",
  appId: "1:706899412908:web:3677bccc786c8466a45c09"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }