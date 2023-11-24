<script>
  import Chat from './components/Chat.svelte';
  import { signOutUser } from '../firebase.js';
  import { user } from './stores/userStore.js'; // Assuming you have a user store

  async function handleLogout() {
    try {
      await signOutUser();
      // Additional logic post-logout if necessary
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
</script>

<main class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <div class="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
    <header class="bg-blue-500 text-white text-lg font-bold p-4 flex justify-between items-center">
      <span>Chat App</span>
      {#if $user}
        <button 
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          on:click={handleLogout}>
          Logout
        </button>
      {/if}
    </header>
    <Chat />
  </div>
</main>
