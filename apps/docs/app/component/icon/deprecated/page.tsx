// page.tsx
import { Metadata } from 'next'

import { DeprecatedIcons } from '../../../../design/atoms/deprecated/deprecated'

export const metadata: Metadata = {
  title: 'Deprecated Icons — Green Design System',
  description:
    'Reference guide for deprecated icons in the Green Design System.',
}

export default function IconsPage() {
  return <DeprecatedIcons />
}
