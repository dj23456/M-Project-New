
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCybmXAUWgGDCMNQWvcRdaMgE31I1GkF8M",
//   authDomain: "log-in-authentication-ac1b6.firebaseapp.com",
//   projectId: "log-in-authentication-ac1b6",
//   storageBucket: "log-in-authentication-ac1b6.appspot.com",
//   messagingSenderId: "735126972855",
//   appId: "1:735126972855:web:b26c16bd1de14bf361e032",
//   measurementId: "G-3GKSESXV7S"
// };


  const firebaseConfig = {
    apiKey: "AIzaSyA3Iczj_Pxx0eFp3ViQasE2giVsv0-ZZt0",
    authDomain: "recurring-webapplication.firebaseapp.com",
    databaseURL: "https://recurring-webapplication-default-rtdb.firebaseio.com",
    projectId: "recurring-webapplication",
    storageBucket: "recurring-webapplication.appspot.com",
    messagingSenderId: "466673906693",
    appId: "1:466673906693:web:eca74771b75b92d78b986c",
    measurementId: "G-MNSQTVYP21"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// const submitButton = document.getElementById("signin");
// const signupButton = document.getElementById("sign-up");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const main = document.getElementById("main");
// const createacct = document.getElementById("create-acct")

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("signup");

// const returnBtn = document.getElementById("return-btn");

var  signupEmail, signupPassword, confirmSignUpPassword;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  signupEmail = signupEmailIn.value;

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if(signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.")
      isVerified = false;
  }
  
  if(signupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
    alert("Please fill out all required fields.");
    isVerified = false;
  }
  
  if(isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      window.alert("Success! Account created.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Error occurred. Try again.");
    });
  }
});

// submitButton.addEventListener("click", function() {
//   email = emailInput.value;
//   console.log(email);
//   password = passwordInput.value;
//   console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log("Success! Welcome back!");
//       window.alert("Success! Welcome back!");
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error occurred. Try again.");
//       window.alert("Error occurred. Try again.");
//     });
// });

// signupButton.addEventListener("click", function() {
//     // main.style.display = "none";
//     // createacct.style.display = "block";
// });

// returnBtn.addEventListener("click", function() {
//     main.style.display = "block";
//     createacct.style.display = "none";
// });
