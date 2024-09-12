import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mask'
import '../card'
import '../flex'
import '../container'
import '../../media/img'
import '../../media/video'
import '../../content/text'
import '../../content/divider'
import '../../icon/icons/arrow-down.js'
import '../../icon/icons/arrow-right.js'
import '../../icon/icons/circles-three.js'
/**
 *
 */
const meta: Meta = {
  title: 'Docs/Layout/Mask',
  component: 'gds-mask',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

export const Card: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="xs{1} m{3} l{2}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-flex display="flex" gap="0" direction="column" align="stretch">
          <gds-container position="relative">
            <gds-container>
              <gds-img
                src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
                ratio="1/1"
              ></gds-img>
              <gds-mask
                mask-image="top"
                background-color="l2-background-tertiary/0.9"
                backdrop-filter="blur(4px)"
                z-index="2"
                position="absolute"
                inset="50% 0 0 0"
              >
                <gds-container position="absolute" inset="auto 20px 20px auto">
                  <gds-button rank="secondary">
                    <gds-icon-arrow-down></gds-icon-arrow-down>
                  </gds-button>
                </gds-container>
              </gds-mask>
            </gds-container>
          </gds-container>
          <gds-flex
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
            gap="l"
          >
            <gds-flex gap="s" direction="column">
              <gds-text tag="h2" size="body-l">James Doe</gds-text>
              <gds-text tag="p">
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card radius="m" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            fit="cover"
            ratio="1/1"
            events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask
            mask-image="top"
            background-color="l2-background-tertiary/0.4"
            backdrop-filter="blur(4px)"
            position="absolute"
          >
            <gds-flex
              direction="column"
              justify="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
              width="100%"
              color="l2-content-tertiary"
            >
              <gds-container>
                <gds-text tag="h4" size="body-l">Jane Doe</gds-text>
                <gds-text tag="p" size="body-m">UX Designer</gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Message</gds-button>
                <gds-button rank="secondary">Follow</gds-button>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  `,
}
