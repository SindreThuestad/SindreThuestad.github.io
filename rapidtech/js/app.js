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


    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const txtLogin = document.getElementById('txtLogin');
    const txtSignUp = document.getElementById('txtSignUp');
    const txtLogout = document.getElementById('txtLogout');


    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,
        pass);
        promise
        .catch(e => console.log(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,
        pass);
        promise
        .catch(e => console.log(e.message));
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();

    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });




};

