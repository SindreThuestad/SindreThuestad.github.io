function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCDkdDqjHOZY4lJPTI8b0lmhy3iwi--FXQ",
        authDomain: "webshop-5ac1b.firebaseapp.com",
        databaseURL: "https://webshop-5ac1b.firebaseio.com",
        projectId: "webshop-5ac1b",
        storageBucket: "webshop-5ac1b.appspot.com",
        messagingSenderId: "569467938325"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}