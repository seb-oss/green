import Button from '@/[gds]/button'
import Divider from '@/[gds]/divider'
import Flex from '@/[gds]/flex'
import Grid from '@/[gds]/grid'
import Text from '@/[gds]/text'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <Flex direction="column">
      <Divider color="base200" />
      <Flex direction="column" gap="8xl" padding="8xl">
        <Text tag="h2" size="display-small">
          Green Design System
        </Text>
        <Grid columns="5">
          <Flex direction="column" gap="l">
            <Link href="/about">About</Link>
            <Link href="/about">Foundation</Link>
            <Link href="/about">Components</Link>
          </Flex>
          <Flex direction="column" gap="l">
            <Link href="/about">Github</Link>
            <Link href="/about">Changelog</Link>
            <Link href="/about">Status</Link>
          </Flex>
          <Flex direction="column" gap="l">
            <Link href="/about">SEB Group</Link>
            <Link href="/about">SEB.se</Link>
          </Flex>
        </Grid>
        <Flex justify="space-between">
          <Text>{text}</Text>
          <Button rank="tertiary">Cookie preferences</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
