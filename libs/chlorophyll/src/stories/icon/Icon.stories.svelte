<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Icon from './Icon.svelte'
  import Alert from '../alert/Alert.svelte'

</script>

<Meta
  title="Components/Icon/Stories"
  component={Icon}
  argTypes={{
    size: {
    control: {
      type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  }}
/>

<Template let:args>
  <Icon {...args} />
</Template>

<Story
  name="Default"
  args={{
    size: 'medium',
  }}
/>

<Story
  name="Icon in button"
>
  <button class="primary">Primary<Icon htmlClass="icon ms-3" /></button>
  <br />
  <br />
  <button class="primary icon-only"><Icon /></button>
</Story>

<Story
  name="Icon in alert"
>
  <Alert  Icon={Icon} type='success' content='Succees' heading='' button='' primaryButton='' link=''   }} />
</Story>