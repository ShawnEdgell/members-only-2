<script>
  import { onMount } from 'svelte';
  import { db } from '../../firebase.js';
  import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
  import Message from './Message.svelte';

  let messages = [];
  let newMessage = '';

  onMount(() => {
    const messagesRef = query(collection(db, 'messages'), orderBy('timestamp'));
    onSnapshot(messagesRef, snapshot => {
      messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  });

  async function sendMessage() {
    if (newMessage.trim() === '') return;
    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        author: "CurrentUser",
        timestamp: serverTimestamp()
      });
      newMessage = '';
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  }
</script>

<div class="flex flex-col" style="height: calc(100vh - 8rem);"> <!-- Header height + padding -->
  <div class="flex-1 overflow-y-auto p-4">
    {#each messages as message}
      <Message {message} />
    {/each}
  </div>
  <div class="p-4 border-t border-gray-200">
    <input
      class="w-full p-2 border rounded"
      type="text"
      bind:value={newMessage}
      placeholder="Type a message..."
    />
    <button 
      class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      on:click={sendMessage}>Send</button>
  </div>
</div>
