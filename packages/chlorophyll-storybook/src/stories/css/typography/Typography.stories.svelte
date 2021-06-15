<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import Typography from './Typography.svelte'
</script>

<Meta
    title="CSS/Typography"
    component={Typography}
/>

<Template let:args>
    <Typography {...args}/>
</Template>


<Story
    name="Typography"
/>
