<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Link from './Link.svelte'
</script>

<Meta
  title="Components/Links"
  component={Link}
  argTypes={{
    label: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: [
          'none',
          'button',
          'button primary',
          'button secondary',
          'button ghost',
        ],
      },
    },
  }}
/>

<Template let:args>
  <Link {...args} />
</Template>

<Story
  name="Link"
  args={{
    type: 'none',
    label: 'Normal',
  }}
/>
