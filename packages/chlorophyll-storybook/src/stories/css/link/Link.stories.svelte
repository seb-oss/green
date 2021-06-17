<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Link from './Link.svelte'

</script>

<Meta
  title="CSS/Link/Stories"
  component={Link}
  argTypes={{
    label: { control: 'text' },
    type: {
      control: { type: 'select', options: ['', 'button'] },
    },
  }}
/>

<Template let:args>
  <Link {...args} />
</Template>

<Story
  source={`<a href="#">Normal</a>`}
  name="Normal"
  args={{
    type: '',
    label: 'Normal',
  }}
/>
