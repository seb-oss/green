// app/template/[slug]/template.client.tsx
'use client'

interface TemplateClientProps {
  slug: string
}

export function TemplateClient({ slug }: TemplateClientProps) {
  console.log(slug)
  return null
}
