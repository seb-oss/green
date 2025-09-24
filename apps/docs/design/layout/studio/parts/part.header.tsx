'use client'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '.'

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
      <Core.GdsFlex justify-content="space-between" height="5xl">
        <Part.Breadcrumbs key={page} />
        <Part.Actions />
      </Core.GdsFlex>
      <Core.GdsDivider color="subtle-01" />
      <Part.Search page={page} />
    </Core.GdsFlex>
  )
}
