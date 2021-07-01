<script>
  /**
   * Modal Component
   * @component
   */

  /**
   * Modal contents
   */
  export let content = 'Lorem ipsum dolar sit amet modal body content.'

  /**
   * Modal heading
   */
  export let heading = 'Modal heading'

  /**
   * Modal footer
   */
  export let footer = ''

  /**
   * Modal size
   */
  export let size = ''

  /**
   * Tag name to use with modal element. Determines type of modal i.e. slide out, dialog, take over etc.
   */
  export let tag = 'section'

  let modal = `<${tag} role='dialog' ${size ? 'class=' + size : '' }>
  <div class='header'>
    <h3>${ heading }</h3>
    <button class='close'>
      <span class='sr-only'>Close</span>
    </button>
  </div>
  <div class='body'>
    <p>${ content }</p>
  </div>
  <div class='footer'>
    <button>Secondary</button><button>Primary</button>
  </div>
</${tag}>`

</script>

{@html modal}