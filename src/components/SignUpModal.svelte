<script>
    import { signUpWithEmail } from '../../firebase.js';
  
    let email = '';
    let password = '';
  
    async function handleSignUp() {
      try {
        const userCredential = await signUpWithEmail(email, password);
        // Handle new user
      } catch (error) {
        console.error('Error signing up: ', error);
      }
    }
  </script>
  
  <div>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button on:click={handleSignUp}>Sign Up</button>
  </div>
  