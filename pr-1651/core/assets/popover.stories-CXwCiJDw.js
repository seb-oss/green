import{h}from"./gds-element-RTlSuh_R.js";import"./popover-acoF-ckh.js";import"./backdrop-CljoM9rw.js";import"./button-Dkgv-c_f.js";import"./grouped-list-BRUVkj1g.js";import"./chevron-bottom-vJKcTK_L.js";import"./flex-CCRxyO1y.js";import"./card-BxdWtLu5.js";import"./menu-button-CcbmdgWC.js";import"./lit-element-BoQqPHl6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-BBGuaYF3.js";import"./directive-Ctav8iJK.js";import"./runtime-CMQcyTl6.js";import"./floating-ui.dom-DaFISw-x.js";import"./watch-tFciLXSI.js";import"./transitional-styles-9whFD-yV.js";import"./cross-small-BgcbB_fi.js";import"./icon-jzQ8K1tO.js";import"./static-C_6dgFWo.js";import"./when-BxLAFfhK.js";import"./if-defined-OiR-h1RO.js";import"./tokens.style-DuOE18tp.js";import"./style-expression-property-Da3P080T.js";import"./container-BFF67yQR.js";const E={title:"Docs/Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a transient view that appears above other content. It is used by components such as dropdowns."}}},tags:["autodocs"]},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},o={...g},e={...g,render:()=>h`<gds-container width="700px" height="250px"><gds-card
        display="flex"
        width="720px"
        border="0 0 4xs/primary 0"
        position="fixed"
        background="base-white"
        style="left: 0; top: 0; z-index: 1000;"
      >
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            Basic popover
          </gds-menu-button compact>
          <div style="padding: 1rem;">Basic popover</div>
        </gds-popover>
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{fn:({y:l})=>({x:25,y:l+8})}]} .calcMaxWidth=${()=>"670px"}>
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
</gds-container>`};var t,r,n,i,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.description}}};var d,a,p,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-container width="700px" height="250px"><gds-card
        display="flex"
        width="720px"
        border="0 0 4xs/primary 0"
        position="fixed"
        background="base-white"
        style="left: 0; top: 0; z-index: 1000;"
      >
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            Basic popover
          </gds-menu-button compact>
          <div style="padding: 1rem;">Basic popover</div>
        </gds-popover>
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=\${[{
    fn: ({
      y
    }) => ({
      x: 25,
      y: y + 8
    })
  }]} .calcMaxWidth=\${() => '670px'}>
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
</gds-container>\`
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};const L=["Usage","Customization"];export{e as Customization,o as Usage,L as __namedExportsOrder,E as default};