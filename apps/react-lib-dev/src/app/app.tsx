// App.tsx
import { useState } from 'react'

import { GdsFlex } from '@sebgroup/green-core/react/flex'
import { GdsText } from '@sebgroup/green-core/react/text'
import { routes } from '../config/routes'
import Header from '../design/blocks/header'
import Sidebar from '../design/blocks/sidebar'

export function App() {
  const [activeRoute, setActiveRoute] = useState(routes[0].id)
  const [activeSubRoute, setActiveSubRoute] = useState<string | null>(
    routes[0].subRoutes?.[0]?.id ?? null,
  )

  const getCurrentRoute = () => {
    const route = routes.find((r) => r.id === activeRoute)
    if (!route) return null

    if (route.subRoutes && activeSubRoute) {
      return {
        parent: route,
        current: route.subRoutes.find((sr) => sr.id === activeSubRoute),
      }
    }

    return { current: route }
  }

  const renderContent = () => {
    const currentRoute = getCurrentRoute()
    if (!currentRoute) return null

    // if (currentRoute.parent?.subRoutes) {
    //   return (
    //     <Tabs>
    //       {currentRoute.parent.subRoutes.map((subRoute) => (
    //         <Tab
    //           key={subRoute.id}
    //           title={subRoute.title}
    //           active={activeSubRoute === subRoute.id}
    //         >
    //           <div className="pt-5">{subRoute.component}</div>
    //         </Tab>
    //       ))}
    //     </Tabs>
    //   )
    // }

    return currentRoute.current ? currentRoute.current.component : null
  }

  return (
    <GdsFlex flex-direction="column">
      <Header />
      <GdsFlex gap="xl" align-items="flex-start">
        <Sidebar
          activeRoute={activeRoute}
          activeSubRoute={activeSubRoute}
          onRouteChange={setActiveRoute}
          onSubRouteChange={setActiveSubRoute}
        />
        <GdsFlex
          flex="1"
          flex-direction="column"
          gap="xl"
          max-inline-size="980px"
          padding-block="s 0"
        >
          <GdsText tag="h1">Green React</GdsText>
          {renderContent()}
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}

export default App
