import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBteGuVrfYjeojLn5aSxiocGF4KDZpjpEc",
    authDomain: "ecommerce-sincopete.firebaseapp.com",
    projectId: "ecommerce-sincopete",
    storageBucket: "ecommerce-sincopete.appspot.com",
    messagingSenderId: "737968134179",
    appId: "1:737968134179:web:bf126b486c11fd57d4b996"
}


const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);

