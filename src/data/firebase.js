import firebase from 'firebase/app'
import "firebase/firestore"

var config = {
    apiKey: "AIzaSyC9RSxohY-SNKwAvwPEj6HFbZWmEZRqqnM",
    authDomain: "maersk-bbpl.firebaseapp.com",
    databaseURL: "https://maersk-bbpl.firebaseio.com",
    projectId: "maersk-bbpl",
    storageBucket: "maersk-bbpl.appspot.com",
    messagingSenderId: "801797662883",
    appId: "1:801797662883:web:8b3953ae0d02421553b716"
  };
firebase.initializeApp(config);
const databaseRef = firebase.firestore()

export const portsRef = databaseRef.collection("ports")

export const userRef = databaseRef.collection("users")
export default firebase;