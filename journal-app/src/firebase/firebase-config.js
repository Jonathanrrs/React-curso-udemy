import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA22DB4HWV5Z3bZxdGN5_DiPrDnYtG9Acs",
    authDomain: "react-app-cursos-72468.firebaseapp.com",
    projectId: "react-app-cursos-72468",
    storageBucket: "react-app-cursos-72468.appspot.com",
    messagingSenderId: "810608721114",
    appId: "1:810608721114:web:e5aafacac23c4917a3b9e3"
};

firebase.initializeApp(firebaseConfig);

/* es la base de datos */
const db = firebase.firestore();
/* para autenticacion con google */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}