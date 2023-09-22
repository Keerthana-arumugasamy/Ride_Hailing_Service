
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase,  ref , set , get , child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBzI238GP7Ik-AmLoHE3GAIt7gTkaIr8x8",
    authDomain: "uber-bdcfb.firebaseapp.com",
    databaseURL: "https://uber-bdcfb-default-rtdb.firebaseio.com",
    projectId: "uber-bdcfb",
    storageBucket: "uber-bdcfb.appspot.com",
    messagingSenderId: "1000032020464",
    appId: "1:1000032020464:web:9cd952b8080ab042e19f35",
    measurementId: "G-PFFFL6WYFX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  //get refto database service
