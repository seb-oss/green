// studio/parts/aside/icon-aside.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '..'
import { Icon } from '../../../../hooks'
import { useContent } from '../../../../settings/content'
import { useSearch } from '../../context/search.context'
import { IconItem, IconPage } from '../../data/studio.data.types'

interface IconAsideProps {
  page: IconPage
  itemKey: string
  currentIndex: number
  allItems: IconItem[]
}

const CodeSection = ({
  framework,
  data,
}: {
  framework: string
  data: { component: string; import: string }
}) => (
  <Core.GdsDetails summary={framework} size="small" name="frameworks">
    <Core.GdsCard
      flex-direction="column"
      justify-content="stretch"
      align-content="stretch"
      align-items="stretch"
      gap="m"
      border-width="5xs"
      padding="s m"
    >
      <Core.GdsFlex flex-direction="column" gap="3xs">
        <Core.GdsText font="detail-book-xs">Component</Core.GdsText>
        <Part.Copy token={data.component} />
      </Core.GdsFlex>
      <Core.GdsFlex flex-direction="column" gap="3xs">
        <Core.GdsText font="detail-book-xs">Import</Core.GdsText>
        <Part.Copy token={data.import} />
      </Core.GdsFlex>
    </Core.GdsCard>
  </Core.GdsDetails>
)

const DownloadSection = ({
  variant,
  iconComponent,
  onDownload,
  onCopy,
}: {
  variant: 'solid' | 'regular'
  iconComponent: string
  onDownload: () => void
  onCopy: () => void
}) => (
  <Core.GdsCard
    variant="primary"
    flex-direction="row"
    align-items="center"
    padding="xs"
    border-radius="l"
    flex="1"
  >
    <Core.GdsCard
      padding="xl"
      gap="2xs"
      variant="secondary"
      align-items="center"
      width="120px"
    >
      <Icon name={iconComponent} size="l" solid={variant === 'solid'} />
      <Core.GdsText font="detail-regular-xs">
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Core.GdsText>
    </Core.GdsCard>
    <Core.GdsFlex
      gap="4xs"
      padding="4xs"
      flex-direction="column"
      align-items="flex-start"
      justify-content="flex-start"
    >
      <Core.GdsButton
        size="xs"
        rank="tertiary"
        onClick={onDownload}
        align-items="flex-start"
        width="max-content"
      >
        <Core.IconCloudDownload slot="lead" />
        Download
      </Core.GdsButton>
      <Core.GdsButton
        size="xs"
        rank="tertiary"
        onClick={onCopy}
        align-items="flex-start"
        width="max-content"
      >
        <Core.IconCopy slot="lead" />
        Copy
      </Core.GdsButton>
    </Core.GdsFlex>
  </Core.GdsCard>
)

