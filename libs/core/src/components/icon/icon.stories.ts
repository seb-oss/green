import type { Meta, StoryObj } from '@storybook/web-components'
import './icons/index.ts'
import '../layout/grid/index.ts'
import '../layout/container/index.ts'
import { html } from 'lit'
import './icon.stories.css'
/**
 * The `gds-icon-*` component is a flexible set of icon components. These allows you to use a variety of pre-defined icons in your application.
 *
 * ### Usage
 *
 * Just like other components, the icons can be imported indivually, so that you don't end up with unused icons in your bundle:
 *
 * ```js
 * import '@sebgroup/green-core/components/icon/icons/bank.js'
 * ```
 */
const meta: Meta = {
  title: 'Docs/Components/Icon',
  component: 'gds-icon-bank',
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

export const Basic: Story = {
  ...DefaultParams,
  args: {
    solid: false,
    width: 24,
    height: 24,
  },
}

/**
 * Icons are available in regular versions. You can use the `solid` attribute to display the solid version of the icon.
 */

window.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (target.tagName.startsWith('GDS-ICON')) {
    const outerHTML = target.outerHTML
    const cleanedHTML = outerHTML.replace(/ gds-element="[^"]*"/, '')
    navigator.clipboard.writeText(cleanedHTML)
    target.classList.add('copied')
    setTimeout(() => target.classList.remove('copied'), 2000)
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.getElementById('icon-search') as HTMLInputElement
  const icons = Array.from(
    document.querySelectorAll('[gds-element^="gds-icon-"]'),
  )

  searchBox.addEventListener('keyup', () => {
    const searchTerm = searchBox.value.toLowerCase().split(' ')

    icons.forEach((icon) => {
      const iconNameAttr = icon.getAttribute('gds-element')
      if (iconNameAttr) {
        const iconName = iconNameAttr
          .toLowerCase()
          .replace('gds-icon-', '')
          .split('-')
        const isMatch = searchTerm.every((term) => iconName.includes(term))

        if (isMatch || searchBox.value.trim() === '') {
          icon.removeAttribute('hidden')
        } else {
          icon.setAttribute('hidden', '')
        }
      }
    })
  })
})

/**
 * Click to copy icon HTML code
 */

