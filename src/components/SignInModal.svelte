<script>
    import { signInWithEmail, signInWithGoogle } from '../../firebase.js';
  
    let email = '';
    let password = '';
  
    async function handleEmailSignIn() {
      try {
        const userCredential = await signInWithEmail(email, password);
        // Handle signed in user
      } catch (error) {
        console.error('Error signing in with email: ', error);
      }
    }
  
    async function handleGoogleSignIn() {
      try {
        const userCredential = await signInWithGoogle();
        // Handle signed in user
      } catch (error) {
        console.error('Error signing in with Google: ', error);
      }
    }
  </script>
  
  <div>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button on:click={handleEmailSignIn}>Sign In</button>
    <button on:click={handleGoogleSignIn}>Sign In with Google</button>
  </div>
  