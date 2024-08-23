import"./grid-ace174c8.js";import"./flex-e89cef7f.js";import{x as h}from"./lit-element-52f3de9a.js";import"./gds-element-d19a6729.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-4c028ad8.js";import"./style-expression-property-7d970320.js";import"./watch-c4961afe.js";const Z={title:"Docs/Components/Icon",component:"gds-icon-bank",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-icon-*` component is a flexible set of icon components. These allows you to use a variety of pre-defined icons in your application.\n\n### Usage\n\nJust like other components, the icons can be imported indivually, so that you don't end up with unused icons in your bundle:\n\n```js\nimport '@sebgroup/green-core/components/icon/icons/bank.js'\n```"}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...d,args:{solid:!1,width:24,height:24}};window.addEventListener("click",o=>{const s=o.target;if(s.tagName.startsWith("GDS-ICON")){const n=s.outerHTML.replace(/ gds-element="[^"]*"/,"");navigator.clipboard.writeText(n),s.classList.add("copied"),setTimeout(()=>s.classList.remove("copied"),642)}});window.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("icon-search"),s=Array.from(document.querySelectorAll('#solids [gds-element^="gds-icon-"]'));o.addEventListener("keyup",()=>{const n=o.value.toLowerCase();s.forEach(c=>{const i=c.getAttribute("gds-element");if(i){const g=i.toLowerCase().replace("gds-icon-","");u(n,g)||o.value.trim()===""?c.removeAttribute("hidden"):c.setAttribute("hidden","")}})});function u(n,c){let i=0,g=0;for(;i<n.length&&g<c.length;)n.charAt(i)===c.charAt(g)&&i++,g++;return i===n.length}});const e={...d,name:"Regular icons",render:o=>h`
    <gds-flex direction="column" gap="xl" id="solids">
      <input type="text" id="icon-search" placeholder="Search Icons" />
      <gds-grid
        columns="s{2} m{4} l{4}"
        gap="s{xl} m{xl} l{xl}"
        class="icon-preview"
      >
        <gds-icon-airplane-up></gds-icon-airplane-up>
        <gds-icon-apple-music></gds-icon-apple-music>
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
        <gds-icon-bankid></gds-icon-bankid>
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
        <gds-icon-chrome></gds-icon-chrome>
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
        <gds-icon-cloudy-sun></gds-icon-cloudy-sun>
        <gds-icon-compass-round></gds-icon-compass-round>
        <gds-icon-credit-card></gds-icon-credit-card>
        <gds-icon-cross-large></gds-icon-cross-large>
        <gds-icon-cross-small></gds-icon-cross-small>
        <gds-icon-cup-hot></gds-icon-cup-hot>
        <gds-icon-devices></gds-icon-devices>
        <gds-icon-direction></gds-icon-direction>
        <gds-icon-dollar></gds-icon-dollar>
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
        <gds-icon-dot-grid-three></gds-icon-dot-grid-three>
        <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
        <gds-icon-email></gds-icon-email>
        <gds-icon-euro></gds-icon-euro>
        <gds-icon-facebook></gds-icon-facebook>
        <gds-icon-fashion></gds-icon-fashion>
        <gds-icon-figma></gds-icon-figma>
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
        <gds-icon-github></gds-icon-github>
        <gds-icon-globus></gds-icon-globus>
        <gds-icon-graduate-cap></gds-icon-graduate-cap>
        <gds-icon-green></gds-icon-green>
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
        <gds-icon-instagram></gds-icon-instagram>
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
        <gds-icon-linkedin></gds-icon-linkedin>
        <gds-icon-lock></gds-icon-lock>
        <gds-icon-macbook-air></gds-icon-macbook-air>
        <gds-icon-magnifying-glass></gds-icon-magnifying-glass>
        <gds-icon-maintenance></gds-icon-maintenance>
        <gds-icon-map-pin></gds-icon-map-pin>
        <gds-icon-megaphone></gds-icon-megaphone>
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
        <gds-icon-rainy></gds-icon-rainy>
        <gds-icon-raising-hand></gds-icon-raising-hand>
        <gds-icon-reading-list></gds-icon-reading-list>
        <gds-icon-receipt-bill></gds-icon-receipt-bill>
        <gds-icon-receiption-bell></gds-icon-receiption-bell>
        <gds-icon-robot></gds-icon-robot>
        <gds-icon-rocket></gds-icon-rocket>
        <gds-icon-rss-feed></gds-icon-rss-feed>
        <gds-icon-school></gds-icon-school>
        <gds-icon-scissors></gds-icon-scissors>
        <gds-icon-search-menu></gds-icon-search-menu>
        <gds-icon-seb></gds-icon-seb>
        <gds-icon-settings-gear></gds-icon-settings-gear>
        <gds-icon-settings-slider-hor></gds-icon-settings-slider-hor>
        <gds-icon-settings-slider-three></gds-icon-settings-slider-three>
        <gds-icon-settings-slider-ver></gds-icon-settings-slider-ver>
        <gds-icon-share></gds-icon-share>
        <gds-icon-shopping-bag></gds-icon-shopping-bag>
        <gds-icon-smartwatch></gds-icon-smartwatch>
        <gds-icon-solar-panel></gds-icon-solar-panel>
        <gds-icon-solar></gds-icon-solar>
        <gds-icon-spotify></gds-icon-spotify>
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
        <gds-icon-twitter></gds-icon-twitter>
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
    </gds-flex>
  `},r={...d,name:"Solid icons",render:o=>h`
    <gds-grid
      columns="s{2} m{4} l{4}"
      gap="s{xl} m{xl} l{xl}"
      class="icon-preview"
    >
      <gds-icon-airplane-up solid></gds-icon-airplane-up>
      <gds-icon-apple-music solid></gds-icon-apple-music>
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
    </gds-grid>
  `},a={...d,name:"Brands",render:o=>h`
    <gds-grid
      columns="s{2} m{4} l{4}"
      gap="s{xl} m{xl} l{xl}"
      class="icon-preview"
    >
      <gds-icon-green></gds-icon-green>
      <gds-icon-seb></gds-icon-seb>
      <gds-icon-apple-music></gds-icon-apple-music>
      <gds-icon-bankid></gds-icon-bankid>
      <gds-icon-chrome></gds-icon-chrome>
      <gds-icon-facebook></gds-icon-facebook>
      <gds-icon-figma></gds-icon-figma>
      <gds-icon-github></gds-icon-github>
      <gds-icon-instagram></gds-icon-instagram>
      <gds-icon-linkedin></gds-icon-linkedin>
      <gds-icon-rss-feed></gds-icon-rss-feed>
      <gds-icon-spotify></gds-icon-spotify>
      <gds-icon-twitter></gds-icon-twitter>
    </gds-grid>
  `},t={...d,name:"Sizing",render:o=>h`
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
  `},l={...d,name:"Accessible Label",render:o=>h`<gds-icon-rocket label="Rocket" />`};var b,m,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    solid: false,
    width: 24,
    height: 24
  }
}`,...(w=(m=p.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var f,k,v,y,x;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Regular icons',
  render: args => html\`
    <gds-flex direction="column" gap="xl" id="solids">
      <input type="text" id="icon-search" placeholder="Search Icons" />
      <gds-grid
        columns="s{2} m{4} l{4}"
        gap="s{xl} m{xl} l{xl}"
        class="icon-preview"
      >
        <gds-icon-airplane-up></gds-icon-airplane-up>
        <gds-icon-apple-music></gds-icon-apple-music>
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
        <gds-icon-bankid></gds-icon-bankid>
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
        <gds-icon-chrome></gds-icon-chrome>
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
        <gds-icon-cloudy-sun></gds-icon-cloudy-sun>
        <gds-icon-compass-round></gds-icon-compass-round>
        <gds-icon-credit-card></gds-icon-credit-card>
        <gds-icon-cross-large></gds-icon-cross-large>
        <gds-icon-cross-small></gds-icon-cross-small>
        <gds-icon-cup-hot></gds-icon-cup-hot>
        <gds-icon-devices></gds-icon-devices>
        <gds-icon-direction></gds-icon-direction>
        <gds-icon-dollar></gds-icon-dollar>
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
        <gds-icon-dot-grid-three></gds-icon-dot-grid-three>
        <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
        <gds-icon-email></gds-icon-email>
        <gds-icon-euro></gds-icon-euro>
        <gds-icon-facebook></gds-icon-facebook>
        <gds-icon-fashion></gds-icon-fashion>
        <gds-icon-figma></gds-icon-figma>
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
        <gds-icon-github></gds-icon-github>
        <gds-icon-globus></gds-icon-globus>
        <gds-icon-graduate-cap></gds-icon-graduate-cap>
        <gds-icon-green></gds-icon-green>
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
        <gds-icon-instagram></gds-icon-instagram>
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
        <gds-icon-linkedin></gds-icon-linkedin>
        <gds-icon-lock></gds-icon-lock>
        <gds-icon-macbook-air></gds-icon-macbook-air>
        <gds-icon-magnifying-glass></gds-icon-magnifying-glass>
        <gds-icon-maintenance></gds-icon-maintenance>
        <gds-icon-map-pin></gds-icon-map-pin>
        <gds-icon-megaphone></gds-icon-megaphone>
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
        <gds-icon-rainy></gds-icon-rainy>
        <gds-icon-raising-hand></gds-icon-raising-hand>
        <gds-icon-reading-list></gds-icon-reading-list>
        <gds-icon-receipt-bill></gds-icon-receipt-bill>
        <gds-icon-receiption-bell></gds-icon-receiption-bell>
        <gds-icon-robot></gds-icon-robot>
        <gds-icon-rocket></gds-icon-rocket>
        <gds-icon-rss-feed></gds-icon-rss-feed>
        <gds-icon-school></gds-icon-school>
        <gds-icon-scissors></gds-icon-scissors>
        <gds-icon-search-menu></gds-icon-search-menu>
        <gds-icon-seb></gds-icon-seb>
        <gds-icon-settings-gear></gds-icon-settings-gear>
        <gds-icon-settings-slider-hor></gds-icon-settings-slider-hor>
        <gds-icon-settings-slider-three></gds-icon-settings-slider-three>
        <gds-icon-settings-slider-ver></gds-icon-settings-slider-ver>
        <gds-icon-share></gds-icon-share>
        <gds-icon-shopping-bag></gds-icon-shopping-bag>
        <gds-icon-smartwatch></gds-icon-smartwatch>
        <gds-icon-solar-panel></gds-icon-solar-panel>
        <gds-icon-solar></gds-icon-solar>
        <gds-icon-spotify></gds-icon-spotify>
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
        <gds-icon-twitter></gds-icon-twitter>
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
    </gds-flex>
  \`
}`,...(v=(k=e.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:"Click to copy icon HTML code",...(x=(y=e.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var q,z,S,I,L;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Solid icons',
  render: args => html\`
    <gds-grid
      columns="s{2} m{4} l{4}"
      gap="s{xl} m{xl} l{xl}"
      class="icon-preview"
    >
      <gds-icon-airplane-up solid></gds-icon-airplane-up>
      <gds-icon-apple-music solid></gds-icon-apple-music>
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
    </gds-grid>
  \`
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source},description:{story:"Icons are available in solid versions. You can use the `solid` attribute to display the solid version of the icon.\n\nHere is an example of some solid icons:",...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};var T,A,D,B,M;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Brands',
  render: args => html\`
    <gds-grid
      columns="s{2} m{4} l{4}"
      gap="s{xl} m{xl} l{xl}"
      class="icon-preview"
    >
      <gds-icon-green></gds-icon-green>
      <gds-icon-seb></gds-icon-seb>
      <gds-icon-apple-music></gds-icon-apple-music>
      <gds-icon-bankid></gds-icon-bankid>
      <gds-icon-chrome></gds-icon-chrome>
      <gds-icon-facebook></gds-icon-facebook>
      <gds-icon-figma></gds-icon-figma>
      <gds-icon-github></gds-icon-github>
      <gds-icon-instagram></gds-icon-instagram>
      <gds-icon-linkedin></gds-icon-linkedin>
      <gds-icon-rss-feed></gds-icon-rss-feed>
      <gds-icon-spotify></gds-icon-spotify>
      <gds-icon-twitter></gds-icon-twitter>
    </gds-grid>
  \`
}`,...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"The icon package has the following brand icons available:",...(M=(B=a.parameters)==null?void 0:B.docs)==null?void 0:M.description}}};var P,C,E,H,R;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Sizing',
  render: args => html\`
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
  \`
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"You can customize the icons by setting the `width` and `height` properties. If not specified it will fall back to `1lh` height and `auto` width.",...(R=(H=t.parameters)==null?void 0:H.docs)==null?void 0:R.description}}};var N,O,Y,_,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accessible Label',
  render: args => html\`<gds-icon-rocket label="Rocket" />\`
}`,...(Y=(O=l.parameters)==null?void 0:O.docs)==null?void 0:Y.source},description:{story:"Icons have the role of `graphics-symbol`, and will by default have the icon name as label. You can customize the label by setting the `label` attribute.",...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};const $=["Basic","IconsRegular","IconsSolid","Brands","IconsSize","IconsLabel"];export{p as Basic,a as Brands,l as IconsLabel,e as IconsRegular,t as IconsSize,r as IconsSolid,$ as __namedExportsOrder,Z as default};
