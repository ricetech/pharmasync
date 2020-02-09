

function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
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
});