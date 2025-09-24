// play/page.tsx
import { redirect } from 'next/navigation'

import { studioData } from '../../design/studio/data/studio.data'

export default function PlayPage() {
  const DEFAULT = studioData[0]?.pages[0]?.slug
  if (DEFAULT) {
    redirect(DEFAULT)
  }
  return null
}
