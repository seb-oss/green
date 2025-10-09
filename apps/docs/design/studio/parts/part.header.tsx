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
      <Core.GdsFlex
        flex-direction="column; m{row}"
        justify-content="space-between"
        height="max-content; m{xl}"
        gap="xl; m{0}"
      >
        <Part.Breadcrumbs key={page} />
        <Core.GdsDiv display="block; m{none}">
          <Core.GdsDivider color="subtle-01" />
        </Core.GdsDiv>
        <Part.Actions />
      </Core.GdsFlex>
      <Core.GdsDiv display="none; m{block}">
        <Core.GdsDivider color="subtle-01" />
      </Core.GdsDiv>
      <Part.Search page={page} />
    </Core.GdsFlex>
  )
}
