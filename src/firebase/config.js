import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXDFS8sPWM8GuzS6x1fN8M3EvSW2F2pGs",
  authDomain: "budget-setup.firebaseapp.com",
  projectId: "budget-setup",
  storageBucket: "budget-setup.appspot.com",
  messagingSenderId: "142544258073",
  appId: "1:142544258073:web:350ccdae06c3a850a45688"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp=firebase.firestore.Timestamp

export { projectFirestore, projectAuth,timestamp }