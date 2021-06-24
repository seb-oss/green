<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Component from './Card.svelte'
</script>

<Meta
  title="CSS/Card/Stories"
  component={Component}
  argTypes={{
    headline: { control: 'text' },
    body: { control: 'text' },
    buttonText1: { control: 'text' },
    buttonText2: { control: 'text' },
  }}
/>

<Template let:args>
  <Component {...args} />
</Template>

<Story
  source={`
    <section class="card">
      <div class="card-body">
        <h2>Headline</h2>
        <p>
          Lorem ipsum dolor sit amet
        </p>
        <footer>
          <button>Do something</button>
          <a class="button primary" href="#">Go somewhere</a>
        </footer>
      </div>
    </section>
  `}
  name="Card"
  args={{
    headline: 'Headline',
    body: 'Lorem ipsum dolor sit amet',
    buttonText1: 'Do something',
    buttonText2: 'Go somewhere',
  }}
/>