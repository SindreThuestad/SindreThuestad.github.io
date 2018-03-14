
function buy() {


    let database = firebase.database();

    let inpLand = document.getElementById("bestilling");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);


    function lagreLand(e) {
        let priser = btnLagreLand.dataset.priser;
        let bestilling = inpLand.value;
        let produktid = inpRegion.value;
        let ref = database.ref("bestilling/" + bestilling);
        ref.set({priser});
        alert("Bestillingen din er registrert!");
    }


  
}