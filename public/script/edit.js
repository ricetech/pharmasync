function processForm() {
    let form = document.getElementById("edit-form");
    let din = document.getElementById("din").value;
    let db = firebase.firestore();
    db.collection("drugs").doc(din).set({
        variant: document.getElementById("variant").value,
        generic_name: document.getElementById("generic_name").value,
        trade_name: document.getElementById("trade_name").value,
        price: "$" + document.getElementById("price").value,
        type: document.getElementById("type").value,
        amount: document.getElementById("amount").value,
        q_ott: document.getElementById("q_ott").value,
        q_tor: document.getElementById("q_tor").value,
}).then(function() {
        window.location.href = 'pharm-dashboard.html';
});
}

function populateForm() {
    let din = document.getElementById("din").value;
    console.log(din);
    let db = firebase.firestore();
    let drug = db.collection("drugs").doc(din);
    drug.get().then(function(doc) {
        if (doc.exists) {
            let data = doc.data();
            document.getElementById('variant').value = data['variant'];
            document.getElementById('generic_name').value = data['generic_name'];
            document.getElementById('trade_name').value = data['trade_name'];
            document.getElementById('price').value = data['price'];
            document.getElementById('type').value = data['type'];
            document.getElementById('q_ott').value = data['q_ott'];
            document.getElementById('amount').value = data['amount'];
            document.getElementById('q_tor').value = data['q_tor'];
        } else {
            alert("Error: DIN not in the system. Try again.")
        }
    });
}