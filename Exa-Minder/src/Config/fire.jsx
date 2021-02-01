import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAbT-bHSTJQghCYREq7zMYVUE8vl1-WNfA",
    authDomain: "exa-minder.firebaseapp.com",
    databaseURL: "https://exa-minder-default-rtdb.firebaseio.com",
    projectId: "exa-minder",
    storageBucket: "exa-minder.appspot.com",
    messagingSenderId: "329937566744",
    appId: "1:329937566744:web:b5c4c0fcbcdffb755fd76d",
    measurementId: "G-KNVKNKZCG2"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;