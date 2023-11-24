import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration from your environment variables
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

// Google Auth Provider for Google sign-in
const googleAuthProvider = new GoogleAuthProvider();

// Function for signing in with Google
export function signInWithGoogle() {
  return signInWithPopup(auth, googleAuthProvider);
}

// Function for signing up with email/password
export function signUpWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Function for signing in with email/password
export function signInWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Function for logging out
export function signOutUser() {
  return auth.signOut();
}

// Function to save username in Firestore
export async function saveUsername(uid, username) {
  const userDocRef = doc(db, 'users', uid);
  return setDoc(userDocRef, { username });
}

export { db, auth };
