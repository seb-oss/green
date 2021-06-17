<script>
  /**
   * A Link Component
   * @component
   */

  /**
   * Link type
   */
  export let type = ''

  /**
   * Link contents
   */
  export let label = 'Link'

</script>

<a href="#" class={type}>{label}</a>
