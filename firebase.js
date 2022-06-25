import { initializeApp } from "@firebase/app";
import { getStorage } from '@firebase/storage';


const firebaseConfig = {
  apiKey : "AIzaSyBcqTPv1woelu6Bjk5jQ2iIwIOvpmE-0aA",
  authDomain : "com.namal.OMS",
  projectId: "oms-fyp-a8be4",
  storageBucket: "oms-fyp-a8be4.appspot.com",
  messagingSenderId: "336511317970",
  appId: "1:336511317970:android:036ec26aa17c9a713c3a0b"
}

//initializing firebase app
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};