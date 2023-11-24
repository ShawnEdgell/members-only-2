import { writable } from 'svelte/store';
import { auth } from '../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const user = writable(null);

onAuthStateChanged(auth, (u) => {
  user.set(u);
});
