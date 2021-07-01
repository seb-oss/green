<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Close from './Close.svelte'

  function handleClick() {}
</script>

<Meta
  title="Components/Close"
  component={Close}
  argTypes={{}}
/>

<Template let:args>
  <Close {...args} on:click={handleClick} />
</Template>

<Story name="Close" args={{}} />
