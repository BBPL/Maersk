import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import portReducer from "./portsReducer";

interface Profile {
    name: string
    email: string
  }

// without reducer types
export interface RootState {
    firebase: FirebaseReducer.Reducer<Profile>,
    firestore: any,
    ports: PortState
}

export const rootReducer = combineReducers<RootState>({
    firebase: firebaseReducer,
    firestore: firestoreReducer as Reducer<RootState>,
    ports: portReducer
})


