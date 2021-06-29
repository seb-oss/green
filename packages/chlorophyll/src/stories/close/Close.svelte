<script>
  import { createEventDispatcher } from 'svelte'

  /**
   * A Close Component
   * @component
   */

  /**
   * Button type
   */

  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }


</script>

<button class='close' on:click={onClick}>
  <span class='sr-only'>Close</span>
</button>
