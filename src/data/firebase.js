import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth'
// import 'firebase/database'

export var config = {
    apiKey: "AIzaSyC9RSxohY-SNKwAvwPEj6HFbZWmEZRqqnM",
    authDomain: "maersk-bbpl.firebaseapp.com",
    databaseURL: "https://maersk-bbpl.firebaseio.com",
    projectId: "maersk-bbpl",
    storageBucket: "maersk-bbpl.appspot.com",
    messagingSenderId: "801797662883",
    appId: "1:801797662883:web:8b3953ae0d02421553b716"
  };
firebase.initializeApp(config);
export const databaseRef = firebase.firestore()

export const auth = firebase.auth()
export const userRef = databaseRef.collection("users")
export const portsRef = databaseRef.collection("ports")


export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then(function(result){
    // var token = result.credential.accessToken
    var user = result.user
    console.log(user.email)
    return user
  }).catch(error => {
    console.log("An error occurred, while logging in")
  })
}

export const signOutWithGoogle= () =>{
  auth.signOut().then(() => console.log("logged out"))
}




export default firebase;