import Link from 'next/link'
// import Flex from '@/flex/flex'
// import Grid from '@/grid/grid'

import '@/footer/footer.css'
import Grid from '@/[gds]/grid'
import Flex from '@/[gds]/flex'
import { Theme } from '@/[gds]/theme'

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <Theme>
      <Grid columns="1" width="100%">
        <h2>Green Design System</h2>
        <Grid columns="5">
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </Grid>
        <Flex justify="space-between">
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
      {/* <footer className="main-footer" padding-block="large">
        <Grid
          columns="l{8} m{4} s{1}"
          gap="l{xl} m{l} s{xs}"
          row-gap="l{xl} m{l} s{xs}"
          padding="l{2xl} m{l} s{xs}"
        >
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
          {/* <Flex justify="between" wrap="wrap" directionMobile="column">
          <span>{text}</span>
          <button
            type="button"
            data-cc="c-settings"
            className="cookie-preferences"
          >
            Cookie preferences
          </button>
        </Flex> */}
    </Theme>
  )
}
