<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import Playground from './Playground.svelte'
</script>

<Meta
    title="CSS/Playground"
    component={Playground}
/>

<Template let:args>
    <Playground {...args}/>
</Template>


<Story
        name="Forms"
/>
