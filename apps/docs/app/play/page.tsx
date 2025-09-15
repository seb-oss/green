// play/page.tsx
import { redirect } from 'next/navigation'

import { studioData } from '../../design/layout/studio/data/studio.data'

export default function PlayPage() {
  const firstPage = studioData[0]?.pages[0]?.slug
  if (firstPage) {
    redirect(firstPage)
  }
  return null
}
