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
    buttonText1: { control: 'text' },
    buttonText2: { control: 'text' },
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
      <div>
        <button>Do something</button>
        <a class="button primary" href="#">Go somewhere</a>
      </div>
    </div>
  `}
  name="Card"
  args={{
    headline: 'Headline',
    body: 'Lorem ipsum dolor sit amet',
    buttonText1: 'Do something',
    buttonText2: 'Go somewhere',
  }}
/>
