'use client'

import * as Core from '@sebgroup/green-core/react'

import './hero.css'

export default function Hero() {
  return (
    <Core.GdsGrid
      columns="24"
      gap="m"
      width="100%"
      height="100vh"
      padding="0"
      className="home-hero"
    >
      <Core.GdsCard
        variant="secondary"
        grid-column="1 / 4"
        grid-row="1 / 2"
        height="100%"
        align-items="center"
        justify-content="center"
        color="positive"
        data-name="signal"
      >
        <Core.GdsSignal />
      </Core.GdsCard>
      <Core.GdsCard
        variant="secondary"
        grid-column="4 / 13"
        grid-row="1 / 2"
        height="100%"
        align-items="center"
        justify-content="center"
        data-name="buttons"
      >
        <Core.GdsFlex gap="s" align-items="center">
          <Core.GdsButton size="small">Primary</Core.GdsButton>
          <Core.GdsButton rank="secondary" size="small" variant="positive">
            <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
            Secondary
          </Core.GdsButton>
          <Core.GdsButton size="small" label="Next step 2" rank="secondary">
            <Core.IconArrowRight> </Core.IconArrowRight>
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsCard>
      <Core.GdsCard
        variant="secondary"
        grid-column="13 / 17"
        grid-row="1 / 2"
        height="100%"
        data-name="checkbox"
        justify-content="center"
        align-items="center"
      >
        <Core.GdsCheckbox checked label="Publish"></Core.GdsCheckbox>
      </Core.GdsCard>

      <Core.GdsCard
        variant="secondary"
        grid-column="1 / 11"
        grid-row="2 / 5"
        height="100%"
        justify-content="center"
        align-items="center"
        data-name="textarea"
      >
        <Core.GdsTextarea
          width="80%"
          rows={12}
          label="Green for web"
          supportingText="Building blocks for digital experiences"
          showExtendedSupportingText
          clearable
        >
          <Core.IconCreditCard slot="lead" />
          <span slot="extended-supporting-text">
            Components, patterns, and guidelines
          </span>
        </Core.GdsTextarea>
      </Core.GdsCard>

      <Core.GdsCard
        variant="secondary"
        grid-column="11 / 17"
        grid-row="2 / 4"
        height="100%"
        data-main="gds"
        justify-content="center"
        align-items="center"
        color="primary"
        position="relative"
        overflow="hidden"
        padding="0"
        border="none"
        background="tertiary"
      >
        <Core.GdsFlex
          flex-direction="column"
          position="absolute"
          inset="0"
          color="tertiary"
          justify-content="center"
          align-items="center"
          z-index="1"
          gap="s"
        >
          <Core.IconBrandGreen size="2xl" />
          <Core.GdsText>Green Design System</Core.GdsText>
          <Core.GdsText font-weight="book">2.0</Core.GdsText>
        </Core.GdsFlex>

        <Core.GdsVideo
          playsinline={true}
          autoplay={true}
          muted={true}
          loop={true}
          width="100%"
          height="100%"
          object-fit="cover"
          opacity="0.6"
          src="https://api.seb.io/components/video/video.mp4"
        ></Core.GdsVideo>
      </Core.GdsCard>

      <Core.GdsCard
        variant="secondary"
        grid-column="15 / 25"
        grid-row="4 / 5"
        height="100%"
        data-name="segmented-control"
        justify-content="center"
        align-items="center"
      >
        <Core.GdsSegmentedControl value="2" width="max-content">
          <Core.GdsSegment value="1">
            <Core.GdsFlex
              align-items="center"
              justify-content="center"
              gap="xs"
            >
              <Core.IconSquareGridCircle size="m"></Core.IconSquareGridCircle>
              Tools
            </Core.GdsFlex>
          </Core.GdsSegment>
          <Core.GdsSegment value="2">
            <Core.GdsFlex
              align-items="center"
              justify-content="center"
              gap="xs"
            >
              <Core.IconDevices size="m"></Core.IconDevices>
              Devices
            </Core.GdsFlex>
          </Core.GdsSegment>
          <Core.GdsSegment value="3">
            <Core.GdsFlex
              align-items="center"
              justify-content="center"
              gap="xs"
            >
              <Core.IconBrandGreen size="m"></Core.IconBrandGreen>
              System
            </Core.GdsFlex>
          </Core.GdsSegment>
        </Core.GdsSegmentedControl>
      </Core.GdsCard>

      <Core.GdsCard
        variant="secondary"
        grid-column="17 / 25"
        grid-row="1 / 3"
        height="100%"
        justify-content="center"
        align-items="center"
        data-name="colors"
      >
        <Core.GdsFlex gap="m" align-items="center">
          <Core.GdsGrid columns="3" gap="s" width="200px">
            <Core.GdsCard
              level="3"
              padding="0"
              variant="primary"
              border-radius="max"
              width="100%"
              height="10px"
            />
            <Core.GdsCard
              level="3"
              padding="0"
              variant="notice"
              border-radius="max"
              width="100%"
              height="10px"
            />
            <Core.GdsCard
              level="3"
              padding="0"
              variant="warning"
              border-radius="max"
              width="100%"
              height="10px"
            />
            <Core.GdsCard
              level="3"
              padding="0"
              variant="positive-secondary"
              border-radius="max"
              width="100%"
              height="10px"
            />
            <Core.GdsCard
              level="3"
              padding="0"
              variant="notice-secondary"
              border-radius="max"
              width="100%"
              height="10px"
            />
            <Core.GdsCard
              level="3"
              padding="0"
              variant="warning-secondary"
              border-radius="max"
              width="100%"
              height="10px"
            />
          </Core.GdsGrid>
        </Core.GdsFlex>
      </Core.GdsCard>
      <Core.GdsCard
        variant="secondary"
        grid-column="17 / 20"
        grid-row="3 / 4"
        height="100%"
        justify-content="center"
        align-items="center"
        data-name="badge"
      >
        <Core.GdsBadge variant="positive" notification size="small">
          999+
        </Core.GdsBadge>
      </Core.GdsCard>

      <Core.GdsCard
        variant="secondary"
        grid-column="20 / 25"
        grid-row="3 / 4"
        height="100%"
        justify-content="center"
        align-items="center"
        color="primary"
        data-name="icons"
      >
        <Core.GdsFlex alig-items="center" gap="m">
          <Core.IconAi size="l"></Core.IconAi>
          <Core.IconBank size="l"></Core.IconBank>
          <Core.IconRocket size="l"></Core.IconRocket>
        </Core.GdsFlex>
      </Core.GdsCard>

      <Core.GdsCard
        variant="secondary"
        grid-column="11 / 15"
        grid-row="4 / 4"
        height="100%"
        data-name="spinner"
        position="relative"
        align-items="center"
        justify-content="center"
      >
        <Core.GdsSpinner size="sm" />
      </Core.GdsCard>
    </Core.GdsGrid>
  )
}
