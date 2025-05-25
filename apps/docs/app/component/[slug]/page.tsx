// app/component/[slug]/page.tsx

import { notFound } from 'next/navigation'

import { useContentContext } from '../../../settings/content/hooks'

type Props = {
  params: { slug: string }
}

// Keep these exports in a separate server file if needed
export const dynamic = 'force-static'
export { generateStaticParams, generateMetadata } from './page.server'

export default function ComponentPage({ params }: Props) {
  const { slug } = params
  const { isLoaded, actions } = useContentContext()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component) {
    notFound()
  }

  return (
    <article>
      <h1>{component.title}</h1>
      <p>{component.summary}</p>
      {/* Add more component content rendering here */}
    </article>
  )
}
