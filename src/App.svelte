<script>
  import Chat from './components/Chat.svelte';
  import SignInSignUpModal from './components/SignInSignUpModal.svelte';
  import { user } from './stores/userStore.js';
  import { signOutUser } from '../firebase.js';

  let showModal = false;

  async function handleLogout() {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Logout failed', error);
    }
  }

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<main class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <div class="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
    <header class="bg-blue-500 text-white text-lg font-bold p-4 flex justify-between items-center">
      <span>Chat App</span>
      <div>
        {#if $user}
          <button 
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            on:click={handleLogout}>
            Logout
          </button>
        {:else}
          <button 
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            on:click={openModal}>
            Login / Sign Up
          </button>
        {/if}
      </div>
    </header>
    {#if showModal}
      <SignInSignUpModal {closeModal} />
    {/if}
    <Chat />
  </div>
</main>
