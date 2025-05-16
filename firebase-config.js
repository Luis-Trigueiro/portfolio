const firebaseConfig = {
    apiKey: "AIzaSyCGq4Co9-3NbJdBW04mpGBOeBV1dHJe5aM",
    authDomain: "portfolio-88492.firebaseapp.com",
    projectId: "portfolio-88492",
    storageBucket: "portfolio-88492.firebasestorage.app",
    messagingSenderId: "615421797380",
    appId: "1:615421797380:web:1b19537450f1c6adc18151",
    measurementId: "G-65WMYW3WC6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();