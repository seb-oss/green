'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'

export default function Templates() {
  const { actions } = useContent()
  const [activeTab, setActiveTab] = useState<'component' | 'api'>('component')

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" className="studio-page">
      templates
    </Core.GdsFlex>
  )
}
