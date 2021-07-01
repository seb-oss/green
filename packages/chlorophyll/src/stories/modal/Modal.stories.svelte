<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Modal from './Modal.svelte'

</script>

<Meta
  title="Components/Modal/Stories"
  component={Modal}
  argTypes={{
    content: { control: 'text' },
    tag: {
      control: {
        type: 'select',
        options: ['aside', 'section', 'div', 'main'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['', 'large'],
      },
    },
  }}
/>

<Template let:args>
  <Modal {...args} />
</Template>

<Story
  name="default"
  args={{
    type: '',
    tag: 'section',
    size: ''
  }}
/>
<Story
  name="slide-out"
  args={{
    type: '',
    tag: 'aside',
    size: ''
  }}
/>
<Story
  name="take-over"
  args={{
    type: '',
    tag: 'main',
    size: ''
  }}
/>