export const IconsRegular: Story = {
  ...DefaultParams,
  name: 'Regular icons',
  render: (args) => html`
    <gds-container display="flex" direction="column" gap="xl">
      <input type="text" id="icon-search" placeholder="Search Icons" />
      <gds-grid
        columns="s{2} m{4} l{4}"
        gap="s{xl} m{xl} l{xl}"
        class="icon-preview"
      >
        <gds-icon-airplane-up></gds-icon-airplane-up>
        <gds-icon-archive></gds-icon-archive>
        <gds-icon-arrow-box-left></gds-icon-arrow-box-left>
        <gds-icon-arrow-box-right></gds-icon-arrow-box-right>
        <gds-icon-arrow-down></gds-icon-arrow-down>
        <gds-icon-arrow-inbox></gds-icon-arrow-inbox>
        <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
        <gds-icon-arrow-left></gds-icon-arrow-left>
        <gds-icon-arrow-out-of-box></gds-icon-arrow-out-of-box>
        <gds-icon-arrow-right-circle></gds-icon-arrow-right-circle>
        <gds-icon-arrow-right-down-circle></gds-icon-arrow-right-down-circle>
        <gds-icon-arrow-right-up-circle></gds-icon-arrow-right-up-circle>
        <gds-icon-arrow-right></gds-icon-arrow-right>
        <gds-icon-arrow-rotate-clockwise></gds-icon-arrow-rotate-clockwise>
        <gds-icon-arrow-rotate-counter-clockwise></gds-icon-arrow-rotate-counter-clockwise>
        <gds-icon-arrow-rotate-left-right></gds-icon-arrow-rotate-left-right>
        <gds-icon-arrow-rotate-right-left></gds-icon-arrow-rotate-right-left>
        <gds-icon-arrow-share-left></gds-icon-arrow-share-left>
        <gds-icon-arrow-share-right></gds-icon-arrow-share-right>
        <gds-icon-arrow-up></gds-icon-arrow-up>
        <gds-icon-arrow-wall-down></gds-icon-arrow-wall-down>
        <gds-icon-arrow-wall-left></gds-icon-arrow-wall-left>
        <gds-icon-arrow-wall-right></gds-icon-arrow-wall-right>
        <gds-icon-arrow-wall-up></gds-icon-arrow-wall-up>
        <gds-icon-arrow></gds-icon-arrow>
        <gds-icon-arrows-repeat></gds-icon-arrows-repeat>
        <gds-icon-at></gds-icon-at>
        <gds-icon-bag></gds-icon-bag>
        <gds-icon-bank></gds-icon-bank>
        <gds-icon-banknote></gds-icon-banknote>
        <gds-icon-barcode></gds-icon-barcode>
        <gds-icon-bars-three></gds-icon-bars-three>
        <gds-icon-bars-two></gds-icon-bars-two>
        <gds-icon-battery-loading></gds-icon-battery-loading>
        <gds-icon-bell></gds-icon-bell>
        <gds-icon-block></gds-icon-block>
        <gds-icon-book></gds-icon-book>
        <gds-icon-bookmark-check></gds-icon-bookmark-check>
        <gds-icon-bookmark-delete></gds-icon-bookmark-delete>
        <gds-icon-bookmark-plus></gds-icon-bookmark-plus>
        <gds-icon-bookmark-remove></gds-icon-bookmark-remove>
        <gds-icon-bookmark></gds-icon-bookmark>
        <gds-icon-books></gds-icon-books>
        <gds-icon-brush></gds-icon-brush>
        <gds-icon-bubble-annotation></gds-icon-bubble-annotation>
        <gds-icon-bubble-dots></gds-icon-bubble-dots>
        <gds-icon-bubble-question></gds-icon-bubble-question>
        <gds-icon-bubble-quotes></gds-icon-bubble-quotes>
        <gds-icon-bubble-text></gds-icon-bubble-text>
        <gds-icon-bubble-wide-annotation></gds-icon-bubble-wide-annotation>
        <gds-icon-bubble></gds-icon-bubble>
        <gds-icon-bubbles></gds-icon-bubbles>
        <gds-icon-buildings></gds-icon-buildings>
        <gds-icon-cain-link></gds-icon-cain-link>
        <gds-icon-calculator></gds-icon-calculator>
        <gds-icon-calendar-check></gds-icon-calendar-check>
        <gds-icon-calendar></gds-icon-calendar>
        <gds-icon-calender-add></gds-icon-calender-add>
        <gds-icon-call></gds-icon-call>
        <gds-icon-car></gds-icon-car>
        <gds-icon-charging-station></gds-icon-charging-station>
        <gds-icon-chart-one></gds-icon-chart-one>
        <gds-icon-chart-presentation></gds-icon-chart-presentation>
        <gds-icon-chart-two></gds-icon-chart-two>
        <gds-icon-checklist></gds-icon-checklist>
        <gds-icon-checkmark></gds-icon-checkmark>
        <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        <gds-icon-chevron-double-down></gds-icon-chevron-double-down>
        <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
        <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
        <gds-icon-chevron-double-up></gds-icon-chevron-double-up>
        <gds-icon-chevron-grabber-vertical></gds-icon-chevron-grabber-vertical>
        <gds-icon-chevron-left></gds-icon-chevron-left>
        <gds-icon-chevron-right></gds-icon-chevron-right>
        <gds-icon-chevron-top></gds-icon-chevron-top>
        <gds-icon-circle-check></gds-icon-circle-check>
        <gds-icon-circle-info></gds-icon-circle-info>
        <gds-icon-circle-minus></gds-icon-circle-minus>
        <gds-icon-circle-placeholder-on></gds-icon-circle-placeholder-on>
        <gds-icon-circle-plus></gds-icon-circle-plus>
        <gds-icon-circle-questionmark></gds-icon-circle-questionmark>
        <gds-icon-circle-x></gds-icon-circle-x>
        <gds-icon-circles-three></gds-icon-circles-three>
        <gds-icon-clock></gds-icon-clock>
        <gds-icon-cloud-upload></gds-icon-cloud-upload>
        <gds-icon-credit-card></gds-icon-credit-card>
        <gds-icon-cross-large></gds-icon-cross-large>
        <gds-icon-cross-small></gds-icon-cross-small>
        <gds-icon-devices></gds-icon-devices>
        <gds-icon-direction></gds-icon-direction>
        <gds-icon-dollar></gds-icon-dollar>
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
        <gds-icon-dot-grid-three></gds-icon-dot-grid-three>
        <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
        <gds-icon-email></gds-icon-email>
        <gds-icon-euro></gds-icon-euro>
        <gds-icon-fashion></gds-icon-fashion>
        <gds-icon-file-bend></gds-icon-file-bend>
        <gds-icon-file-chart></gds-icon-file-chart>
        <gds-icon-file-text></gds-icon-file-text>
        <gds-icon-files></gds-icon-files>
        <gds-icon-filter></gds-icon-filter>
        <gds-icon-flag></gds-icon-flag>
        <gds-icon-floppy-disk></gds-icon-floppy-disk>
        <gds-icon-focus-square></gds-icon-focus-square>
        <gds-icon-focus></gds-icon-focus>
        <gds-icon-folder-add-right></gds-icon-folder-add-right>
        <gds-icon-folder-paper></gds-icon-folder-paper>
        <gds-icon-folder-upload></gds-icon-folder-upload>
        <gds-icon-folder></gds-icon-folder>
        <gds-icon-globus></gds-icon-globus>
        <gds-icon-graduate-cap></gds-icon-graduate-cap>
        <gds-icon-group></gds-icon-group>
        <gds-icon-growth></gds-icon-growth>
        <gds-icon-headphones></gds-icon-headphones>
        <gds-icon-heart-beat></gds-icon-heart-beat>
        <gds-icon-heart></gds-icon-heart>
        <gds-icon-history></gds-icon-history>
        <gds-icon-home-energy-one></gds-icon-home-energy-one>
        <gds-icon-home-energy-two></gds-icon-home-energy-two>
        <gds-icon-home-open></gds-icon-home-open>
        <gds-icon-home-roof></gds-icon-home-roof>
        <gds-icon-horizontal-alignment-bottom></gds-icon-horizontal-alignment-bottom>
        <gds-icon-images></gds-icon-images>
        <gds-icon-invite></gds-icon-invite>
        <gds-icon-knife-spoon></gds-icon-knife-spoon>
        <gds-icon-law></gds-icon-law>
        <gds-icon-light-bulb-simple></gds-icon-light-bulb-simple>
        <gds-icon-light-bulb></gds-icon-light-bulb>
        <gds-icon-lightning></gds-icon-lightning>
        <gds-icon-line-chart-four></gds-icon-line-chart-four>
        <gds-icon-line-chart-one></gds-icon-line-chart-one>
        <gds-icon-line-chart-three></gds-icon-line-chart-three>
        <gds-icon-line-chart-two></gds-icon-line-chart-two>
        <gds-icon-lock></gds-icon-lock>
        <gds-icon-macbook-air></gds-icon-macbook-air>
        <gds-icon-magnifying-glass></gds-icon-magnifying-glass>
        <gds-icon-map-pin></gds-icon-map-pin>
        <gds-icon-minus-large></gds-icon-minus-large>
        <gds-icon-minus-small></gds-icon-minus-small>
        <gds-icon-money-hand></gds-icon-money-hand>
        <gds-icon-moneybag></gds-icon-moneybag>
        <gds-icon-moon></gds-icon-moon>
        <gds-icon-mute></gds-icon-mute>
        <gds-icon-page-text></gds-icon-page-text>
        <gds-icon-paperclip></gds-icon-paperclip>
        <gds-icon-pencel-line></gds-icon-pencel-line>
        <gds-icon-pencil-sparkle></gds-icon-pencil-sparkle>
        <gds-icon-pencil-wave></gds-icon-pencil-wave>
        <gds-icon-people-add></gds-icon-people-add>
        <gds-icon-people-added></gds-icon-people-added>
        <gds-icon-people-circle></gds-icon-people-circle>
        <gds-icon-people-copy></gds-icon-people-copy>
        <gds-icon-people-remove></gds-icon-people-remove>
        <gds-icon-people></gds-icon-people>
        <gds-icon-percent></gds-icon-percent>
        <gds-icon-phone-dynamic-island></gds-icon-phone-dynamic-island>
        <gds-icon-phone></gds-icon-phone>
        <gds-icon-pie-chart></gds-icon-pie-chart>
        <gds-icon-piggy-bank></gds-icon-piggy-bank>
        <gds-icon-pin></gds-icon-pin>
        <gds-icon-pinch></gds-icon-pinch>
        <gds-icon-play-circle></gds-icon-play-circle>
        <gds-icon-play></gds-icon-play>
        <gds-icon-plus-large></gds-icon-plus-large>
        <gds-icon-plus-small></gds-icon-plus-small>
        <gds-icon-poop></gds-icon-poop>
        <gds-icon-power-plant></gds-icon-power-plant>
        <gds-icon-printer></gds-icon-printer>
        <gds-icon-push></gds-icon-push>
        <gds-icon-qr-code></gds-icon-qr-code>
        <gds-icon-raising-hand></gds-icon-raising-hand>
        <gds-icon-reading-list></gds-icon-reading-list>
        <gds-icon-receipt-bill></gds-icon-receipt-bill>
        <gds-icon-receiption-bell></gds-icon-receiption-bell>
        <gds-icon-robot></gds-icon-robot>
        <gds-icon-rocket></gds-icon-rocket>
        <gds-icon-school></gds-icon-school>
        <gds-icon-scissors></gds-icon-scissors>
        <gds-icon-search-menu></gds-icon-search-menu>
        <gds-icon-settings-gear></gds-icon-settings-gear>
        <gds-icon-settings-slider-hor></gds-icon-settings-slider-hor>
        <gds-icon-settings-slider-three></gds-icon-settings-slider-three>
        <gds-icon-settings-slider-ver></gds-icon-settings-slider-ver>
        <gds-icon-share></gds-icon-share>
        <gds-icon-shopping-bag></gds-icon-shopping-bag>
        <gds-icon-smartwatch></gds-icon-smartwatch>
        <gds-icon-solar-panel></gds-icon-solar-panel>
        <gds-icon-solar></gds-icon-solar>
        <gds-icon-square-arrow-top-right></gds-icon-square-arrow-top-right>
        <gds-icon-square-behind-square></gds-icon-square-behind-square>
        <gds-icon-square-check></gds-icon-square-check>
        <gds-icon-square-grid-circle></gds-icon-square-grid-circle>
        <gds-icon-square-info></gds-icon-square-info>
        <gds-icon-square-minus></gds-icon-square-minus>
        <gds-icon-square-placeholder></gds-icon-square-placeholder>
        <gds-icon-square-plus></gds-icon-square-plus>
        <gds-icon-square-x></gds-icon-square-x>
        <gds-icon-star></gds-icon-star>
        <gds-icon-store></gds-icon-store>
        <gds-icon-suitcase-work></gds-icon-suitcase-work>
        <gds-icon-sun></gds-icon-sun>
        <gds-icon-tag></gds-icon-tag>
        <gds-icon-television></gds-icon-television>
        <gds-icon-tennis></gds-icon-tennis>
        <gds-icon-text-edit></gds-icon-text-edit>
        <gds-icon-thermostat></gds-icon-thermostat>
        <gds-icon-thumbs-down></gds-icon-thumbs-down>
        <gds-icon-thumbs-up></gds-icon-thumbs-up>
        <gds-icon-todos></gds-icon-todos>
        <gds-icon-trading-view-candles></gds-icon-trading-view-candles>
        <gds-icon-trash-can></gds-icon-trash-can>
        <gds-icon-tree></gds-icon-tree>
        <gds-icon-trending-four></gds-icon-trending-four>
        <gds-icon-trending-one></gds-icon-trending-one>
        <gds-icon-trending-three></gds-icon-trending-three>
        <gds-icon-trending-two></gds-icon-trending-two>
        <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
        <gds-icon-truck></gds-icon-truck>
        <gds-icon-umbrella-security></gds-icon-umbrella-security>
        <gds-icon-unlocked></gds-icon-unlocked>
        <gds-icon-vertical-alignment-right></gds-icon-vertical-alignment-right>
        <gds-icon-volume-full></gds-icon-volume-full>
        <gds-icon-volume-half></gds-icon-volume-half>
        <gds-icon-volume-off></gds-icon-volume-off>
        <gds-icon-wallet></gds-icon-wallet>
        <gds-icon-warning-sign></gds-icon-warning-sign>
        <gds-icon-zap></gds-icon-zap>
        <gds-icon-zoom-in></gds-icon-zoom-in>
        <gds-icon-zoom-out></gds-icon-zoom-out>
      </gds-grid>
    </gds-container>
  `,
}

