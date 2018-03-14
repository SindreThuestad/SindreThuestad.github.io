

function setup() {
    var config = {
        apiKey: "AIzaSyDUChLfZSVKNoENHM0OUrBODgzCaefP7KU",
        authDomain: "rapidtech-bfde6.firebaseapp.com",
        databaseURL: "https://rapidtech-bfde6.firebaseio.com",
        projectId: "rapidtech-bfde6",
        storageBucket: "rapidtech-bfde6.appspot.com",
        messagingSenderId: "624808561949"
      };
      firebase.initializeApp(config);

    let database = firebase.database();

    let inpLand = document.getElementById("produkter");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);


    function lagreLand(e) {
        let priser = btnLagreLand.dataset.priser;
        let produkter = inpLand.value;
        let produktid = inpRegion.value;
        let ref = database.ref("produkter/" + produkter);
        ref.set({ produktid ,priser});
        alert("Lagt til i handlekurven!");
    }


  
}