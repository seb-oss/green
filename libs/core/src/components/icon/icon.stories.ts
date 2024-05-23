import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/icon/icons/index.js'
import { html } from 'lit'

/**
 * The `gds-icon` component is a flexible icon component. It allows you to use a variety of pre-defined icons in your application.
 *
 * Each icon can be customized with different properties:
 *
 * - `solid`: This is a boolean property. When set to true, the solid version of the icon is displayed. When set to false or not provided, the regular version of the icon is displayed.
 * - `width` and `height`: These properties allow you to set the dimensions of the icon. If not provided, the icon will use its default dimensions at 24x24.
 */

const meta: Meta = {
  title: 'Components/Icon',
  component: 'gds-icon-archive',
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
 * Regular Icons
 * Icons are available in regular versions. You can use the `solid` attribute to display the solid version of the icon.
 */

export const IconsRegular: Story = {
  ...DefaultParams,
  name: 'Regular',
  render: (args) => html`
    <gds-icon-archive></gds-icon-archive>
    <gds-icon-arrow-box-left></gds-icon-arrow-box-left>
    <gds-icon-arrow-box-right></gds-icon-arrow-box-right>
    <gds-icon-arrow-down></gds-icon-arrow-down>
    <gds-icon-arrow-inbox></gds-icon-arrow-inbox>
    <gds-icon-arrow-left></gds-icon-arrow-left>
    <gds-icon-arrow-out-of-box></gds-icon-arrow-out-of-box>
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
    <gds-icon-at></gds-icon-at>
    <gds-icon-bag></gds-icon-bag>
    <gds-icon-bank></gds-icon-bank>
    <gds-icon-barcode></gds-icon-barcode>
    <gds-icon-bars-three></gds-icon-bars-three>
    <gds-icon-bars-two></gds-icon-bars-two>
    <gds-icon-block></gds-icon-block>
    <gds-icon-book></gds-icon-book>
    <gds-icon-bookmark-check></gds-icon-bookmark-check>
    <gds-icon-bookmark-delete></gds-icon-bookmark-delete>
    <gds-icon-bookmark-plus></gds-icon-bookmark-plus>
    <gds-icon-bookmark-remove></gds-icon-bookmark-remove>
    <gds-icon-bookmark></gds-icon-bookmark>
    <gds-icon-bubble-annotation></gds-icon-bubble-annotation>
    <gds-icon-bubble-dots></gds-icon-bubble-dots>
    <gds-icon-bubble-text></gds-icon-bubble-text>
    <gds-icon-bubble-wide-annotation></gds-icon-bubble-wide-annotation>
    <gds-icon-bubble></gds-icon-bubble>
    <gds-icon-bubbles></gds-icon-bubbles>
    <gds-icon-buildings></gds-icon-buildings>
    <gds-icon-calculator></gds-icon-calculator>
    <gds-icon-call></gds-icon-call>
    <gds-icon-car></gds-icon-car>
    <gds-icon-chart-one></gds-icon-chart-one>
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
    <gds-icon-clock></gds-icon-clock>
    <gds-icon-cloud-upload></gds-icon-cloud-upload>
    <gds-icon-credit-card></gds-icon-credit-card>
    <gds-icon-cross-large></gds-icon-cross-large>
    <gds-icon-cross-small></gds-icon-cross-small>
    <gds-icon-devices></gds-icon-devices>
    <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
    <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
    <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
    <gds-icon-email></gds-icon-email>
    <gds-icon-file-bend></gds-icon-file-bend>
    <gds-icon-file-text></gds-icon-file-text>
    <gds-icon-files></gds-icon-files>
    <gds-icon-filter></gds-icon-filter>
    <gds-icon-flag></gds-icon-flag>
    <gds-icon-floppy-disk></gds-icon-floppy-disk>
    <gds-icon-focus></gds-icon-focus>
    <gds-icon-folder-add-right></gds-icon-folder-add-right>
    <gds-icon-folder-upload></gds-icon-folder-upload>
    <gds-icon-folder></gds-icon-folder>
    <gds-icon-globus></gds-icon-globus>
    <gds-icon-group></gds-icon-group>
    <gds-icon-growth></gds-icon-growth>
    <gds-icon-heart-beat></gds-icon-heart-beat>
    <gds-icon-heart></gds-icon-heart>
    <gds-icon-history></gds-icon-history>
    <gds-icon-home-open></gds-icon-home-open>
    <gds-icon-home-roof></gds-icon-home-roof>
    <gds-icon-horizontal-alignment-bottom></gds-icon-horizontal-alignment-bottom>
    <gds-icon-invite></gds-icon-invite>
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
    <gds-icon-moon></gds-icon-moon>
    <gds-icon-mute></gds-icon-mute>
    <gds-icon-page-text></gds-icon-page-text>
    <gds-icon-paperclip></gds-icon-paperclip>
    <gds-icon-pencel-line></gds-icon-pencel-line>
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
    <gds-icon-play-circle></gds-icon-play-circle>
    <gds-icon-play></gds-icon-play>
    <gds-icon-plus-large></gds-icon-plus-large>
    <gds-icon-plus-small></gds-icon-plus-small>
    <gds-icon-power-plant></gds-icon-power-plant>
    <gds-icon-printer></gds-icon-printer>
    <gds-icon-push></gds-icon-push>
    <gds-icon-qr-code></gds-icon-qr-code>
    <gds-icon-robot></gds-icon-robot>
    <gds-icon-rocket></gds-icon-rocket>
    <gds-icon-school></gds-icon-school>
    <gds-icon-settings-gear></gds-icon-settings-gear>
    <gds-icon-settings-slider-hor></gds-icon-settings-slider-hor>
    <gds-icon-settings-slider-three></gds-icon-settings-slider-three>
    <gds-icon-settings-slider-ver></gds-icon-settings-slider-ver>
    <gds-icon-share></gds-icon-share>
    <gds-icon-smartwatch></gds-icon-smartwatch>
    <gds-icon-solar-panel></gds-icon-solar-panel>
    <gds-icon-square-arrow-top-right></gds-icon-square-arrow-top-right>
    <gds-icon-square-check></gds-icon-square-check>
    <gds-icon-square-info></gds-icon-square-info>
    <gds-icon-square-minus></gds-icon-square-minus>
    <gds-icon-square-placeholder></gds-icon-square-placeholder>
    <gds-icon-square-plus></gds-icon-square-plus>
    <gds-icon-square-x></gds-icon-square-x>
    <gds-icon-star></gds-icon-star>
    <gds-icon-suitcase-work></gds-icon-suitcase-work>
    <gds-icon-tag></gds-icon-tag>
    <gds-icon-television></gds-icon-television>
    <gds-icon-text-edit></gds-icon-text-edit>
    <gds-icon-thumbs-down></gds-icon-thumbs-down>
    <gds-icon-thumbs-up></gds-icon-thumbs-up>
    <gds-icon-trash-can></gds-icon-trash-can>
    <gds-icon-trending-four></gds-icon-trending-four>
    <gds-icon-trending-one></gds-icon-trending-one>
    <gds-icon-trending-three></gds-icon-trending-three>
    <gds-icon-trending-two></gds-icon-trending-two>
    <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
    <gds-icon-unlocked></gds-icon-unlocked>
    <gds-icon-vertical-alignment-right></gds-icon-vertical-alignment-right>
    <gds-icon-volume-full></gds-icon-volume-full>
    <gds-icon-volume-half></gds-icon-volume-half>
    <gds-icon-volume-off></gds-icon-volume-off>
    <gds-icon-wallet></gds-icon-wallet>
    <gds-icon-zap></gds-icon-zap>
    <gds-icon-zoom-in></gds-icon-zoom-in>
    <gds-icon-zoom-out></gds-icon-zoom-out>
  `,
}

/**
 * Solid Icons
 *
 * Icons are available in solid versions. You can use the `solid` attribute to display the solid version of the icon.
 */
export const IconsSolid: Story = {
  ...DefaultParams,
  name: 'Solid',
  render: (args) => html`
    <gds-icon-archive solid></gds-icon-archive>
    <gds-icon-arrow-box-left solid></gds-icon-arrow-box-left>
    <gds-icon-arrow-box-right solid></gds-icon-arrow-box-right>
    <gds-icon-arrow-down solid></gds-icon-arrow-down>
    <gds-icon-arrow-inbox solid></gds-icon-arrow-inbox>
    <gds-icon-arrow-left solid></gds-icon-arrow-left>
    <gds-icon-arrow-out-of-box solid></gds-icon-arrow-out-of-box>
    <gds-icon-arrow-right-down-circle solid></gds-icon-arrow-right-down-circle>
    <gds-icon-arrow-right-up-circle solid></gds-icon-arrow-right-up-circle>
    <gds-icon-arrow-right solid></gds-icon-arrow-right>
    <gds-icon-arrow-rotate-clockwise solid></gds-icon-arrow-rotate-clockwise>
    <gds-icon-arrow-rotate-counter-clockwise
      solid
    ></gds-icon-arrow-rotate-counter-clockwise>
    <gds-icon-arrow-rotate-left-right solid></gds-icon-arrow-rotate-left-right>
    <gds-icon-arrow-rotate-right-left solid></gds-icon-arrow-rotate-right-left>
    <gds-icon-arrow-share-left solid></gds-icon-arrow-share-left>
    <gds-icon-arrow-share-right solid></gds-icon-arrow-share-right>
    <gds-icon-arrow-up solid></gds-icon-arrow-up>
    <gds-icon-arrow-wall-down solid></gds-icon-arrow-wall-down>
    <gds-icon-arrow-wall-left solid></gds-icon-arrow-wall-left>
    <gds-icon-arrow-wall-right solid></gds-icon-arrow-wall-right>
    <gds-icon-arrow-wall-up solid></gds-icon-arrow-wall-up>
    <gds-icon-at solid></gds-icon-at>
    <gds-icon-bag solid></gds-icon-bag>
    <gds-icon-bank solid></gds-icon-bank>
    <gds-icon-barcode solid></gds-icon-barcode>
    <gds-icon-bars-three solid></gds-icon-bars-three>
    <gds-icon-bars-two solid></gds-icon-bars-two>
    <gds-icon-block solid></gds-icon-block>
    <gds-icon-book solid></gds-icon-book>
    <gds-icon-bookmark-check solid></gds-icon-bookmark-check>
    <gds-icon-bookmark-delete solid></gds-icon-bookmark-delete>
    <gds-icon-bookmark-plus solid></gds-icon-bookmark-plus>
    <gds-icon-bookmark-remove solid></gds-icon-bookmark-remove>
    <gds-icon-bookmark solid></gds-icon-bookmark>
    <gds-icon-bubble-annotation solid></gds-icon-bubble-annotation>
    <gds-icon-bubble-dots solid></gds-icon-bubble-dots>
    <gds-icon-bubble-text solid></gds-icon-bubble-text>
    <gds-icon-bubble-wide-annotation solid></gds-icon-bubble-wide-annotation>
    <gds-icon-bubble solid></gds-icon-bubble>
    <gds-icon-bubbles solid></gds-icon-bubbles>
    <gds-icon-buildings solid></gds-icon-buildings>
    <gds-icon-calculator solid></gds-icon-calculator>
    <gds-icon-call solid></gds-icon-call>
    <gds-icon-car solid></gds-icon-car>
    <gds-icon-chart-one solid></gds-icon-chart-one>
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
    <gds-icon-clock solid></gds-icon-clock>
    <gds-icon-cloud-upload solid></gds-icon-cloud-upload>
    <gds-icon-credit-card solid></gds-icon-credit-card>
    <gds-icon-cross-large solid></gds-icon-cross-large>
    <gds-icon-cross-small solid></gds-icon-cross-small>
    <gds-icon-devices solid></gds-icon-devices>
    <gds-icon-dot-grid-one-horizontal solid></gds-icon-dot-grid-one-horizontal>
    <gds-icon-dot-grid-one-vertical solid></gds-icon-dot-grid-one-vertical>
    <gds-icon-dot-grid-two solid></gds-icon-dot-grid-two>
    <gds-icon-email solid></gds-icon-email>
    <gds-icon-file-bend solid></gds-icon-file-bend>
    <gds-icon-file-text solid></gds-icon-file-text>
    <gds-icon-files solid></gds-icon-files>
    <gds-icon-filter solid></gds-icon-filter>
    <gds-icon-flag solid></gds-icon-flag>
    <gds-icon-floppy-disk solid></gds-icon-floppy-disk>
    <gds-icon-focus solid></gds-icon-focus>
    <gds-icon-folder-add-right solid></gds-icon-folder-add-right>
    <gds-icon-folder-upload solid></gds-icon-folder-upload>
    <gds-icon-folder solid></gds-icon-folder>
    <gds-icon-globus solid></gds-icon-globus>
    <gds-icon-group solid></gds-icon-group>
    <gds-icon-growth solid></gds-icon-growth>
    <gds-icon-heart-beat solid></gds-icon-heart-beat>
    <gds-icon-heart solid></gds-icon-heart>
    <gds-icon-history solid></gds-icon-history>
    <gds-icon-home-open solid></gds-icon-home-open>
    <gds-icon-home-roof solid></gds-icon-home-roof>
    <gds-icon-horizontal-alignment-bottom
      solid
    ></gds-icon-horizontal-alignment-bottom>
    <gds-icon-invite solid></gds-icon-invite>
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
    <gds-icon-moon solid></gds-icon-moon>
    <gds-icon-mute solid></gds-icon-mute>
    <gds-icon-page-text solid></gds-icon-page-text>
    <gds-icon-paperclip solid></gds-icon-paperclip>
    <gds-icon-pencel-line solid></gds-icon-pencel-line>
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
    <gds-icon-play-circle solid></gds-icon-play-circle>
    <gds-icon-play solid></gds-icon-play>
    <gds-icon-plus-large solid></gds-icon-plus-large>
    <gds-icon-plus-small solid></gds-icon-plus-small>
    <gds-icon-power-plant solid></gds-icon-power-plant>
    <gds-icon-printer solid></gds-icon-printer>
    <gds-icon-push solid></gds-icon-push>
    <gds-icon-qr-code solid></gds-icon-qr-code>
    <gds-icon-robot solid></gds-icon-robot>
    <gds-icon-rocket solid></gds-icon-rocket>
    <gds-icon-school solid></gds-icon-school>
    <gds-icon-settings-gear solid></gds-icon-settings-gear>
    <gds-icon-settings-slider-hor solid></gds-icon-settings-slider-hor>
    <gds-icon-settings-slider-three solid></gds-icon-settings-slider-three>
    <gds-icon-settings-slider-ver solid></gds-icon-settings-slider-ver>
    <gds-icon-share solid></gds-icon-share>
    <gds-icon-smartwatch solid></gds-icon-smartwatch>
    <gds-icon-solar-panel solid></gds-icon-solar-panel>
    <gds-icon-square-arrow-top-right solid></gds-icon-square-arrow-top-right>
    <gds-icon-square-check solid></gds-icon-square-check>
    <gds-icon-square-info solid></gds-icon-square-info>
    <gds-icon-square-minus solid></gds-icon-square-minus>
    <gds-icon-square-placeholder solid></gds-icon-square-placeholder>
    <gds-icon-square-plus solid></gds-icon-square-plus>
    <gds-icon-square-x solid></gds-icon-square-x>
    <gds-icon-star solid></gds-icon-star>
    <gds-icon-suitcase-work solid></gds-icon-suitcase-work>
    <gds-icon-tag solid></gds-icon-tag>
    <gds-icon-television solid></gds-icon-television>
    <gds-icon-text-edit solid></gds-icon-text-edit>
    <gds-icon-thumbs-down solid></gds-icon-thumbs-down>
    <gds-icon-thumbs-up solid></gds-icon-thumbs-up>
    <gds-icon-trash-can solid></gds-icon-trash-can>
    <gds-icon-trending-four solid></gds-icon-trending-four>
    <gds-icon-trending-one solid></gds-icon-trending-one>
    <gds-icon-trending-three solid></gds-icon-trending-three>
    <gds-icon-trending-two solid></gds-icon-trending-two>
    <gds-icon-triangle-exclamation solid></gds-icon-triangle-exclamation>
    <gds-icon-unlocked solid></gds-icon-unlocked>
    <gds-icon-vertical-alignment-right
      solid
    ></gds-icon-vertical-alignment-right>
    <gds-icon-volume-full solid></gds-icon-volume-full>
    <gds-icon-volume-half solid></gds-icon-volume-half>
    <gds-icon-volume-off solid></gds-icon-volume-off>
    <gds-icon-wallet solid></gds-icon-wallet>
    <gds-icon-zap solid></gds-icon-zap>
    <gds-icon-zoom-in solid></gds-icon-zoom-in>
    <gds-icon-zoom-out solid></gds-icon-zoom-out>
  `,
}

/**
 * Sizing
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
 *Accesible Label
 *
 *You can set the `label` attribute to provide a label for the icon. This is useful for screen readers.
 */

export const IconsLabel: Story = {
  ...DefaultParams,
  name: 'Label',
  render: (args) => html`<gds-icon-rocket label="Rocket" />`,
}
