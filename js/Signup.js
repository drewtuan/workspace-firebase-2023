var firebaseConfig = {

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
      });
      console.log(user.displayName,"You are signed up");
      //window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
