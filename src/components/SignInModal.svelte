<script>
    import { signInWithEmail, signInWithGoogle } from '../../firebase.js';
    import { fade } from 'svelte/transition';
  
    export let closeSignInModal;
  
    let email = '';
    let password = '';
  
    async function handleEmailSignIn() {
      try {
        await signInWithEmail(email, password);
        closeSignInModal();
      } catch (error) {
        console.error('Error signing in with email: ', error);
      }
    }
  
    async function handleGoogleSignIn() {
      try {
        await signInWithGoogle();
        closeSignInModal();
      } catch (error) {
        console.error('Error signing in with Google: ', error);
      }
    }
  
    function handleClickOutside(event) {
      if (event.target.classList.contains('modal-background')) {
        closeSignInModal();
      }
    }
  </script>
  
  <div class="modal-background fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
     on:click={handleClickOutside}
     in:fade={{ duration: 300 }}
     out:fade={{ duration: 300 }}>
  <div class="bg-white rounded-lg p-6 max-w-sm mx-auto" on:click|stopPropagation>
      <div class="flex flex-col space-y-4">
        <input
          class="border p-2 rounded"
          type="email"
          bind:value={email}
          placeholder="Email"
        />
        <input
          class="border p-2 rounded"
          type="password"
          bind:value={password}
          placeholder="Password"
        />
        <button 
          class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          on:click={handleEmailSignIn}>
          Sign In
        </button>
        <button 
          class="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          on:click={handleGoogleSignIn}>
          Sign In with Google
        </button>
      </div>
    </div>
  </div>
  