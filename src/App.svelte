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

<main class="flex flex-col h-screen bg-gray-900 text-white">
  <header class="bg-gray-900 border-b border-gray-800 text-lg font-bold p-4 flex justify-between items-center">
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
          class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          on:click={openModal}>
          Login / Sign Up
        </button>
      {/if}
    </div>
  </header>
  {#if showModal}
    <SignInSignUpModal {closeModal} />
  {/if}
  <div class="flex-grow overflow-hidden">
    <Chat />
  </div>
</main>