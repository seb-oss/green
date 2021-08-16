<script>
  /**
   * A Card Component
   * @component
   */

  /**
   * Card contents
   */
  export let headline = ''
  export let body = ''
  export let buttonText = ''

</script>

<section class="card">
  <h2>{headline}</h2>
  <p>{body}</p>
  <a class="button primary" href="#">{buttonText}</a>
</section>
