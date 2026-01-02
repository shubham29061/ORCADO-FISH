// 🔥 Shared Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyBgHSbR6Q_za_uSjxpNwfPGh2xx4QSYpEY",
  authDomain: "orcadofish.firebaseapp.com",
  databaseURL: "https://orcadofish-default-rtdb.firebaseio.com",
  projectId: "orcadofish",
  storageBucket: "orcadofish.firebasestorage.app",
  messagingSenderId: "138005449504",
  appId: "1:138005449504:web:897c9d263541ec1a926545",
  measurementId: "G-3QR55DB06K"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
