import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Use environment variables from your .env file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Google Auth Provider
const googleAuthProvider = new GoogleAuthProvider();

// Google sign-in function
export function signInWithGoogle() {
  return signInWithPopup(auth, googleAuthProvider);
}

// Email/Password sign-up function
export function signUpWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Email/Password sign-in function
export function signInWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout function
export function signOutUser() {
  return auth.signOut();
}

export { db, auth };
