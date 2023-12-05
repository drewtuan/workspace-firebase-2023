// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var currentuser="";
var currentemail="";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentuser = user.displayName;
    currentemail = user.email;
    console.log(currentuser,currentemail);
  } else {
    // User is signed out
    // ...
    console.log("User is logged out");
    window.location.href= "Login.html";
  }
});

// sign out code
$("#signout").click(function() {
  // then() when you finish signing out, then
  firebase.auth().signOut().then(() => {
    console.log("Signed out");
  }).catch((error) => {
    console.log(error.message);
  });
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
