<script>
  import { format, isToday } from 'date-fns';

  export let message;
  export let hideAuthor;

  function formatTimestamp(time) {
    if (!time) return '';
    try {
      const date = time.toDate ? time.toDate() : new Date(time);
      const formattedDate = isToday(date) ? 'Today' : format(date, 'MM/dd/yyyy');
      return `${formattedDate} at ${format(date, 'h:mma').toLowerCase()}`;
    } catch (e) {
      console.error("Invalid timestamp:", e);
      return '';
    }
  }
</script>

<div class="p-4 my-2 bg-gray-800 rounded shadow">
  {#if !hideAuthor}
    <div class="font-semibold">
      {message.author}
      <span class="text-gray-500 text-sm normal-case mx-1">
        {formatTimestamp(message.timestamp)}
      </span>
    </div>
  {/if}
  <p>{message.text}</p>
</div>
