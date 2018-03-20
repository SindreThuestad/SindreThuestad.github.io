
function buy() {


    let database = firebase.database();

    let inpLand = document.getElementById("bestilling");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);


    function lagreLand(e) {
        let frakt = btnLagreLand.dataset.frakt;
        let bestilling = inpLand.value;
        let sum = inpRegion.value;
        let ref = database.ref("bestilling/" + bestilling);
        ref.set({sum, frakt});
        alert("Bestillingen din er registrert!");
    }


  
}