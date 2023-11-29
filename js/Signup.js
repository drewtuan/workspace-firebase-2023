var firebaseConfig = {
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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  //var email = ;
  //var password = ;

  var username = $('input[name="fullname"]').val();
  var email = $('input[name="username"]').val();
  var password = $('input[name="password"]').val();
  var confirmpassword = $('input[name="cpassword"]').val();

  console.log(username,email,password,confirmpassword);

  // create a user with email address and password
  
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      // ...
      let user = result.user;
      user.updateProfile({
        displayName: username,
        displayEmail: email
      }).then(()=>{
        console.log(user.displayName,"You are signed up");
      //window.location.href = "Login.html";

      var date = "Wed, 21 NOV 2023 12:57";

      var userinformation = {
        // list what you want to put in
        "username": user.displayName,
        "email": email,
        "signupDate": date
      };

      var db = firebase.firestore();
      db.collection("Player Table").doc(user.displayName).set(userinformation).then(() => {
        console.log("information saved to firestore");
        window.location.href = "Login.html";
      }); 


      });
       // put the information after you callback (then())
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
