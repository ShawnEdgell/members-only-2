import { initializeApp } from 'firebase/app';
import { 
  getFirestore, doc, setDoc, collection, query, where, getDocs 
} from 'firebase/firestore';
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword 
} from 'firebase/auth';

// Firebase configuration
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

// Function for logging out
export function signOutUser() {
  return auth.signOut();
}

// Function to find user email by username
export async function findEmailByUsername(username) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0].data();
    return userDoc.email;
  } else {
    return null;
  }
}

// Updated function for signing in with email/username and password
export async function signInWithEmail(emailOrUsername, password) {
  let email = emailOrUsername;
  if (!emailOrUsername.includes('@')) {
    const resolvedEmail = await findEmailByUsername(emailOrUsername);
    if (!resolvedEmail) {
      throw new Error('User not found');
    }
    email = resolvedEmail;
  }
  return signInWithEmailAndPassword(auth, email, password);
}

// Function to save user data (including email)
export async function saveUserData(uid, username, email = null) {
  const userDocRef = doc(db, 'users', uid);
  const userData = { username };
  if (email) {
    userData.email = email;
  }
  await setDoc(userDocRef, userData);
}

export { db, auth };
