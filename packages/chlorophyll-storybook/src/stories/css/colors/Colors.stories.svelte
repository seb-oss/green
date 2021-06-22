<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Colors from './Colors.svelte'

</script>

<Meta
  title="CSS/Colors/Stories"
  component={Colors}
  argTypes={{
    label: { control: 'text' },
    type: {
      control: { type: 'select', options: ['', 'button'] },
    },
  }}
/>

<Template let:args>
  <Colors {...args} />
</Template>

<Story
  source={`<a href="#">Normal</a>`}
  name="Normal"
  args={{
    type: '',
    label: 'Normal',
  }}
/>
