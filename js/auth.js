import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import { auth } from "./firebase-config.js";

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("error").innerText = error.message;
    });
};
