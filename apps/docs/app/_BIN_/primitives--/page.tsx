// app/components/page.tsx
import { Metadata } from 'next'

import { PrimitivesClient } from './page.client'

export const metadata: Metadata = {
  title: 'Primitives — Green Design System',
  description:
    'Green Design System, a framework designed to bring unity, efficiency, and coherent perspective to our digital experiences. Over time it will grow and evolve but always reflect our design philosophy. User needs first, being forefront and with confidence.',
}

export default function Primitives() {
  return <PrimitivesClient />
}
