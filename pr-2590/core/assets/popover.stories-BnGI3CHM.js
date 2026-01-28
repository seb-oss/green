import{a as r}from"./argTableProps-BbAB0xrA.js";import{h as e}from"./iframe-heokNkxx.js";import"./popover-ZEYqSD-u.js";import"./backdrop-DZIjxeg7.js";import"./list-item-CLyHC78r.js";import"./chevron-bottom-Dp6zy9at.js";import"./flex-Dt4RAh_7.js";import"./card-BqqNJDXw.js";import"./menu-button-BiDZ5-Rg.js";import"./popover.component-DXU3GBtd.js";import"./localized-decorator-DxZVosJk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CBd3YNHE.js";import"./icon.component-BO162m1G.js";import"./grouped-list.component-zAQ4AQ4d.js";import"./chevron-bottom.component-fqgE78x0.js";import"./flex.component-Dj4N-Nht.js";import"./card.component-Bjon-NZW.js";import"./menu-button.component-H63oyMva.js";const C={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a temporary view that appears above other content."}}},tags:["autodocs"],argTypes:{...r("gds-popover")}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},z={...t},S={...t,render:()=>e` <gds-popover
      id="cancellable"
      @gds-ui-state=${o=>o.detail.reason==="close"&&o.preventDefault()}
    >
      <gds-button rank="secondary" slot="trigger">
        Show popover
        <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
      </gds-button>
      <div style="padding: 1rem; padding-top: 0">
        <h3>Customized closing behavior</h3>
        <p>
          This popover can only be closed by click the button below or hitting
          escape.
        </p>
        <gds-button
          rank="primary"
          @click=${()=>{document.getElementById("cancellable").open=!1}}
          >Close me!</gds-button
        >
      </div>
    </gds-popover>`},T={...t,render:()=>e`
    <gds-popover disableScrollClose>
      <gds-button rank="secondary" slot="trigger">
        Open popover
        <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
      </gds-button>
      <gds-flex padding="xl">
        This popover will stay open when you scroll the page!
      </gds-flex>
    </gds-popover>
  `},I={...t,render:()=>e`<gds-div width="700px" height="250px">
      <gds-card
        variant="secondary"
        width="720px"
        border="4xs"
        border-width="0 0 4xs"
        border-radius="0"
        padding="0"
        position="fixed"
        flex-direction="row"
        inset="0 auto auto 0"
        z-index="1000"
      >
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            Basic popover
          </gds-menu-button compact>
          <div style="padding: 1rem;">Basic popover</div>
        </gds-popover>
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{fn:({y:o})=>({x:25,y:o+8})}]} .calcMaxWidth=${()=>"670px"}>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            With custom backdrop and positioning middleware
          </gds-menu-button>
          <div style="padding: 0 1rem;">
            <h3>Customized popover</h3>
            <p>In this popover, we're using custom Floating UI middleware to control the positioning, and <i>calcMaxWidth</i> to set the size.</p>
            <p>We're also using a backdrop element, referenced by the <i>backdrop</i> attribute, to dim the background below the menu bar.</p>
          </div>
        </gds-popover>
    </gds-card>
    <gds-backdrop id="my-backdrop"></gds-backdrop>
</gds-div>`},M=["Usage","CancelEvent","DisableScrollClose","Customization"];export{S as CancelEvent,I as Customization,T as DisableScrollClose,z as Usage,M as __namedExportsOrder,C as default};
