function setup() {
    // Initialize Firebase
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


    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
        

        }
    });



}

