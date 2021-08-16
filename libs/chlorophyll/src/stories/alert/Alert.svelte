<script>
  /**
   * Alert Component
   * @component
   */

  /**
   * Alert type
   */
  export let type = 'warning'

  /**
   * Alert contents
   */
  export let content = ''

  /**
   * Alert heading
   */
  export let heading = ''

  /**
   * Alert link
   */
  export let link = ''

  /**
   * Alert button
   */
  export let button = ''

  /**
   * Alert primary button
   */
  export let primaryButton = ''

</script>

<div role='alert' class={type}>
  {#if heading}<h3>{heading}</h3>{/if}
  <p>{content} {#if link}<a href='#'>{link}</a>.{/if}</p>
  {#if button}<button>{button}</button>{/if}
  {#if primaryButton}<button class='primary'>{primaryButton}</button>{/if}
</div>
