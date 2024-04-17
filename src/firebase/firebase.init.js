// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM08_v3CsS3If36uIDVbopV638OeTQpUo",
  authDomain: "assingment-9-b8175.firebaseapp.com",
  projectId: "assingment-9-b8175",
  storageBucket: "assingment-9-b8175.appspot.com",
  messagingSenderId: "154241087926",
  appId: "1:154241087926:web:b7103a3d0c545a56cb2917"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth