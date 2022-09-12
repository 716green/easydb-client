import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk5oO8VigBd5GpuBnbxuQckGz-a9WrCrQ",
  authDomain: "mvpdb-ea2d0.firebaseapp.com",
  projectId: "mvpdb-ea2d0",
  storageBucket: "mvpdb-ea2d0.appspot.com",
  messagingSenderId: "393465333094",
  appId: "1:393465333094:web:9c77f4f29be4daf012f4a7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const ghProvider = new GithubAuthProvider();
export const auth = getAuth(firebaseApp);
