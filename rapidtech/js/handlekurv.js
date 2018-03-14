function handlekurv() {

    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("produkter");

    function visKunder(snapshot) {
        let produktnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Produkt : ${produktnr}</h4>
            <h4>Pris : ${info.priser}</h4>
            <br>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}

