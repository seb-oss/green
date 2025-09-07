'use client'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '../parts'

export default function StudioHeader() {
  return (
    <Core.GdsFlex flex-direction="column" gap="l" className="studio-header">
      <Part.Meta title="Page" description="page" />
      <Part.Breadcrumbs current="Icons" />
      <Core.GdsDivider color="subtle-01" />
      <Part.Search />
    </Core.GdsFlex>
  )
}
