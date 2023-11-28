<script>
  import { signInWithEmail, saveUserData, signInWithGoogle, signUpWithEmail } from '../../firebase.js';
  import { fade, scale } from 'svelte/transition';
  import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
  import googleLogo from '../assets/google.svg';

  const db = getFirestore();

  export let closeModal;

  let email = '';
  let password = '';
  let confirmPassword = '';
  let username = '';
  let isLogin = false;
  let errorMessage = '';
  let formErrorMessage = '';

  function validateUsername(username) {
    return /^[a-zA-Z0-9_]{3,15}$/.test(username);
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function checkFormValidity() {
    formErrorMessage = '';
    if (isLogin) {
      if (!email || !password) {
        formErrorMessage = 'Please fill out all fields.';
        return false;
      }
      if (!validateEmail(email)) {
        formErrorMessage = 'Invalid email format.';
        return false;
      }
      return true;
    } else {
      if (!email || !password || !confirmPassword || !username) {
        formErrorMessage = 'Please fill out all fields.';
        return false;
      }
      if (!validateEmail(email)) {
        formErrorMessage = 'Invalid email format.';
        return false;
      }
      if (password.length < 6) {
        formErrorMessage = 'Password must be at least 6 characters long.';
        return false;
      }
      if (password !== confirmPassword) {
        formErrorMessage = 'Passwords do not match.';
        return false;
      }
      return true;
    }
  }

  async function handleSignUp() {
    errorMessage = '';
    if (!checkFormValidity()) {
      return;
    }
    try {
      const userCredential = await signUpWithEmail(email, password);
      const uid = userCredential.user.uid;
      await saveUserData(uid, username, email);
      // Automatically log in the user after sign up
      await signInWithEmail(email, password);
      closeModal();
    } catch (error) {
      errorMessage = 'Error signing up: ' + error.message;
    }
  }

  async function handleLogin() {
    errorMessage = '';
    if (!checkFormValidity()) {
      return;
    }
    try {
      await signInWithEmail(email, password);
      closeModal();
    } catch (error) {
      errorMessage = 'Error logging in: ' + error.message;
    }
  }

  async function handleGoogleSignIn(event) {
    // Prevent default form submission behavior
    event.preventDefault();

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

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    isLogin ? await handleLogin() : await handleSignUp();
  }
</script>

<div class="modal-background fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
     on:click={handleClickOutside}
     in:fade={{ duration: 300 }}
     out:fade={{ duration: 300 }}>

  <div class="bg-white rounded-lg p-6 max-w-sm mx-auto relative"
       role="dialog"
       aria-modal="true"
       aria-labelledby="signInSignUpDialogTitle"
       in:scale={{ duration: 300 }} 
       out:scale={{ duration: 300 }}
       on:click={event => event.stopPropagation()}>

    <h2 id="signInSignUpDialogTitle" class="text-lg text-gray-800 font-bold mb-4">
      {isLogin ? 'Log In' : 'Sign Up'}
    </h2>

    <button class="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
            on:click={closeModal} aria-label="Close">
      &#10005;
    </button>

    <form on:submit|preventDefault={handleSubmit}>
      {#if errorMessage || formErrorMessage}
        <p class="text-red-500 text-sm mb-2">{errorMessage || formErrorMessage}</p>
      {/if}

      {#if !isLogin}
        <input class="border p-2 rounded w-full mb-4 text-gray-800"
               type="email"
               bind:value={email}
               placeholder="Email" />

        <input class="border p-2 rounded w-full mb-4 text-gray-800"
               type="password"
               bind:value={password}
               placeholder="Create a password" />

        <input class="border p-2 rounded w-full mb-4 text-gray-800"
               type="password"
               bind:value={confirmPassword}
               placeholder="Retype password" />

        <input class="border p-2 rounded w-full mb-4 text-gray-800"
               type="text"
               bind:value={username}
               placeholder="Username" />

        <button class="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600"
                type="submit">
          Sign Up
        </button>
      {:else}
        <input class="border p-2 rounded w-full mb-4 text-gray-800"
               type="email"
               bind:value={email}
               placeholder="Email" />

        <input class="border p-2 rounded w-full mb-4 text-gray-800"
               type="password"
               bind:value={password}
               placeholder="Password" />

        <button class="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600"
                type="submit">
          Log In
        </button>
      {/if}

      <div class="flex items-center my-4">
        <hr class="flex-grow border-t border-gray-300">
        <span class="mx-4 text-gray-500">or</span>
        <hr class="flex-grow border-t border-gray-300">
      </div>

      {#if !isLogin}
        <button class="flex items-center justify-center bg-white text-gray-700 p-2 rounded w-full mb-4 border border-gray-300 hover:bg-gray-100"
                on:click={handleGoogleSignIn}>
                <img src={googleLogo} alt="Google logo" class="h-6 mr-2">
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
    </form>
  </div>
</div>
