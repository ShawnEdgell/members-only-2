<script>
  import { format } from 'date-fns';

  export let message;
  export let hideAuthor;
  export let timestamp;

  function formatTime(time) {
    if (!time) return '';
    try {
      const date = time.toDate ? time.toDate() : new Date(time);
      return format(date, 'h:mma').toLowerCase();
    } catch (e) {
      console.error("Invalid timestamp:", e);
      return '';
    }
  }
</script>

<div class="p-4 my-2 bg-gray-100 rounded shadow">
  {#if !hideAuthor}
    <div class="font-semibold">{message.author}</div>
  {/if}
  <p>{message.text}</p>
  <div class="text-right text-sm text-gray-600">{formatTime(message.timestamp)}</div>
</div>
