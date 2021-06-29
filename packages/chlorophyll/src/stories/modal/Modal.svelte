<script>
  /**
   * Modal Component
   * @component
   */

  /**
   * Modal type
   */
  export let type = 'slide-out'

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


</script>

<div role='dialog' class="modal">
  <div class='header'>
    <h3>{ heading }</h3>
    <button class='close'>close</button>
  </div>
  <div class='body'>
    <p>{ content }</p>
  </div>
  <div class='footer'>
    <button>Secondary</button><button>Primary</button>
  </div>
</div>
