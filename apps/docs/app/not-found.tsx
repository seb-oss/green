import Link from "next/link"
import Content from "&/content/content"
import Grid from "@/grid/grid"
export default function NotFound() {
  return (
    <Content layout="home">
      <Grid
        columns={1}
        gapBlock="large"
        paddingInline="large"
        paddingBlock="large"
      >
        <h1 className="heading-medium">404 - Page Not Found</h1>
        <Link href={"/"}>Go back</Link>
      </Grid>
    </Content>
  )
}
