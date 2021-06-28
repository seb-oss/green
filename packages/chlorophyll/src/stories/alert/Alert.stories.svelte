<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Alert from './Alert.svelte'

</script>

<Meta
  title="CSS/Alert/Stories"
  component={Alert}
  argTypes={{
    content: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['', 'success', 'warning', 'danger', 'info'],
      },
    },
  }}
/>

<Template let:args>
  <Alert {...args} />
</Template>

<Story
  name="Success"
  args={{
    type: 'success',
    content: 'Succees',
    heading: '',
    button: '',
    primaryButton: '',
    link: '',
  }}
/>
