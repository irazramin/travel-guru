// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8lUu3a5atgwiRsPrvQLUoMqcOp2bSkI8',
  authDomain: 'travel-guru-5d78f.firebaseapp.com',
  projectId: 'travel-guru-5d78f',
  storageBucket: 'travel-guru-5d78f.appspot.com',
  messagingSenderId: '848532703072',
  appId: '1:848532703072:web:b121f21ea5b57f10b04005',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;