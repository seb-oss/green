// components/sidebar.tsx
import { GdsCard } from '@sebgroup/green-core/react/card'
import { GdsDiv } from '@sebgroup/green-core/react/div'
import { GdsDropdown } from '@sebgroup/green-core/react/dropdown'
import { GdsFlex } from '@sebgroup/green-core/react/flex'
import { GdsOption } from '@sebgroup/green-core/react/option'
import { routes } from '../../config/routes'

interface SidebarProps {
  activeRoute: string
  activeSubRoute: string | null
  onRouteChange: (routeId: string) => void
  onSubRouteChange: (subRouteId: string | null) => void
}

export default function Sidebar({
  activeRoute,
  activeSubRoute,
  onRouteChange,
  onSubRouteChange,
}: SidebarProps) {
  const handleRouteClick = (routeId: string) => {
    onRouteChange(routeId)
    const route = routes.find((r) => r.id === routeId)
    if (route?.subRoutes) {
      onSubRouteChange(route.subRoutes[0].id)
    } else {
      onSubRouteChange(null)
    }
  }

  return (
    <GdsFlex flex-direction="column" gap="s" margin="0 s; m{s 0 0 s}">
      <GdsCard
        height="calc(100vh - 72px)"
        align-items="flex-start"
        flex-direction="column"
        z-index="2"
        padding="none"
        position="fixed; m{sticky}"
        inset="70px 0 0 0"
        max-height="calc(100vh - 90px)"
        overflow="hidden"
        min-width="270px"
        className="sidebar-transition"
        variant="primary"
        border-radius="xs"
      >
        <GdsFlex flex-direction="column" max-height="100%">
          <GdsDiv
            padding="xs"
            min-width="250px"
            border="0 0 4xs 0"
            border-color="primary"
          >
            <GdsFlex align-items="flex-start" flex-direction="column" gap="4xs">
              <GdsFlex flex-direction="column" min-width="100%">
                {routes.map((route) => (
                  <GdsFlex
                    key={route.id}
                    flex-direction="column"
                    min-width="100%"
                  >
                    <div
                      onClick={() => handleRouteClick(route.id)}
                      className={`cursor-pointer ${
                        activeRoute === route.id ? 'active' : ''
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <GdsFlex align-content="center" gap="s" padding="xs s">
                        {route.icon}
                        {route.title}
                      </GdsFlex>
                    </div>
                    {route.subRoutes && activeRoute === route.id && (
                      <GdsFlex flex-direction="column" padding="0 0 0 xl">
                        {route.subRoutes.map((subRoute) => (
                          <div
                            key={subRoute.id}
                            onClick={() => onSubRouteChange(subRoute.id)}
                            className={`cursor-pointer ${
                              activeSubRoute === subRoute.id ? 'active' : ''
                            }`}
                            style={{ cursor: 'pointer' }}
                          >
                            <GdsFlex align-content="center" padding="xs s">
                              {subRoute.title}
                            </GdsFlex>
                          </div>
                        ))}
                      </GdsFlex>
                    )}
                  </GdsFlex>
                ))}
              </GdsFlex>
            </GdsFlex>
          </GdsDiv>
        </GdsFlex>
      </GdsCard>
      <GdsDropdown label="Design version">
        <GdsOption value="1">2016</GdsOption>
        <GdsOption value="2">2023</GdsOption>
      </GdsDropdown>
    </GdsFlex>
  )
}
