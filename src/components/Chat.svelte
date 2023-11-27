<script>
  import { onMount, tick } from 'svelte';
  import { auth, db } from '../../firebase.js';
  import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, getDoc } from 'firebase/firestore';
  import Message from './Message.svelte';
  import { format, isSameDay, isValid } from 'date-fns';

  let messages = [];
  let newMessage = '';
  let messageContainer;
  let user = null;
  let username = '';

  auth.onAuthStateChanged(async (u) => {
    user = u;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists() && userDoc.data().username) {
        username = userDoc.data().username;
      } else {
        username = ''; // Leave username empty if not found
      }
      fetchMessages();
    } else {
      username = ''; // Reset username when logged out
    }
  });

  function fetchMessages() {
    const messagesRef = query(collection(db, 'messages'), orderBy('timestamp'));
    onSnapshot(messagesRef, snapshot => {
      messages = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          text: data.text,
          author: data.author,
          timestamp: data.timestamp ? data.timestamp.toDate() : null 
        };
      });
      scrollToBottom();
    });
  }

  onMount(fetchMessages);

  async function sendMessage() {
    if (!user || newMessage.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        author: username || 'Anonymous', // Fallback to 'Anonymous' if username is empty
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

  function formatDate(date) {
    if (!date || !isValid(date)) return '';
    return format(date, 'MMMM d');
  }

  function formatTime(date) {
    if (!date || !isValid(date)) return '';
    return format(date, 'h:mma').toLowerCase();
  }

  function isNewDay(message, index) {
    if (index === 0 || !message.timestamp) return true;
    const currentMessageDate = message.timestamp;
    const previousMessageDate = messages[index - 1].timestamp;
    return !isSameDay(currentMessageDate, previousMessageDate);
  }
</script>

<div class="flex flex-col" style="height: calc(100vh - 8rem);">
  <div class="flex-1 overflow-y-auto p-4" bind:this={messageContainer}>
    {#each messages as message, index}
      {#if isNewDay(message, index)}
        <div class="text-center text-gray-600 my-2">
          {formatDate(message.timestamp)}
        </div>
      {/if}
      <Message {message} hideAuthor={!user} timestamp={formatTime(message.timestamp)} />
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
