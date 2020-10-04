
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA3EBnvFC6FSp8i6oXScy7b1bMzsgiBcgU",
  authDomain: "herohacks.firebaseapp.com",
  databaseURL: "https://herohacks.firebaseio.com",
  projectId: "herohacks",
  storageBucket: "herohacks.appspot.com",
  messagingSenderId: "295760364534",
  appId: "1:295760364534:web:a22d3b71818440e2cc3dd7",
  measurementId: "G-R8BYHC15JP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
  const auth = firebase.auth();




  function signUp() {
    console.log("hi");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message))
    //alert("Signed In");
  }

  function signIn() {
    console.log("hi");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    // const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message))
    // take to next page
  }

  function signOut() {
    // const auth = firebase.auth();
    auth.signOut();
    alert("Signed Out Succesfully");
  }

  auth.onAuthStateChanged(function(user) {

    if (user) {
      // user is signed in take to next page automatically
    }
  });