/**
 * Icons are available in solid versions. You can use the `solid` attribute to display the solid version of the icon.
 *
 * * Click to copy icon HTML code
 */

export const IconsSolid: Story = {
  ...DefaultParams,
  name: 'Solid icons',
  render: (args) => html`
    <gds-grid
      columns="s{2} m{4} l{4}"
      gap="s{xl} m{xl} l{xl}"
      class="icon-preview"
    >
      <gds-icon-airplane-up solid></gds-icon-airplane-up>
      <gds-icon-archive solid></gds-icon-archive>
      <gds-icon-arrow-box-left solid></gds-icon-arrow-box-left>
      <gds-icon-arrow-box-right solid></gds-icon-arrow-box-right>
      <gds-icon-arrow-down solid></gds-icon-arrow-down>
      <gds-icon-arrow-inbox solid></gds-icon-arrow-inbox>
      <gds-icon-arrow-left-right solid></gds-icon-arrow-left-right>
      <gds-icon-arrow-left solid></gds-icon-arrow-left>
      <gds-icon-arrow-out-of-box solid></gds-icon-arrow-out-of-box>
      <gds-icon-arrow-right-circle solid></gds-icon-arrow-right-circle>
      <gds-icon-arrow-right-down-circle
        solid
      ></gds-icon-arrow-right-down-circle>
      <gds-icon-arrow-right-up-circle solid></gds-icon-arrow-right-up-circle>
      <gds-icon-arrow-right solid></gds-icon-arrow-right>
      <gds-icon-arrow-rotate-clockwise solid></gds-icon-arrow-rotate-clockwise>
      <gds-icon-arrow-rotate-counter-clockwise
        solid
      ></gds-icon-arrow-rotate-counter-clockwise>
      <gds-icon-arrow-rotate-left-right
        solid
      ></gds-icon-arrow-rotate-left-right>
      <gds-icon-arrow-rotate-right-left
        solid
      ></gds-icon-arrow-rotate-right-left>
      <gds-icon-arrow-share-left solid></gds-icon-arrow-share-left>
      <gds-icon-arrow-share-right solid></gds-icon-arrow-share-right>
      <gds-icon-arrow-up solid></gds-icon-arrow-up>
      <gds-icon-arrow-wall-down solid></gds-icon-arrow-wall-down>
      <gds-icon-arrow-wall-left solid></gds-icon-arrow-wall-left>
      <gds-icon-arrow-wall-right solid></gds-icon-arrow-wall-right>
      <gds-icon-arrow-wall-up solid></gds-icon-arrow-wall-up>
      <gds-icon-arrow solid></gds-icon-arrow>
      <gds-icon-arrows-repeat solid></gds-icon-arrows-repeat>
      <gds-icon-at solid></gds-icon-at>
      <gds-icon-bag solid></gds-icon-bag>
      <gds-icon-bank solid></gds-icon-bank>
      <gds-icon-banknote solid></gds-icon-banknote>
      <gds-icon-barcode solid></gds-icon-barcode>
      <gds-icon-bars-three solid></gds-icon-bars-three>
      <gds-icon-bars-two solid></gds-icon-bars-two>
      <gds-icon-battery-loading solid></gds-icon-battery-loading>
      <gds-icon-bell solid></gds-icon-bell>
      <gds-icon-block solid></gds-icon-block>
      <gds-icon-book solid></gds-icon-book>
      <gds-icon-bookmark-check solid></gds-icon-bookmark-check>
      <gds-icon-bookmark-delete solid></gds-icon-bookmark-delete>
      <gds-icon-bookmark-plus solid></gds-icon-bookmark-plus>
      <gds-icon-bookmark-remove solid></gds-icon-bookmark-remove>
      <gds-icon-bookmark solid></gds-icon-bookmark>
      <gds-icon-books solid></gds-icon-books>
      <gds-icon-brush solid></gds-icon-brush>
      <gds-icon-bubble-annotation solid></gds-icon-bubble-annotation>
      <gds-icon-bubble-dots solid></gds-icon-bubble-dots>
      <gds-icon-bubble-question solid></gds-icon-bubble-question>
      <gds-icon-bubble-quotes solid></gds-icon-bubble-quotes>
      <gds-icon-bubble-text solid></gds-icon-bubble-text>
      <gds-icon-bubble-wide-annotation solid></gds-icon-bubble-wide-annotation>
      <gds-icon-bubble solid></gds-icon-bubble>
      <gds-icon-bubbles solid></gds-icon-bubbles>
      <gds-icon-buildings solid></gds-icon-buildings>
      <gds-icon-cain-link solid></gds-icon-cain-link>
      <gds-icon-calculator solid></gds-icon-calculator>
      <gds-icon-calendar-check solid></gds-icon-calendar-check>
      <gds-icon-calendar solid></gds-icon-calendar>
      <gds-icon-calender-add solid></gds-icon-calender-add>
      <gds-icon-call solid></gds-icon-call>
      <gds-icon-car solid></gds-icon-car>
      <gds-icon-charging-station solid></gds-icon-charging-station>
      <gds-icon-chart-one solid></gds-icon-chart-one>
      <gds-icon-chart-presentation solid></gds-icon-chart-presentation>
      <gds-icon-chart-two solid></gds-icon-chart-two>
      <gds-icon-checklist solid></gds-icon-checklist>
      <gds-icon-checkmark solid></gds-icon-checkmark>
      <gds-icon-chevron-bottom solid></gds-icon-chevron-bottom>
      <gds-icon-chevron-double-down solid></gds-icon-chevron-double-down>
      <gds-icon-chevron-double-left solid></gds-icon-chevron-double-left>
      <gds-icon-chevron-double-right solid></gds-icon-chevron-double-right>
      <gds-icon-chevron-double-up solid></gds-icon-chevron-double-up>
      <gds-icon-chevron-grabber-vertical
        solid
      ></gds-icon-chevron-grabber-vertical>
      <gds-icon-chevron-left solid></gds-icon-chevron-left>
      <gds-icon-chevron-right solid></gds-icon-chevron-right>
      <gds-icon-chevron-top solid></gds-icon-chevron-top>
      <gds-icon-circle-check solid></gds-icon-circle-check>
      <gds-icon-circle-info solid></gds-icon-circle-info>
      <gds-icon-circle-minus solid></gds-icon-circle-minus>
      <gds-icon-circle-placeholder-on solid></gds-icon-circle-placeholder-on>
      <gds-icon-circle-plus solid></gds-icon-circle-plus>
      <gds-icon-circle-questionmark solid></gds-icon-circle-questionmark>
      <gds-icon-circle-x solid></gds-icon-circle-x>
      <gds-icon-circles-three solid></gds-icon-circles-three>
      <gds-icon-clock solid></gds-icon-clock>
      <gds-icon-cloud-upload solid></gds-icon-cloud-upload>
      <gds-icon-credit-card solid></gds-icon-credit-card>
      <gds-icon-cross-large solid></gds-icon-cross-large>
      <gds-icon-cross-small solid></gds-icon-cross-small>
      <gds-icon-devices solid></gds-icon-devices>
      <gds-icon-direction solid></gds-icon-direction>
      <gds-icon-dollar solid></gds-icon-dollar>
      <gds-icon-dot-grid-one-horizontal
        solid
      ></gds-icon-dot-grid-one-horizontal>
      <gds-icon-dot-grid-one-vertical solid></gds-icon-dot-grid-one-vertical>
      <gds-icon-dot-grid-three solid></gds-icon-dot-grid-three>
      <gds-icon-dot-grid-two solid></gds-icon-dot-grid-two>
      <gds-icon-email solid></gds-icon-email>
      <gds-icon-euro solid></gds-icon-euro>
      <gds-icon-fashion solid></gds-icon-fashion>
      <gds-icon-file-bend solid></gds-icon-file-bend>
      <gds-icon-file-chart solid></gds-icon-file-chart>
      <gds-icon-file-text solid></gds-icon-file-text>
      <gds-icon-files solid></gds-icon-files>
      <gds-icon-filter solid></gds-icon-filter>
      <gds-icon-flag solid></gds-icon-flag>
      <gds-icon-floppy-disk solid></gds-icon-floppy-disk>
      <gds-icon-focus-square solid></gds-icon-focus-square>
      <gds-icon-focus solid></gds-icon-focus>
      <gds-icon-folder-add-right solid></gds-icon-folder-add-right>
      <gds-icon-folder-paper solid></gds-icon-folder-paper>
      <gds-icon-folder-upload solid></gds-icon-folder-upload>
      <gds-icon-folder solid></gds-icon-folder>
      <gds-icon-globus solid></gds-icon-globus>
      <gds-icon-graduate-cap solid></gds-icon-graduate-cap>
      <gds-icon-group solid></gds-icon-group>
      <gds-icon-growth solid></gds-icon-growth>
      <gds-icon-headphones solid></gds-icon-headphones>
      <gds-icon-heart-beat solid></gds-icon-heart-beat>
      <gds-icon-heart solid></gds-icon-heart>
      <gds-icon-history solid></gds-icon-history>
      <gds-icon-home-energy-one solid></gds-icon-home-energy-one>
      <gds-icon-home-energy-two solid></gds-icon-home-energy-two>
      <gds-icon-home-open solid></gds-icon-home-open>
      <gds-icon-home-roof solid></gds-icon-home-roof>
      <gds-icon-horizontal-alignment-bottom
        solid
      ></gds-icon-horizontal-alignment-bottom>
      <gds-icon-images solid></gds-icon-images>
      <gds-icon-invite solid></gds-icon-invite>
      <gds-icon-knife-spoon solid></gds-icon-knife-spoon>
      <gds-icon-law solid></gds-icon-law>
      <gds-icon-light-bulb-simple solid></gds-icon-light-bulb-simple>
      <gds-icon-light-bulb solid></gds-icon-light-bulb>
      <gds-icon-lightning solid></gds-icon-lightning>
      <gds-icon-line-chart-four solid></gds-icon-line-chart-four>
      <gds-icon-line-chart-one solid></gds-icon-line-chart-one>
      <gds-icon-line-chart-three solid></gds-icon-line-chart-three>
      <gds-icon-line-chart-two solid></gds-icon-line-chart-two>
      <gds-icon-lock solid></gds-icon-lock>
      <gds-icon-macbook-air solid></gds-icon-macbook-air>
      <gds-icon-magnifying-glass solid></gds-icon-magnifying-glass>
      <gds-icon-map-pin solid></gds-icon-map-pin>
      <gds-icon-minus-large solid></gds-icon-minus-large>
      <gds-icon-minus-small solid></gds-icon-minus-small>
      <gds-icon-money-hand solid></gds-icon-money-hand>
      <gds-icon-moneybag solid></gds-icon-moneybag>
      <gds-icon-moon solid></gds-icon-moon>
      <gds-icon-mute solid></gds-icon-mute>
      <gds-icon-page-text solid></gds-icon-page-text>
      <gds-icon-paperclip solid></gds-icon-paperclip>
      <gds-icon-pencel-line solid></gds-icon-pencel-line>
      <gds-icon-pencil-sparkle solid></gds-icon-pencil-sparkle>
      <gds-icon-pencil-wave solid></gds-icon-pencil-wave>
      <gds-icon-people-add solid></gds-icon-people-add>
      <gds-icon-people-added solid></gds-icon-people-added>
      <gds-icon-people-circle solid></gds-icon-people-circle>
      <gds-icon-people-copy solid></gds-icon-people-copy>
      <gds-icon-people-remove solid></gds-icon-people-remove>
      <gds-icon-people solid></gds-icon-people>
      <gds-icon-percent solid></gds-icon-percent>
      <gds-icon-phone-dynamic-island solid></gds-icon-phone-dynamic-island>
      <gds-icon-phone solid></gds-icon-phone>
      <gds-icon-pie-chart solid></gds-icon-pie-chart>
      <gds-icon-piggy-bank solid></gds-icon-piggy-bank>
      <gds-icon-pin solid></gds-icon-pin>
      <gds-icon-pinch solid></gds-icon-pinch>
      <gds-icon-play-circle solid></gds-icon-play-circle>
      <gds-icon-play solid></gds-icon-play>
      <gds-icon-plus-large solid></gds-icon-plus-large>
      <gds-icon-plus-small solid></gds-icon-plus-small>
      <gds-icon-poop solid></gds-icon-poop>
      <gds-icon-power-plant solid></gds-icon-power-plant>
      <gds-icon-printer solid></gds-icon-printer>
      <gds-icon-push solid></gds-icon-push>
      <gds-icon-qr-code solid></gds-icon-qr-code>
      <gds-icon-raising-hand solid></gds-icon-raising-hand>
      <gds-icon-reading-list solid></gds-icon-reading-list>
      <gds-icon-receipt-bill solid></gds-icon-receipt-bill>
      <gds-icon-receiption-bell solid></gds-icon-receiption-bell>
      <gds-icon-robot solid></gds-icon-robot>
      <gds-icon-rocket solid></gds-icon-rocket>
      <gds-icon-school solid></gds-icon-school>
      <gds-icon-scissors solid></gds-icon-scissors>
      <gds-icon-search-menu solid></gds-icon-search-menu>
      <gds-icon-settings-gear solid></gds-icon-settings-gear>
      <gds-icon-settings-slider-hor solid></gds-icon-settings-slider-hor>
      <gds-icon-settings-slider-three solid></gds-icon-settings-slider-three>
      <gds-icon-settings-slider-ver solid></gds-icon-settings-slider-ver>
      <gds-icon-share solid></gds-icon-share>
      <gds-icon-shopping-bag solid></gds-icon-shopping-bag>
      <gds-icon-smartwatch solid></gds-icon-smartwatch>
      <gds-icon-solar-panel solid></gds-icon-solar-panel>
      <gds-icon-solar solid></gds-icon-solar>
      <gds-icon-square-arrow-top-right solid></gds-icon-square-arrow-top-right>
      <gds-icon-square-behind-square solid></gds-icon-square-behind-square>
      <gds-icon-square-check solid></gds-icon-square-check>
      <gds-icon-square-grid-circle solid></gds-icon-square-grid-circle>
      <gds-icon-square-info solid></gds-icon-square-info>
      <gds-icon-square-minus solid></gds-icon-square-minus>
      <gds-icon-square-placeholder solid></gds-icon-square-placeholder>
      <gds-icon-square-plus solid></gds-icon-square-plus>
      <gds-icon-square-x solid></gds-icon-square-x>
      <gds-icon-star solid></gds-icon-star>
      <gds-icon-store solid></gds-icon-store>
      <gds-icon-suitcase-work solid></gds-icon-suitcase-work>
      <gds-icon-sun solid></gds-icon-sun>
      <gds-icon-tag solid></gds-icon-tag>
      <gds-icon-television solid></gds-icon-television>
      <gds-icon-tennis solid></gds-icon-tennis>
      <gds-icon-text-edit solid></gds-icon-text-edit>
      <gds-icon-thermostat solid></gds-icon-thermostat>
      <gds-icon-thumbs-down solid></gds-icon-thumbs-down>
      <gds-icon-thumbs-up solid></gds-icon-thumbs-up>
      <gds-icon-todos solid></gds-icon-todos>
      <gds-icon-trading-view-candles solid></gds-icon-trading-view-candles>
      <gds-icon-trash-can solid></gds-icon-trash-can>
      <gds-icon-tree solid></gds-icon-tree>
      <gds-icon-trending-four solid></gds-icon-trending-four>
      <gds-icon-trending-one solid></gds-icon-trending-one>
      <gds-icon-trending-three solid></gds-icon-trending-three>
      <gds-icon-trending-two solid></gds-icon-trending-two>
      <gds-icon-triangle-exclamation solid></gds-icon-triangle-exclamation>
      <gds-icon-truck solid></gds-icon-truck>
      <gds-icon-umbrella-security solid></gds-icon-umbrella-security>
      <gds-icon-unlocked solid></gds-icon-unlocked>
      <gds-icon-vertical-alignment-right
        solid
      ></gds-icon-vertical-alignment-right>
      <gds-icon-volume-full solid></gds-icon-volume-full>
      <gds-icon-volume-half solid></gds-icon-volume-half>
      <gds-icon-volume-off solid></gds-icon-volume-off>
      <gds-icon-wallet solid></gds-icon-wallet>
      <gds-icon-warning-sign solid></gds-icon-warning-sign>
      <gds-icon-zap solid></gds-icon-zap>
      <gds-icon-zoom-in solid></gds-icon-zoom-in>
      <gds-icon-zoom-out solid></gds-icon-zoom-out>
    </gds-grid>
  `,
}

/**
 * You can customize the icons by setting the `width` and `height` properties. If not specified it will fall back to `1lh` height and `auto` width.
 */

export const IconsSize: Story = {
  ...DefaultParams,
  name: 'Sizing',
  render: (args) => html`
    <gds-icon-robot width="84" height="84"></gds-icon-robot>
    <gds-icon-rocket width="84" height="84"></gds-icon-rocket>
    <gds-icon-school width="84" height="84"></gds-icon-school>
    <gds-icon-settings-gear width="84" height="84"></gds-icon-settings-gear>
    <gds-icon-settings-slider-hor
      width="84"
      height="84"
    ></gds-icon-settings-slider-hor>
    <gds-icon-settings-slider-three
      width="84"
      height="84"
    ></gds-icon-settings-slider-three>
    <gds-icon-settings-slider-ver
      width="84"
      height="84"
    ></gds-icon-settings-slider-ver>
  `,
}

/**
 * Icons have the role of `graphics-symbol`, and will by default have the icon name as label. You can customize the label by setting the `label` attribute.
 */

export const IconsLabel: Story = {
  ...DefaultParams,
  name: 'Accessible Label',
  render: (args) => html`<gds-icon-rocket label="Rocket" />`,
}
