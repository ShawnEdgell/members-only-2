<script>
    import { signUpWithEmail } from '../../firebase.js';
    import { fade } from 'svelte/transition';
  
    export let closeSignUpModal;
  
    let email = '';
    let password = '';
  
    async function handleSignUp() {
      try {
        await signUpWithEmail(email, password);
        closeSignUpModal();
      } catch (error) {
        console.error('Error signing up: ', error);
      }
    }
  
    function handleClickOutside(event) {
      if (event.target.classList.contains('modal-background')) {
        closeSignUpModal();
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
          class="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          on:click={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
  