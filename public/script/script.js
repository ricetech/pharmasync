const firebase = require("firebase");
require("firebase/firestore");


firebase.initializeApp({
    apiKey: 'AIzaSyClgFhxIGb2CoY6GsujeNw91yLowX0yl14',
    authDomain: 'pharmasync-uoh3.firebaseapp.com',
    projectId: 'pharmasync-uoh3'
});

var db = firebase.firestore();


function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
    window.location.href = 'index.html';
}

// Firebase test script
document.addEventListener('DOMContentLoaded', function() {
    //
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    //

    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});