function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD97fWPhvAbSzqgXEW54C-D7i2EAAmKK1o",
    authDomain: "webchat-b18d5.firebaseapp.com",
    databaseURL: "https://webchat-b18d5.firebaseio.com",
    projectId: "webchat-b18d5",
    storageBucket: "webchat-b18d5.appspot.com",
    messagingSenderId: "463590136523"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("innlegg");

    function visInnlegg(snapshot) {
        let innleggnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
        <div>
        <h4>Innlegg nr: ${innleggnr}</h4>
        <ul>
         <li>Melding: ${info.melding}
        </ul>
      </div>
    `;
    }
    ref.on("child_added", visInnlegg);

}