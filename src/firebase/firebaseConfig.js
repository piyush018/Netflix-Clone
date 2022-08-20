import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzh5xSJzQZSpJo8Wk-JmUyZ0ql03kDoT0",
  authDomain: "netflix-clone-5e6f5.firebaseapp.com",
  projectId: "netflix-clone-5e6f5",
  storageBucket: "netflix-clone-5e6f5.appspot.com",
  messagingSenderId: "656175565798",
  appId: "1:656175565798:web:88849df71d9a5680912427"
};
//it is used for initalizing app 
const app =initializeApp(firebaseConfig);
//firestore is the database 
const db =getFirestore(app)
//auth is for athentication 
const auth = getAuth(app)


export { auth }
export default db;

