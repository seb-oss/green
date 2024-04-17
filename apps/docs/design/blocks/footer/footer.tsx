import Link from "next/link"
import Flex from "@/flex/flex"
import Grid from "@/grid/grid"

import "@/footer/footer.css"

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = "\u00A9"
  const text = `${symbol}  ${year} Green Design System`

  return (
    <footer className="main-footer" padding-block="large">
      <Grid
        columns={1}
        mobile={2}
        tablet={3}
        gapBlock="large"
        paddingInline="medium"
      >
        <h2>Green Design System</h2>
        <Grid columns={5} justify="start" fluid>
          <nav>
            <ul>
              <Grid columns={1} gapBlock="small">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/foundation">Foundation</Link>
                </li>
                <li>
                  <Link href="/components">Components</Link>
                </li>
              </Grid>
            </ul>
          </nav>
          <nav>
            <ul>
              <Grid columns={1} gapBlock="small">
                <li>
                  <Link href="https://github.com/sebgroup/green">Github</Link>
                </li>
                <li>
                  <Link href="/changelog">Changelog</Link>
                </li>
                <li>
                  <Link href="/status">Status</Link>
                </li>
              </Grid>
            </ul>
          </nav>
          <nav>
            <ul>
              <Grid columns={1} gapBlock="small">
                <li>
                  <Link href="https://sebgroup.com/">SEB Group</Link>
                </li>
                <li>
                  <Link href="https://seb.se/">SEB.se</Link>
                </li>
              </Grid>
            </ul>
          </nav>
        </Grid>
        <Flex justify="between" wrap="wrap" directionMobile="column">
          <span>{text}</span>
          <button
            type="button"
            data-cc="c-settings"
            className="cookie-preferences"
          >
            Cookie preferences
          </button>
        </Flex>
      </Grid>
    </footer>
  )
}
