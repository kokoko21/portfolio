import firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "https://portfolio-2f270.firebaseapp.com",
  // databaseURL: "xxxxxx.firebaseio.com",
  projectId: "portfolio-2f270",
  storageBucket: "gs://portfolio-2f270.appspot.com",
  messagingSenderId: "215386263010"
};
firebase.initializeApp(config);
export const functions = firebase.functions();