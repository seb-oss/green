<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Input from './Input.svelte'

</script>

<Meta
  title="Components/Forms/Input"
  component={Input}
  argTypes={{
    type: { control: 'select', options: ['none', 'text', 'password', 'number', 'email', 'tel', 'search', 'url'] },
    size: {
      control: 'select',
      options: ['none', 'size-sm', 'size-lg'],
    },
  }}
/>

<Template let:args>
  <Input {...args} />
</Template>

<Story name="Input" args={{ label: 'Default input' }} />
