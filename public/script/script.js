

function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
    // window.location.href = 'index.html';
}

$(document).ready(function () {
    var db = firebase.firestore();
    console.log(db);

    var drugs = [];
    db.collection("drugs").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            console.log(data);
            var update = Object.assign({id:doc.id}, data);
            drugs.push(update);
            console.log(update)
        });
        console.log(drugs);

    });

    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
// Firebase test script
//     document.addEventListener('DOMContentLoaded', function () {
//         //
//         // // The Firebase SDK is initialized and available here!
//         //
//         // firebase.auth().onAuthStateChanged(user => { });
//         // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//         // firebase.messaging().requestPermission().then(() => { });
//         // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//         //
//         //
//         console.log(firebase)
//         try {
//             let app = firebase.app();
//             let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//             document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
//         } catch (e) {
//             console.error(e);
//             document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
//         }
//     });
});