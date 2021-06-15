<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import TypographyElements from './TypographyElements.svelte'
</script>

<Meta
    title="CSS/Typography/Stories"
    component={TypographyElements}
/>

<Template let:args>
    <TypographyElements {...args}/>
</Template>


<Story
    name="Elements"
/>
