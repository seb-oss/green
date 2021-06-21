<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'

</script>

<Meta
  title="CSS/Button/Stories"
  component={Button}
  argTypes={{
    label: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['', 'primary', 'secondary', 'ghost'],
      },
    },
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story
  source={`<button>Default</button>`}
  name="Default"
  args={{
    type: '',
    label: 'Default',
  }}
/>
