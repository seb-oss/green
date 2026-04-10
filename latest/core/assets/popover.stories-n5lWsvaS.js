import{a as D}from"./argTableProps-B35avH1i.js";import{h as i}from"./iframe-BhBXWYpV.js";import"./popover-E-qMl8Gl.js";import"./backdrop-0LLd0FdN.js";import"./list-item-jcnd9P4X.js";import"./chevron-bottom-DW3ZqISO.js";import"./flex-DJbfbMKc.js";import"./card-BKUWI3Fo.js";import"./menu-button-H3mawSFL.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CCk-bb3B.js";import"./localized-decorator-a0D3Chmm.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./cross-small.component-dDuB6uW5.js";import"./icon.component-Cs4MsctY.js";import"./grouped-list.component-u7zGsJOw.js";import"./chevron-bottom.component-DieyWgt-.js";import"./flex.component-BoVuiBvi.js";import"./card.component-BZcJNlkI.js";import"./menu-button.component-C75k-crx.js";const N={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a temporary view that appears above other content."}}},tags:["autodocs"],argTypes:{...D("gds-popover")}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},e={...s},o={...s,render:()=>i` <gds-popover
      id="cancellable"
      @gds-ui-state=${r=>r.detail.reason==="close"&&r.preventDefault()}
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
    </gds-popover>`},t={...s,render:()=>i`
    <gds-popover disableScrollClose>
      <gds-button rank="secondary" slot="trigger">
        Open popover
        <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
      </gds-button>
      <gds-flex padding="xl">
        This popover will stay open when you scroll the page!
      </gds-flex>
    </gds-popover>
  `},n={...s,render:()=>i`<gds-div width="700px" height="250px">
      <gds-card
        variant="neutral-02"
        width="720px"
        border="4xs"
        border-width="0 0 4xs"
        border-radius="0"
        padding="0"
        position="fixed"
        flex-direction="row"
        inset="0 auto auto 0"
        z-index="1000" outline
      >
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            Basic popover
          </gds-menu-button compact>
          <div style="padding: 1rem;">Basic popover</div>
        </gds-popover>
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{fn:({y:r})=>({x:25,y:r+8})}]} .calcMaxWidth=${()=>"670px"}>
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
</gds-div>`};var d,a,p,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var g,m,h,b,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"By default, the popover will close when clicking outside or hitting the escape key. This behavior can be customized by listening to the `gds-ui-state` event and calling `preventDefault()` on the event object when the popover should not close.\n\nFor example:\n\n```html\n<gds-popover @gds-ui-state=${(e: CustomEvent) => e.detail.reason === 'close' && e.preventDefault()}>...</gds-popover>\n```\n\nThe state change reasons are:\n- `show`: The popover is being opened by the user by clicking the trigger.\n- `close`: The popover is being closed by the user by clicking outside.\n- `cancel`: The popover is being closed by the user by hitting the escape key.",...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.description}}};var v,y,w,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-popover disableScrollClose>
      <gds-button rank="secondary" slot="trigger">
        Open popover
        <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
      </gds-button>
      <gds-flex padding="xl">
        This popover will stay open when you scroll the page!
      </gds-flex>
    </gds-popover>
  \`
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:"By default, the popover closes when the page is scrolled (on desktop viewports wider than 767px).\nThis behavior can be disabled by setting the `disableScrollClose` property to `true`.",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var k,C,T,z,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-div width="700px" height="250px">
      <gds-card
        variant="neutral-02"
        width="720px"
        border="4xs"
        border-width="0 0 4xs"
        border-radius="0"
        padding="0"
        position="fixed"
        flex-direction="row"
        inset="0 auto auto 0"
        z-index="1000" outline
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
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};const Q=["Usage","CancelEvent","DisableScrollClose","Customization"];export{o as CancelEvent,n as Customization,t as DisableScrollClose,e as Usage,Q as __namedExportsOrder,N as default};
