<script>
  /**
   * A Button Component
   * @component
   */

  /**
   * Button type
   */
  export let type = 'primary'

  /**
   * Button contents
   */
  export let label = ''

</script>

<button type="button" class={type}>{label}</button>
