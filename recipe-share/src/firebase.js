import Firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDoowk1P_ZdTr3dxF6t9uSr2VESjYHiPmo",
    authDomain: "recipe-share-805ee.firebaseapp.com",
    databaseURL: "https://recipe-share-805ee.firebaseio.com",
    projectId: "recipe-share-805ee",
    storageBucket: "recipe-share-805ee.appspot.com",
    messagingSenderId: "827537230509",
    appId: "1:827537230509:web:6a3e15288873a56b775424",
    measurementId: "G-ZNH2C9HQNR"
  };

let app = Firebase.initializeApp(config)
export const db = app.firestore();

// Firebase.initializeApp(firebaseConfig);
// let database = Firebase.database();
// let recipesRef = database.ref("Recipes");
// export default recipesRef;
