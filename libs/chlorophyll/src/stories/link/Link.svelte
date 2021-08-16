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

  let props = {}
  if (type && type !== 'none') props.class = type
</script>

<a href="#" {...props}>{label}</a>
