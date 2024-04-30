import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBkYAt3OxS8bMfh83wlfRH1qZVjzE7BBSA",
    authDomain: "upthings-3e5da.firebaseapp.com",
    projectId: "upthings-3e5da",
    storageBucket: "upthings-3e5da.appspot.com",
    messagingSenderId: "469275287492",
    appId: "1:469275287492:web:19f8e2f3df7f9199710e91"
  };
  
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage };