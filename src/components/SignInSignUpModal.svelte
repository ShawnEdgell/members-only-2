<script>
  import { signInWithEmail, saveUserData, signInWithGoogle, signUpWithEmail } from '../../firebase.js';
  import { fade, scale } from 'svelte/transition';
  import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

  const db = getFirestore();

  export let closeModal;

  let emailOrUsername = '';
  let password = '';
  let username = '';
  let isLogin = false;
  let errorMessage = '';

  function validateUsername(username) {
    return /^[a-zA-Z0-9_]{3,15}$/.test(username);
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSignUp() {
    errorMessage = '';
    if (!validateUsername(username)) {
      errorMessage = 'Invalid username. Use 3-15 characters and include only letters, numbers, and underscores.';
      return;
    }
    if (!validateEmail(emailOrUsername)) {
      errorMessage = 'Invalid email format.';
      return;
    }
    if (password.length < 6) {
      errorMessage = 'Password must be at least 6 characters long.';
      return;
    }

    try {
      const userCredential = await signUpWithEmail(emailOrUsername, password);
      const uid = userCredential.user.uid;
      await saveUserData(uid, username, emailOrUsername);
      closeModal();
    } catch (error) {
      errorMessage = 'Error signing up: ' + error.message;
    }
  }

  async function handleLogin() {
    errorMessage = '';
    try {
      await signInWithEmail(emailOrUsername, password);
      closeModal();
    } catch (error) {
      errorMessage = 'Error logging in: ' + error.message;
    }
  }

  async function handleGoogleSignIn() {
    try {
      const userCredential = await signInWithGoogle();
      const uid = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      const newUsername = userCredential.user.displayName || 'GoogleUser';
      await saveUserData(uid, newUsername, userEmail);
      closeModal();
    } catch (error) {
      errorMessage = 'Error signing in with Google: ' + error.message;
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

    {#if errorMessage}
      <p class="text-red-500 text-sm mb-2">{errorMessage}</p>
    {/if}

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
        bind:value={emailOrUsername}
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
        type="text"
        bind:value={emailOrUsername}
        placeholder="Email or Username"
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
      <span class="mx-4 text-gray-500">or</span>
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
