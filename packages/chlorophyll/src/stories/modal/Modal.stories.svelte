<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Alert from './Modal.svelte'

</script>

<Meta
  title="Components/Modal/Stories"
  component={Alert}
  argTypes={{
    content: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['', 'slide-out', 'take-over', 'dialog'],
      },
    },
  }}
/>

<Template let:args>
  <Alert {...args} />
</Template>

<Story
  name="default"
  args={{
    type: '',

  }}
/>
