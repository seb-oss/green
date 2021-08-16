<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'

  function handleClick() {}
</script>

<Meta
  title="Components/Buttons"
  component={Button}
  argTypes={{
    type: { control: 'select', options: ['none', 'button', 'submit', 'reset'] },
    variant: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'ghost'],
    },
  }}
/>

<Template let:args>
  <Button {...args} on:click={handleClick} />
</Template>

<Story name="Button" args={{ label: 'Default button' }} />
