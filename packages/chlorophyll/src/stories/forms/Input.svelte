<script>

  /**
   * A Input Component
   * @component
   */

  /**
   * Input type
   */
  export let type = ''
  export let size = ''
  export let label = 'Input'

  let props = {}
  if (type && type !== 'none') {
    props.type = type
  }
  if (size && size !== 'none') {
    props.class = size
  }
</script>

<input {...props} type='text'>
