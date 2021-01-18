import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcx6np24P1CKOLY7m__AZt_N73WLgtUGI",
    authDomain: "twitter-clone-d61a0.firebaseapp.com",
    projectId: "twitter-clone-d61a0",
    storageBucket: "twitter-clone-d61a0.appspot.com",
    messagingSenderId: "13372500099",
    appId: "1:13372500099:web:89b625a2d4a9b4abd913b6",
    measurementId: "G-8MBEKRXP38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth, storage };
export default db;