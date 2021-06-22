<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Card from './Card.svelte'

</script>

<Meta
  title="CSS/Card/Stories"
  component={Card}
  argTypes={{
    headline: { control: 'text' },
    body: { control: 'text' },
    buttonText: { control: 'text' },
  }}
/>

<Template let:args>
  <Card {...args} />
</Template>

<Story
  source={`
    <div class="card">
      <h2>Headline</h2>
      <p>
        Lorem ipsum dolor sit amet
      </p>
      <a class="button primary" href="#">Go somewhere</a>
    </div>
  `}
  name="Nobutton"
  args={{
    headline: 'Headline',
    body: 'Lorem ipsum dolor sit amet',
    buttonText: 'Go somewhere',
  }}
/>
