<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'

  function handleClick() {}
</script>

<Meta
  title="Components/Buttons"
  component={Button}
  argTypes={{
    type: { control: 'select', options: ['none', 'button', 'submit', 'reset'] },
    variant: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'ghost'],
    },
  }}
/>

<Template let:args>
  <Button {...args} on:click={handleClick} />
</Template>

<Story name="Button" args={{ label: 'Default button' }} />

<Story name="Types">
  <p>Types</p>

  <Button type="button" label="Button" />
  <Button type="submit" label="Submit" />
  <Button type="reset" label="Reset" />
</Story>

<Story name="Variants">
  <p>Variants</p>

  <Button variant="primary" label="Primary" />
  <Button variant="secondary" label="Secondary" />
  <Button variant="ghost" label="Ghost" />
</Story>
