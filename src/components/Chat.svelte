<script>
    import Message from './Message.svelte';

    // Temporary array to simulate chat messages
    let messages = [
      { id: 1, text: "Hello, welcome to the chat!", author: "User1" },
      { id: 2, text: "Hi there!", author: "User2" }
    ];
  
    let newMessage = "";
  
    // Function to handle sending a message
    function sendMessage() {
      if (newMessage.trim() === "") return;
      const message = {
        id: messages.length + 1,
        text: newMessage,
        author: "CurrentUser" // Replace with dynamic user info
      };
      messages = [...messages, message];
      newMessage = ""; // Reset input field
    }
  </script>
  
  <div class="flex flex-col h-screen">
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
        on:keydown={(e) => e.key === 'Enter' && sendMessage()}
      />
    </div>
  </div>
  
  <style>
    /* Additional styles if needed */
  </style>
  