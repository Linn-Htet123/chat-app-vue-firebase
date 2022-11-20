import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBBXP2JepWFml5PBw4m8vV1n55TWeRhpdc",
    authDomain: "udemy-vue-firebase-sites-932b0.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-932b0",
    storageBucket: "udemy-vue-firebase-sites-932b0.appspot.com",
    messagingSenderId: "10760749041",
    appId: "1:10760749041:web:0bd8b695d12a80c4c18e50"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()

//init timestamp service
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

//init firebase authentication
const projectAuth = firebase.auth()

export {projectFirestore,timestamp,projectAuth}
