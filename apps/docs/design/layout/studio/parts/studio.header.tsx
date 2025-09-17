'use client'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '../parts'

interface Types {
  title: string
  description: string
  page: string
}

export default function StudioHeader({ title, description, page }: Types) {
  if (page === 'studio') return null
  return (
    <Core.GdsFlex flex-direction="column" gap="l" className="studio-header">
      <Part.Meta title={title} description={description} />
      <Part.Breadcrumbs current={page} />
      <Core.GdsDivider color="subtle-01" />
      <Part.Search />
    </Core.GdsFlex>
  )
}
