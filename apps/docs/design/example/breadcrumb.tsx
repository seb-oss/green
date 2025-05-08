'use client'

import { Link } from 'next-view-transitions'
import { GdsFlex, GdsText } from '$/import/components'

const Breadcrumb = () => {
  return (
    <GdsFlex gap="s" align-items="center" font-size="body-s">
      <Link href={'/component/breadcrumb'}>
        <GdsText text-decoration="underline">Green</GdsText>
      </Link>
      <GdsText> / </GdsText>
      <Link href={'/component/breadcrumb'}>
        <GdsText text-decoration="underline">Component</GdsText>
      </Link>
      <GdsText> / </GdsText>
      <Link href={'/component/breadcrumb'}>
        <GdsText color="primary">Breadcrumb</GdsText>
      </Link>
    </GdsFlex>
  )
}

export default Breadcrumb
