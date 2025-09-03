// design/studio/tools/icons/icons.tsx
'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { useContent } from '../../../../settings/content'
import { Link } from '../../../atoms/link/link'
import * as Part from '../../parts'
import Deprecated from './deprecated/deprecated'
import IconDetail from './icons.sub'

import './icons.css'

export default function Icons({ selected }: { selected?: string }) {
  const { isLoaded, actions } = useContent()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const router = useRouter()
  const component = actions.getComponent('icon')
  const [migrationSearch, setMigrationSearch] = useState('')

  const { categories, iconList, totalIcons } = useMemo(() => {
    if (!component?.icons)
      return { categories: [], iconList: [], totalIcons: 0 }

    const totalIcons = Object.keys(component.icons).length

    const cats = Array.from(
      new Set(
        Object.values(component.icons)
          .map((icon) => icon.meta.categories)
          .flat(),
      ),
    ).sort()

    let icons = Object.entries(component.icons)

    if (search) {
      icons = icons.filter(([name, icon]) => {
        const searchString =
          `${name} ${icon.displayName} ${icon.meta.categories.join(' ')} ${icon.meta.tags.join(' ')}`.toLowerCase()
        return searchString.includes(search.toLowerCase())
      })
    }

    // Filter by category
    if (selectedCategory) {
      icons = icons.filter(([_, icon]) =>
        icon.meta.categories.includes(selectedCategory),
      )
    }

    return {
      categories: cats,
      iconList: icons.sort((a, b) =>
        a[1].displayName.localeCompare(b[1].displayName),
      ),
      totalIcons,
    }
  }, [component?.icons, search, selectedCategory])

  const NAME = (name: string) => {
    return name.replace(/\s+/g, '')
  }

  const handleIconClick = (name: string) => {
    router.push(`/studio/icons/${name}`)
  }

  const isMigrationPage = selected === 'migration'

  if (!isLoaded || !component?.icons) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title={isMigrationPage ? 'Migration' : 'Icons'}
        description={
          isMigrationPage
            ? 'Complete mapping of FontAwesome icons to their Green Design System equivalent'
            : 'Icons description'
        }
        count={totalIcons}
        search={
          <Core.GdsInput
            plain
            width="100%"
            clearable
            value={isMigrationPage ? migrationSearch : search}
            onInput={(e) =>
              isMigrationPage
                ? setMigrationSearch((e.target as HTMLInputElement).value)
                : setSearch((e.target as HTMLInputElement).value)
            }
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        }
        filter={
          !isMigrationPage && (
            <Core.GdsDropdown
              plain
              value={selectedCategory}
              oninput={(e: Event) =>
                setSelectedCategory((e.target as HTMLSelectElement).value)
              }
            >
              <Core.GdsOption value="">All Categories</Core.GdsOption>
              {categories.map((category) => (
                <Core.GdsOption key={category} value={category}>
                  {category}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          )
        }
        extra={
          <Core.GdsFlex align-items="center" gap="s">
            <Core.GdsText color="warning-01">
              Font awesome migration
            </Core.GdsText>
            <Link
              component="button"
              href="/studio/icons/migration"
              rank="secondary"
              variant="warning"
              size="small"
            >
              Instruction
              <Core.IconCircleQuestionmark slot="trail" />
            </Link>
          </Core.GdsFlex>
        }
      />

      <Core.GdsFlex gap="4xl" align-items="flex-start" width="100%">
        {isMigrationPage ? (
          <Deprecated searchQuery={migrationSearch} />
        ) : (
          <>
            {iconList.length > 0 ? (
              <Core.GdsGrid
                columns={selected ? '4' : '6'}
                gap="l"
                height="max-content"
              >
                {iconList.map(([name, icon]) => (
                  <Core.GdsCard
                    key={name}
                    padding="m"
                    min-height="200px"
                    justify-content="center"
                    align-items="center"
                    variant="secondary"
                    className="icon-card"
                    background={selected === icon.id ? 'neutral-01' : 'none'}
                    border-radius="m"
                    onClick={() => handleIconClick(name)}
                    tabIndex={0}
                  >
                    <Core.GdsFlex
                      justify-content="center"
                      align-items="center"
                      height="48px"
                      color="neutral-01"
                    >
                      <Icon name={`Icon` + NAME(icon.displayName)} size="l" />
                    </Core.GdsFlex>
                    <Core.GdsText
                      color="neutral-02"
                      font="detail-book-xs"
                      text-align="center"
                    >
                      {icon.displayName}
                    </Core.GdsText>
                  </Core.GdsCard>
                ))}
              </Core.GdsGrid>
            ) : (
              <Core.GdsCard
                justify-content="center"
                align-items="center"
                height="40vh"
                padding="2xl"
                flex="1"
              >
                <Core.IconMagnifyingGlass size="xl" />
                <Core.GdsText color="subtle-02">
                  No icons found matching your search
                </Core.GdsText>
              </Core.GdsCard>
            )}
            {selected && <IconDetail ID={selected} />}
          </>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
