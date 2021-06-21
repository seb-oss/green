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
      control: { type: 'select', options: ['primary', 'secondary'] },
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

<Story
  source={`<button class="primary">Primary</button>`}
  name="Primary"
  args={{
    type: 'primary',
    label: 'Primary',
  }}
/>

<Story
  source={`<button class="secondary">Secondary</button>`}
  name="Secondary"
  args={{
    type: 'secondary',
    label: 'Secondary',
  }}
/>
