import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyA6xF9mCCjNkJVp0zFVhXr9j93vflXa7Yo",

  authDomain: "csci-225-assignment-8-project.firebaseapp.com",

  projectId: "csci-225-assignment-8-project",

  storageBucket: "csci-225-assignment-8-project.appspot.com",

  messagingSenderId: "557733923398",

  appId: "1:557733923398:web:67b961c036306a431ed847",

  measurementId: "G-QT2RSG5EMR"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form

  // You need to change this.
  var email = 'gumball@gmail.com';
  var password = 'trejs/;]nq2]reO';




  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 

//var provider = new firebase.auth.GoogleAuthProvider();

//firebase.auth().signInWithPopup(provider).then();


const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });