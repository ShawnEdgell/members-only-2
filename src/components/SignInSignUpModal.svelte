<script>
  import { signInWithEmail, signInWithGoogle, signUpWithEmail } from '../../firebase.js';
  import { fade, scale } from 'svelte/transition';

  export let closeModal;

  let email = '';
  let password = '';
  let username = '';
  let isLogin = false;

  function validateUsername(username) {
    // Basic validation: Length check and allowed characters (alphanumeric and underscores)
    return /^[a-zA-Z0-9_]{3,15}$/.test(username);
  }

  async function handleSignUp() {
    if (!validateUsername(username)) {
      alert('Invalid username. Use 3-15 characters and include only letters, numbers, and underscores.');
      return;
    }
    
    // Proceed with sign-up process
    try {
      await signUpWithEmail(email, password);
      // Here, you should also handle saving the username to the user's profile
      closeModal();
    } catch (error) {
      console.error('Error signing up: ', error);
    }
  }

  async function handleLogin() {
    try {
      await signInWithEmail(email, password);
      closeModal();
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  }

  async function handleGoogleSignIn() {
    try {
      await signInWithGoogle();
      closeModal();
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  }

  function switchToLogin() {
    isLogin = true;
  }

  function switchToSignUp() {
    isLogin = false;
  }

  function handleClickOutside(event) {
    if (event.target.classList.contains('modal-background')) {
      closeModal();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

<div 
  class="modal-background fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
  on:click={handleClickOutside}
  in:fade={{ duration: 300 }}
  out:fade={{ duration: 300 }}>

  <div 
    class="bg-white rounded-lg p-6 max-w-sm mx-auto relative"
    role="dialog"
    aria-modal="true"
    aria-labelledby="signInSignUpDialogTitle"
    in:scale={{ duration: 300 }}
    out:scale={{ duration: 300 }}
    on:click={event => event.stopPropagation()}>

    <h2 id="signInSignUpDialogTitle" class="text-lg font-bold mb-4">
      {isLogin ? 'Log In' : 'Sign Up'}
    </h2>

    <button 
      class="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
      on:click={closeModal} aria-label="Close">
      &#10005;
    </button>

    {#if !isLogin}
      <input
        class="border p-2 rounded w-full mb-4"
        type="text"
        bind:value={username}
        placeholder="Username"
      />
      <input
        class="border p-2 rounded w-full mb-4"
        type="email"
        bind:value={email}
        placeholder="Email"
      />
      <input
        class="border p-2 rounded w-full mb-4"
        type="password"
        bind:value={password}
        placeholder="Create a password"
      />
      <button 
        class="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600"
        on:click={handleSignUp}>
        Continue
      </button>
    {/if}

    {#if isLogin}
      <input
        class="border p-2 rounded w-full mb-4"
        type="email"
        bind:value={email}
        placeholder="Email"
      />
      <input
        class="border p-2 rounded w-full mb-4"
        type="password"
        bind:value={password}
        placeholder="Password"
      />
      <button 
        class="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600"
        on:click={handleLogin}>
        Continue
      </button>
    {/if}

    <div class="flex items-center my-4">
      <hr class="flex-grow border-t border-gray-300">
      <span class="mx-4 text-gray-500">{isLogin ? 'or' : ''}</span>
      <hr class="flex-grow border-t border-gray-300">
    </div>

    {#if !isLogin}
      <button 
        class="flex items-center justify-center bg-white text-gray-700 p-2 rounded w-full mb-4 border border-gray-300 hover:bg-gray-100"
        on:click={handleGoogleSignIn}>
        <img src="google.svg" alt="Google logo" class="h-6 mr-2">
        Sign In with Google
      </button>
      <p class="text-center text-sm text-gray-600">
        Already a member? 
        <a href="javascript:void(0)" class="text-blue-500 underline" on:click={switchToLogin}>Log in</a>
      </p>
    {/if}

    {#if isLogin}
      <p class="text-center text-sm text-gray-600">
        Need an account? 
        <a href="javascript:void(0)" class="text-blue-500 underline" on:click={switchToSignUp}>Sign Up</a>
      </p>
    {/if}
  </div>
</div>


