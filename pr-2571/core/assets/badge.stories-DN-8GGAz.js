import{x as a}from"./iframe-CIyCOr3z.js";import{a as r}from"./argTableProps-BBeIRQpF.js";import"./badge-DVOcLFZn.js";import"./flex-8tL0UkXf.js";import"./divider-BoU5QXAR.js";import"./triangle-exclamation-7Je1jp84.js";import"./circle-check-Cpcs8-G8.js";import"./arrow-rotate-counter-clockwise.component-BrmChZ-f.js";import"./minus-small-DlOXlaDZ.js";import"./rocket-11BVyXB_.js";import"./badge.component-CJE3gy-5.js";import"./flex.component-zzL_HQIe.js";import"./divider.component-Cc04zcGp.js";import"./triangle-exclamation.component-VkCnrAZF.js";import"./icon.component-BU7mvxId.js";import"./circle-check.component-ChlrhZ5N.js";import"./minus-small.component-D0pUzAgO.js";import"./rocket.component-eGGGbZt4.js";const L={title:"Components/Badge",component:"gds-badge",parameters:{layout:"centered",docs:{description:{component:'A compact visual indicator for status, counts and notifications.\n\nFeatures:\n- **Variants**: The badge supports multiple variants including `information`, `notice`, `positive`, `warning`, and `negative`, allowing for different contextual uses.\n- **Slots**: The badge includes a `lead` slot for adding leading content such as icons, enhancing the visual representation.\n- **Disabled State**: The badge can be disabled, making it non-interactive and visually indicating its disabled state.\n- **Size Control**: The badge size can be controlled via the `size` property, with options for `default` and `small`.\n\nExample usage:\n\n```html\n<gds-badge variant="positive">\n  <gds-icon-rocket slot="lead"></gds-icon-rocket>\n  Launch\n</gds-badge>\n```'}}},tags:["autodocs"],argTypes:{...r("gds-badge")}},D={name:"Variants",render:e=>a`
    <gds-flex
      flex-direction="column"
      justify-content="center"
      gap="4xl"
      padding="4xl"
    >
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Information
          </gds-badge>
          <gds-badge variant="notice">
            <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
            Notice
          </gds-badge>
          <gds-badge variant="positive">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Positive
          </gds-badge>
          <gds-badge variant="warning">
            <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
            Warning
          </gds-badge>
          <gds-badge variant="negative">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Negative
          </gds-badge>
          <gds-badge variant="disabled">
            <gds-icon-triangle-exclamation slot="lead">
            </gds-icon-triangle-exclamation>
            Disabled
          </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge variant="information"> Information </gds-badge>
          <gds-badge variant="notice"> Notice </gds-badge>
          <gds-badge variant="positive"> Positive </gds-badge>
          <gds-badge variant="warning"> Warning </gds-badge>
          <gds-badge variant="negative"> Negative </gds-badge>
          <gds-badge variant="disabled"> Disabled </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge size="small" variant="information"> 120 </gds-badge>
          <gds-badge size="small" variant="notice"> 428 </gds-badge>
          <gds-badge size="small" variant="positive"> 32 </gds-badge>
          <gds-badge size="small" variant="warning"> 602 </gds-badge>
          <gds-badge size="small" variant="negative"> 537 </gds-badge>
          <gds-badge size="small" variant="disabled"> 982 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Notification</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl" align-items="center">
          <gds-badge notification></gds-badge>
          <gds-badge notification>9</gds-badge>
          <gds-badge notification>999+</gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},R={name:"Lead",parameters:{controls:{include:[]}},render:e=>a`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead">
        </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `},V={name:"Trail",parameters:{controls:{include:[]}},render:e=>a`
    <gds-flex gap="xl">
      <gds-badge variant="positive">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        10,000.00
        <span slot="trail">SEK</span>
      </gds-badge>
      <gds-badge variant="negative">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        142.00
        <span slot="trail">EUR</span>
      </gds-badge>
    </gds-flex>
  `},C={name:"Size",render:e=>a`
    <gds-flex gap="4xl">
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">140</gds-badge>
        <gds-badge variant="notice" size="small">140</gds-badge>
        <gds-badge variant="positive" size="small">140</gds-badge>
        <gds-badge variant="warning" size="small">140</gds-badge>
        <gds-badge variant="negative" size="small">140</gds-badge>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl">
        <gds-badge variant="information" size="small">kr</gds-badge>
        <gds-badge variant="notice" size="small">kr</gds-badge>
        <gds-badge variant="positive" size="small">kr</gds-badge>
        <gds-badge variant="warning" size="small">kr</gds-badge>
        <gds-badge variant="negative" size="small">kr</gds-badge>
      </gds-flex>
    </gds-flex>
  `},A={name:"Notification",parameters:{actions:{handles:["mouseover","mouseout"]}},play:async()=>{document.querySelectorAll("gds-badge[notification]").forEach(e=>{let d;const t=()=>{var n;const g=((n=e.textContent)==null?void 0:n.trim())||"",s=g.replace(/\D/g,"");if(s&&!isNaN(Number(s))){const l=parseInt(s,10);let i=0;d=window.setInterval(()=>{e.textContent=i.toString()+g.replace(/\d/g,""),i===l?clearInterval(d):i++},50)}},o=()=>{d&&(clearInterval(d),d=void 0)};e.addEventListener("mouseover",t),e.addEventListener("mouseout",o)})},render:e=>a`
    <gds-flex gap="xl" align-items="center">
      <gds-badge notification></gds-badge>
      <gds-badge notification>9</gds-badge>
      <gds-badge notification>
        999
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-badge>
    </gds-flex>
  `},P={name:"Rounded",parameters:{},render:e=>a`
    <gds-flex gap="xl" flex-direction="column">
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Default</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded variant="information"> 01 </gds-badge>
          <gds-badge rounded variant="notice"> 02 </gds-badge>
          <gds-badge rounded variant="positive"> 03 </gds-badge>
          <gds-badge rounded variant="warning"> 04 </gds-badge>
          <gds-badge rounded variant="negative"> 05 </gds-badge>
          <gds-badge rounded variant="negative" disabled> 06 </gds-badge>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Rounded Small</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-flex gap="xl">
          <gds-badge rounded size="small" variant="information"> 01 </gds-badge>
          <gds-badge rounded size="small" variant="notice"> 02 </gds-badge>
          <gds-badge rounded size="small" variant="positive"> 03 </gds-badge>
          <gds-badge rounded size="small" variant="warning"> 04 </gds-badge>
          <gds-badge rounded size="small" variant="negative"> 05 </gds-badge>
          <gds-badge rounded size="small" variant="negative" disabled>
            06
          </gds-badge>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},B=["Variants","Lead","Trail","Size","Notification","Rounded"];export{R as Lead,A as Notification,P as Rounded,C as Size,V as Trail,D as Variants,B as __namedExportsOrder,L as default};