export function IconAside({
  page,
  itemKey,
  currentIndex,
  allItems,
}: IconAsideProps) {
  const router = useRouter()
  const { solid, iconSize } = useSearch()
  const [activeTab, setActiveTab] = useState<'code' | 'download'>('code')
  const { actions } = useContent()

  const iconComponent = actions.getComponent('icon')
  const fullIconData = iconComponent?.icons?.[itemKey]

  const currentItem = allItems.find((item) => item.key === itemKey)
  if (!currentItem || !fullIconData) return null

  const iconCategory = page.icons?.find((group) =>
    group.items.some((item) => item.key === itemKey),
  )?.title

  const frameworks = [
    { key: 'Web Component', data: fullIconData.framework.web },
    { key: 'React', data: fullIconData.framework.react },
    { key: 'Angular', data: fullIconData.framework.angular },
  ]

  const variants: ('solid' | 'regular')[] = ['solid', 'regular']

  const handleSvgDownload = async (variant: 'regular' | 'solid') => {
    const url = fullIconData.static[variant]
    const response = await fetch(url)
    const blob = await response.blob()

    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${currentItem.key}-${variant}.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleSvgCopy = async (variant: 'regular' | 'solid') => {
    const url = fullIconData.static[variant]
    const response = await fetch(url)
    const text = await response.text()
    navigator.clipboard.writeText(text)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      {/* Preview */}
      <Core.GdsCard
        flex="1"
        min-height="200px"
        align-items="center"
        justify-content="center"
        className="preview"
        position="relative"
      >
        <Core.GdsFlex position="absolute" inset="20px 20px auto auto">
          <Core.GdsButton
            size="xs"
            rank="secondary"
            onClick={() => router.push(page.slug)}
          >
            <Core.IconCrossSmall />
          </Core.GdsButton>
        </Core.GdsFlex>
        <Icon name={currentItem.component} size={iconSize} solid={solid} />
      </Core.GdsCard>

      {/* Info and Navigation */}
      <Core.GdsFlex
        gap="2xl"
        align-items="flex-start"
        justify-content="space-between"
        padding-inline="0"
        flex-direction="column"
      >
        <Core.GdsFlex
          flex-direction="column"
          align-items="flex-start"
          width="100%"
          padding="0 xs 0 xs"
        >
          <Core.GdsFlex justify-content="space-between" width="100%">
            <Core.GdsText font="detail-book-s">{currentItem.name}</Core.GdsText>
            <Core.GdsFlex gap="s" justify-content="center" align-items="center">
              {currentIndex > 0 && (
                <Core.GdsButton
                  size="xs"
                  rank="tertiary"
                  onClick={() =>
                    router.push(
                      `${page.slug}/${allItems[currentIndex - 1].key}`,
                    )
                  }
                >
                  <Core.IconChevronLeft size="m" />
                </Core.GdsButton>
              )}
              {currentIndex < allItems.length - 1 && (
                <Core.GdsButton
                  size="xs"
                  rank="tertiary"
                  onClick={() =>
                    router.push(
                      `${page.slug}/${allItems[currentIndex + 1].key}`,
                    )
                  }
                >
                  <Core.IconChevronRight size="m" />
                </Core.GdsButton>
              )}
            </Core.GdsFlex>
          </Core.GdsFlex>
          <Core.GdsText color="neutral-02" font="detail-book-s">
            {iconCategory}
          </Core.GdsText>
          {/* {fullIconData.meta.tags.map((tag) => (
            <Core.GdsBadge key={tag}>{tag}</Core.GdsBadge>
          ))} */}
        </Core.GdsFlex>

        {/* Tabs and Content */}
        <Core.GdsFlex flex-direction="column" gap="s" width="100%">
          <Core.GdsSegmentedControl
            value={activeTab}
            size="small"
            width="max-content"
            onchange={(e: Event) => {
              const target = e.target as HTMLSelectElement
              setActiveTab(target.value as 'code' | 'download')
            }}
          >
            <Core.GdsSegment value="code">
              <Core.GdsFlex gap="xs" align-items="center">
                <Core.IconCodeBrackets size="m" />
                <Core.GdsText font="body-regular-s">Code</Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsSegment>
            <Core.GdsSegment value="download">
              <Core.GdsFlex gap="xs" align-items="center">
                <Core.IconFileBend size="m" />
                <Core.GdsText font="body-regular-s">Download</Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsSegment>
          </Core.GdsSegmentedControl>

          {activeTab === 'code' ? (
            <Core.GdsCard
              flex-direction="column"
              gap="s"
              variant="primary"
              background="none"
              border="none"
              padding="0 2xs"
              width="100%"
            >
              <Core.GdsFlex gap="0" flex-direction="column" padding="0 2xs">
                {frameworks.map(({ key, data }) => (
                  <CodeSection key={key} framework={key} data={data} />
                ))}
              </Core.GdsFlex>
            </Core.GdsCard>
          ) : (
            <Core.GdsCard
              gap="s"
              flex-direction=""
              variant="primary"
              background="none"
              border="none"
              padding="0"
              width="100%"
            >
              {variants.map((variant) => (
                <DownloadSection
                  key={variant}
                  variant={variant}
                  iconComponent={currentItem.component}
                  onDownload={() => handleSvgDownload(variant)}
                  onCopy={() => handleSvgCopy(variant)}
                />
              ))}
            </Core.GdsCard>
          )}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
