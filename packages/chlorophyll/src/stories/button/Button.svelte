<script>
  import { createEventDispatcher } from 'svelte'

  export let type = ''
  export let variant = ''
  export let label = 'Button'

  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }

  let props = {}
  if (type && type !== 'none') {
    props.type = type
  }
  if (variant && variant !== 'none') {
    props.class = variant
  }
</script>

<button {...props} on:click={onClick}>
  {label}
</button>
