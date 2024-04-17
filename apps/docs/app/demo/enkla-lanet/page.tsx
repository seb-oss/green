import type { Metadata } from "next"
import Image from "next/image"
import Grid from "@/grid/grid"

import "./style.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/demo/enkla-lanet"),
  title: "Enkla Lanet — Green Design System",
}

export default function EnklaLanet() {
  return (
    <div className="enkla">
      <h1>Demo: Enkla lanet</h1>
      <p>WARNING: This is a demo only!</p>

      <Grid
        columns={2}
        gapBlock="large"
        gapInline="large"
        paddingBlock="medium"
        paddingInline="medium"
      >
        <Image
          src={`https://source.unsplash.com/user/cdombaxi_6`}
          alt="Placeholder"
          width={500}
          height={1200}
          className="figure"
        />
        <form action="">
          <input type="text" placeholder="Test" />
        </form>
      </Grid>
    </div>
  )
}
