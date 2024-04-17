import ComponentList from "@/component-list/component-list"
import Grid from "@/grid/grid"
import Content from "&/content/content"

export default function Components() {
  return (
    <Content layout="content">
      <Grid columns={1} paddingBlock="large" paddingInline="large">
        <ComponentList title="Components" />
      </Grid>
    </Content>
  )
}
