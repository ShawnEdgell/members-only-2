import { writable } from 'svelte/store';
import { auth, db } from '../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const user = writable(null);

onAuthStateChanged(auth, async (u) => {
  if (u) {
    const userDocRef = doc(db, 'users', u.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      user.set({ ...u, username: userDoc.data().username });
    } else {
      user.set({ ...u, username: '' });
    }
  } else {
    user.set(null);
  }
});
