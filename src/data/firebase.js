import firebase from 'firebase/app'
import "firebase/firestore"

// const config = {
//     apiKey: process.env.REACT_APP_APIKEY,
//     databaseURL: process.env.REACT_APP_DB,
//     projectId: process.env.REACT_APP_PID,
// };
const config = {
    apiKey: "AIzaSyC9RSxohY-SNKwAvwPEj6HFbZWmEZRqqnM",
    // databaseURL: "https://maersk-bbpl.firebaseio.com/",
    databaseURL: "https://maersk.kisiel.dk/databases/maersk-bbpl/documents",
    projectId: "maersk-bbpl",
};
firebase.initializeApp(config);
const databaseRef = firebase.firestore()
export const userRef = databaseRef.collection("users")
export default firebase;