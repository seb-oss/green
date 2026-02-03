import{h as t}from"./iframe-uFM-9jO7.js";import"./link-CByc6KoE.js";import"./popover-BfTZvTVu.js";import"./flex-DogaCPPn.js";import"./card--tQoBkji.js";import"./text-BF7Svg2b.js";import"./divider-Dm3b636I.js";import"./magnifying-glass-BgRQPZ2K.js";import"./star-CztlgTPi.js";import"./arrow-right-Y-Lxlgpa.js";import"./chain-link-D5XUbbS6.js";import{a as i}from"./argTableProps-BmNmGI9b.js";import"./link.component-Cb7xa1AJ.js";import"./props-link-svM2xwRm.js";import"./popover.component-DayMdRIy.js";import"./localized-decorator-D2lbi3u2.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-_sEEpKeU.js";import"./icon.component-Bdewz2mt.js";import"./flex.component-DwjWo8Me.js";import"./card.component-DDHYM_lm.js";import"./default-typography.styles-BQ3GHWCQ.js";import"./divider.component-D-Ps4vXw.js";import"./magnifying-glass.component-ABoDnomC.js";import"./star.component-1j30IB8y.js";import"./arrow-right.component-BuK9da_y.js";const A={title:"Components/Link",component:"gds-link",parameters:{layout:"centered",docs:{description:{component:"A link navigates users to other pages or sections of content."}}},tags:["autodocs"],argTypes:{...i("gds-link")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{href:"#",innerHTML:"Link text"}},B={...e},P={...e,name:"Icon: Lead",render:()=>t` <gds-link href="#">
      <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
      Link text
    </gds-link>`},_={...e,name:"Icon: Trail",render:()=>t` <gds-link href="#">
      Link text
      <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
    </gds-link>`},C={...e,name:"Text Decoration",render:()=>t`
    <gds-flex gap="4xl" width="600px" flex-direction="column">
      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline"> Link text </gds-link>
        </gds-flex>
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link without Underline</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="none"> Link text </gds-link>
        </gds-flex>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with Underline on Hover and Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#">
            Link text
            <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
          </gds-link>
        </gds-flex>

        <gds-flex flex-direction="column" gap="m" flex="1">
          <gds-text tag="small">Link with No Underline on Hover</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
          <gds-link href="#" text-decoration="underline; hover:none">
            Link text
          </gds-link>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},E={...e,name:"Label",render:()=>t`
    <gds-link href="#" label="Aria label is used">
      Link with aria-label
    </gds-link>
  `},F=["Basic","Lead","Trail","TextDecoration","Label"];export{B as Basic,E as Label,P as Lead,C as TextDecoration,_ as Trail,F as __namedExportsOrder,A as default};
