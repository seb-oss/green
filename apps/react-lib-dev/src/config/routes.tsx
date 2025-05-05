// config/routes.tsx
import { ReactNode } from 'react'

import { IconSquareGridCircle } from '@sebgroup/green-react/src/lib/icon/icons'
import { AlertRibbons } from '../components/alert-ribbons'
import { FormExample } from '../components/form'
import { GreenCoreFormExample } from '../components/green-core-form'
import { Modals } from '../components/modals'

export interface RouteConfig {
  id: string
  title: string
  icon: ReactNode
  component: ReactNode
  subRoutes?: Omit<RouteConfig, 'icon' | 'subRoutes'>[]
}

export const routes: RouteConfig[] = [
  {
    id: 'forms',
    title: 'Forms',
    icon: <IconSquareGridCircle />,
    component: null,
    subRoutes: [
      {
        id: 'core-form',
        title: 'Green Core Form',
        component: <GreenCoreFormExample />,
      },
      {
        id: 'legacy-form',
        title: 'Form (legacy)',
        component: <FormExample />,
      },
    ],
  },
  {
    id: 'alert-ribbons',
    title: 'Alert Ribbons',
    icon: <IconSquareGridCircle />,
    component: <AlertRibbons />,
  },
  {
    id: 'modals',
    title: 'Modals',
    icon: <IconSquareGridCircle />,
    component: <Modals />,
  },
]
