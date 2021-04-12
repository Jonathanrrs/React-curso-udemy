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

const firebaseConfigTesting = {
    apiKey: "AIzaSyA5bBx4AirIyDeXjSvblm9FLJooSzggQUs",
    authDomain: "react-test-app-curso.firebaseapp.com",
    projectId: "react-test-app-curso",
    storageBucket: "react-test-app-curso.appspot.com",
    messagingSenderId: "805099183686",
    appId: "1:805099183686:web:6c224813eb7893721db447"
  };

if(process.env.NODE_ENV === 'test') {
    // testing
    firebase.initializeApp(firebaseConfigTesting);

} else{
    // dev/prod
    firebase.initializeApp(firebaseConfig);
}


/* es la base de datos */
const db = firebase.firestore();
/* para autenticacion con google */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}