<script>
  /**
   * A Card Component
   * @component
   */

  /**
   * Card contents
   */
  export let headline = '';
  export let body = '';
  export let buttonText1 = '';
  export let buttonText2 = '';
</script>

<section class="card">
  <div class="card-body">
    <h2>{headline}</h2>
    <p>{body}</p>
    <footer>
      <button>{buttonText1}</button>
      <a class="button primary" href="#">{buttonText2}</a>
    </footer>
  </div>
</section>
