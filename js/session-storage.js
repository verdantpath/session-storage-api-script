// An if statement checks if the browser supports the storage API
if (window.sessionstorage) {

  // SET UP VARIABLES TO CAPTURE FORM INPUTS
  var txtUsername = document.getElementById('username');
  var txtAnswer = document.getElementById('answer');

  // CHECK TO SEE IF VALUES ARE IN SESSION STORAGE AND PUTS THEM IN VARIABLES
  txtUsername.value = sessionStorage.getItem('username');
  txtAnswer.value = sessionStorage.getItem('answer');

  // WHEN A NEW VALUE IS ENTERED INTO THE FORM FIELD IT IS SAVED IN LOCAL STORAGE
  txtUsername.addEventListener('input', function() {
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function() {
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}


// THIS SCRIPT CAN BE USED WITH THE FOLLOWING BASIC HTML
// <html>
//   <head>
//     <title>Local Storage API Script</title>
//     <link rel="stylesheet" href="css/c09.css" />
//   </head>
//   <body>
//     <header><h1>THE MAKER BUS</h1></header>
//     <h2>What would you like to make?</h2>
//     <div class="third"><img src="img/toys1.jpg" alt="Circuit boards" /></div>
//     <div class="two-thirds">
//       <!-- There is no apply.php file with the download (the action of the form)
//            It is just an example of where the user may be taken
//            Go back to the page after submitting the form and you should still see your data in the form -->
//       <form id="application" action="apply.php">
//         <label for="username">Name</label><input type="text" id="username" name="username" /><br>
//         <label for="answer">Answer</label><textarea id="answer" name="answer"></textarea>
//           <input type="submit" value="Save" />
//       </form>
//     </div>
//     <script src="js/modernizr.2.7.1.js"></script>
//     <script src="js/session-storage.js"></script>
//   </body>
// </html>
