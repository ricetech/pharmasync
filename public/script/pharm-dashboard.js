function renderTable() {
    let body = document.querySelector('tbody');
    while (body.firstChild) {
        // This will remove all children within tbody which in your case are <tr> elements
        body.removeChild(body.firstChild);
    }
    let db = firebase.firestore();
    let drugs = [];
    db.collection("drugs").get().then((querySnapshot) => {

        let table = document.getElementById("pharm-table");
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let dataWithID = Object.assign({id:doc.id}, data);
            drugs.push(dataWithID);
        });
        console.log(drugs);
        let drug;
        for (drug of drugs) {
            let cells = [];
            let row = table.insertRow();
            let i;
            for (i = 0; i < 9; i++) {
                cells[i] = row.insertCell();
            }
            let keys = Object.keys(drug);
            let key;
            let index;
            for (key of keys) {
                switch(key) {
                    case "id":
                        index = 0;
                        break;
                    case "trade_name":
                        index = 1;
                        break;
                    case "generic_name":
                        index = 2;
                        break;
                    case "type":
                        index = 3;
                        break;
                    case "variant":
                        index = 4;
                        break;
                    case "amount":
                        index = 5;
                        break;
                    case "q_ott":
                        index = 6;
                        break;
                    case "q_tor":
                        index = 7;
                        break;
                    case "price":
                        index = 8;
                        break;
                    default:
                        index = -1;
                }
                if (index !== -1) {
                    cells[index].innerHTML = drug[key];
                }
            }

        }
    });
}
$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            renderTable();
        } else {
            window.location.href = 'index.html';
        }
    });
});