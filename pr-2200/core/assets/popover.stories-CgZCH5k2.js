import{a as f}from"./argTableProps-DIQ_Vc0p.js";import{h as w}from"./gds-element-DKcDvDP5.js";import"./popover-BBLM5Rv4.js";import"./backdrop-DlRfOXOV.js";import"./button-BQq6yv7d.js";import"./list-item-Dcy_KzmV.js";import"./chevron-bottom-FOEFDR9h.js";import"./flex-6YMVJR_L.js";import"./card-B-1jOFPW.js";import"./menu-button-BeLGVywH.js";import"./custom-elements-2UMgSn1e.js";import"./lit-element-Bx14lxc-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./popover.component-2Azy5OjP.js";import"./runtime-CNluP0A8.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-BiORlPgX.js";import"./tokens.style-Khpz0lp_.js";import"./watch-tFciLXSI.js";import"./cross-small.component-CF8Pyq63.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./button.component-CP7I7SJN.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./grouped-list.component-BUC6FI2S.js";import"./chevron-bottom.component-B8Nj_Ub-.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";import"./card.component-UD91Xhmi.js";import"./menu-button.component-BEguu0G2.js";const ie={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a temporary view that appears above other content."}}},tags:["autodocs"],argTypes:{...f("gds-popover")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},e={...r},o={...r,render:()=>w` <gds-popover
      id="cancellable"
      @gds-ui-state=${n=>n.detail.reason==="close"&&n.preventDefault()}
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
    </gds-popover>`},t={...r,render:()=>w`<gds-div width="700px" height="250px">
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
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{fn:({y:n})=>({x:25,y:n+8})}]} .calcMaxWidth=${()=>"670px"}>
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
</gds-div>`};var i,s,d,a,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.description}}};var c,m,g,l,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\` <gds-popover
      id="cancellable"
      @gds-ui-state=\${(e: CustomEvent) => e.detail.reason === 'close' && e.preventDefault()}
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
          @click=\${() => {
    ;
    (document.getElementById('cancellable') as GdsPopover).open = false;
  }}
          >Close me!</gds-button
        >
      </div>
    </gds-popover>\`
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"By default, the popover will close when clicking outside or hitting the escape key. This behavior can be customized by listening to the `gds-ui-state` event and calling `preventDefault()` on the event object when the popover should not close.\n\nFor example:\n\n```html\n<gds-popover @gds-ui-state=${(e: CustomEvent) => e.detail.reason === 'close' && e.preventDefault()}>...</gds-popover>\n```\n\nThe state change reasons are:\n- `show`: The popover is being opened by the user by clicking the trigger.\n- `close`: The popover is being closed by the user by clicking outside.\n- `cancel`: The popover is being closed by the user by hitting the escape key.",...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.description}}};var b,u,v,y,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-div width="700px" height="250px">
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
</gds-div>\`
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};const se=["Usage","CancelEvent","Customization"];export{o as CancelEvent,t as Customization,e as Usage,se as __namedExportsOrder,ie as default};
