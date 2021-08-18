importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-7TRUBbqOwSOI-662cmIxrATU3tzotnw",
    authDomain: "pwa-expense-tracker-2004.firebaseapp.com",
    projectId: "pwa-expense-tracker-2004",
    storageBucket: "pwa-expense-tracker-2004.appspot.com",
    messagingSenderId: "477275581541",
    appId: "1:477275581541:web:3b856fe19bac3dddddaa8c",
    measurementId: "G-B97VXFMBDE"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.messaging()