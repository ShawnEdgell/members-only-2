<script>
  import { onMount, tick } from 'svelte';
  import { auth } from '../../firebase.js';
  import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, getDoc } from 'firebase/firestore';
  import { db } from '../../firebase.js';
  import Message from './Message.svelte';

  let messages = [];
  let newMessage = '';
  let messageContainer;
  let user = null;

  auth.onAuthStateChanged(async (u) => {
    user = u;
    if (user) {
      await fetchMessages();
    }
  });

  function fetchMessages() {
    const messagesRef = query(collection(db, 'messages'), orderBy('timestamp'));
    onSnapshot(messagesRef, snapshot => {
      messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      scrollToBottom();
    });
  }

  onMount(() => {
    fetchMessages();
  });

  async function sendMessage() {
  if (!user || newMessage.trim() === '') return;
  
  let authorName = '';
  
  // Fetch the username from Firestore
  const userDocRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    authorName = userDoc.data().username;
  } else {
    // Fallback to email if username is not found
    authorName = user.email;
  }

  try {
    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      author: authorName, // Use the fetched username
      timestamp: serverTimestamp()
    });
    newMessage = '';
    scrollToBottom();
  } catch (error) {
    console.error("Error sending message: ", error);
  }
}

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  }

  async function scrollToBottom() {
  await tick();
  if (messageContainer) {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

</script>

<div class="flex flex-col" style="height: calc(100vh - 8rem);">
  <div class="flex-1 overflow-y-auto p-4" bind:this={messageContainer}>
    {#each messages as message}
      <Message {message} hideAuthor={!user} />
    {/each}
  </div>
  {#if user}
    <div class="flex p-4 border-t border-gray-200">
      <input
        class="flex-grow p-2 border rounded"
        type="text"
        bind:value={newMessage}
        placeholder="Type a message..."
        on:keydown={handleKeydown}
      />
      <button 
        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        on:click={sendMessage}>
        Send
      </button>
    </div>
  {/if}
</div>
