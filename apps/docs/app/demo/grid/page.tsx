import type { Metadata } from "next"
import Grid from "@/grid/grid"
import GridPlayground from "@/grid/playground"
import Content from "&/content/content"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/demo/grid"),
  title: "Demo Grid — Green Design System",
}

export default function GridPage() {
  return (
    <Content layout="content">
      <Grid columns={1} paddingInline="small" paddingBlock="small">
        <GridPlayground />
      </Grid>
      {1 > 2 ? (
        <Grid
          columns={4}
          paddingInline="large"
          paddingBlock="large"
          gapInline="large"
          gapBlock="large"
        >
          <div>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Grid>
      ) : (
        ""
      )}
    </Content>
  )
}
