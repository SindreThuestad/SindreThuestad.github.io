function setup() {
    var config = {
        apiKey: "AIzaSyDyhmY_QCkpcGPcni1vergvYirMSd9RiXI",
        authDomain: "civcountries-af92c.firebaseapp.com",
        databaseURL: "https://civcountries-af92c.firebaseio.com",
        projectId: "civcountries-af92c",
        storageBucket: "civcountries-af92c.appspot.com",
        messagingSenderId: "1020878288720"
      };
      firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr. ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost: ${info.epost}
             <li>Mobil: ${info.mobil} 
             <li>Art:${info.art}
             <li>Fødselsdato:${info.fdato}
             <li>Kjønn: ${info.vekt}
             <li>Eier: ${info.kundenr}

            
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}