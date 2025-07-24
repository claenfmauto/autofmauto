import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvgNUwN7FMf_3AUIg9WEqc6UqNoFgL42Y",
  authDomain: "autofm-3f196.firebaseapp.com",
  projectId: "autofm-3f196",
  storageBucket: "autofm-3f196.firebasestorage.app",
  messagingSenderId: "449651499016",
  appId: "1:449651499016:web:8503a7a982b33ab9bdb1bd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").textContent = "تم التسجيل بنجاح!";
      console.log("User registered:", userCredential.user);
    })
    .catch((error) => {
      document.getElementById("message").textContent = "خطأ: " + error.message;
      console.error("Error:", error);
    });
});