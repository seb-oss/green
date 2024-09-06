import{h as b}from"./gds-element-24e794df.js";import"./popover-38537494.js";import"./backdrop-3ac2ea4c.js";import"./button-b98d16b0.js";import"./grouped-list-0ff7c454.js";import"./chevron-bottom-27e6f9ff.js";import"./flex-35f93ae3.js";import"./card-d5e076ec.js";import"./menu-button-4a58263e.js";import"./lit-element-2a5e401f.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./class-map-43969d56.js";import"./directive-12249aa5.js";import"./lit-localize-87611c26.js";import"./floating-ui.dom-373c8bf6.js";import"./watch-c4961afe.js";import"./transitional-styles-3f5f5b40.js";import"./cross-small-d60aea14.js";import"./icon-9eb1b5fc.js";import"./static-50b4adfb.js";import"./when-cf7256a5.js";import"./if-defined-39fa3d49.js";import"./constrain-slots-08d8606c.js";import"./form-control-0ab31465.js";import"./tokens.style-cc0690e8.js";import"./style-expression-property-45d22dc5.js";const L={title:"Docs/Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a transient view that appears above other content. It is used by components such as dropdowns."}}},tags:["autodocs"]},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},o={...g},e={...g,render:()=>b`<gds-container width="700px" height="250px"><gds-card
        display="flex"
        width="720px"
        border="0 0 4xs/base300 0"
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
        border="0 0 4xs/base300 0"
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};const j=["Usage","Customization"];export{e as Customization,o as Usage,j as __namedExportsOrder,L as default};
