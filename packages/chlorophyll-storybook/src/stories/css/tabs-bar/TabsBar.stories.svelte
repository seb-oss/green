<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TabsBar from "./TabsBar.svelte";
</script>

<Meta
  title="CSS/TabsBar/Stories"
  component={TabsBar}
  argTypes={{}}
/>


<Template let:args>
  <TabsBar {...args}/>
</Template>

<Story
  source={`<div></div>`}
  name="Default"
  args={{}}
/>
