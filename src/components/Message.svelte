<script>
  export let message;
  export let hideAuthor;
</script>

<div class="p-4 my-2 bg-gray-100 rounded shadow">
  {#if !hideAuthor}
    <div class="font-semibold">{message.author}</div>
  {/if}
  <p>{message.text}</p>
</div>
