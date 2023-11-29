/* Change the configuration */
const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form

  /* save the data to database */

  /* clear the entry */
  $('form')[0].reset();
});




/* read the data from the database */

/*
firebase
  .firestore()
  .collection('hoteldata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
*/
