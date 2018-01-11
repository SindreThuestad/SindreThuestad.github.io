function setup() {
    var config = {
        apiKey: "AIzaSyBlkpTpwxUqNmu2hmaQ-XX4Yn6nCSRxzv4",
        authDomain: "risk-c19a0.firebaseapp.com",
        databaseURL: "https://risk-c19a0.firebaseio.com",
        projectId: "risk-c19a0",
        storageBucket: "risk-c19a0.appspot.com",
        messagingSenderId: "268154203384"
      };
      firebase.initializeApp(config);

      let database = firebase.database();

      let land = database.ref("land");
      land.on("child_added", visLand);

      let kort = database.ref("kort");
      kort.on("child_added", visKort);

      let spiller = database.ref("spiller");
      spiller.on("child_added", visSpiller);
}

function visLand(snapshot) {
    let land = snapshot.key;
    let divTarget = document.getElementById("land");
    divTarget.innerHTML += `<div class="box">${land}</div>`
}

function visKort(snapshot) {
    let kort = snapshot.key;
    let divTarget = document.getElementById("kort");
    divTarget.innerHTML += `<div>${kort}</div>`
}

function visSpiller(snapshot) {
    let spiller = snapshot.val();
    let divTarget = document.getElementById("spiller");
    divTarget.innerHTML += 
    `<div>
      <br>Navn ${spiller.navn}
      <br>Farge ${spiller.farge}
      <br>Alder ${spiller.alder}
      
    </div>`
}