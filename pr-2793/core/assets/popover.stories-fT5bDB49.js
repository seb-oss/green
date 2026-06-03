import{a as $}from"./argTableProps-B7YhgOTO.js";import{h as a}from"./iframe-DLBS5KYo.js";import"./popover-EizyV9yF.js";import"./backdrop-Bv7WxfyP.js";import"./list-item-DII3GqUi.js";import"./chevron-bottom-E7T2UEFJ.js";import"./flex-qtVQM3ca.js";import"./card-9hd9eUV0.js";import"./menu-button-BkBVtSKu.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-D683RYKu.js";import"./localized-decorator-mDoEP3ph.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./cross-small.component-_SGTWcXf.js";import"./icon.component-BCe4BYHY.js";import"./grouped-list.component-iqt1CxIv.js";import"./chevron-bottom.component-DXfYLJBc.js";import"./flex.component-JaFpVQ3G.js";import"./card.component-B0nggotg.js";import"./menu-button.component-BTRxw7i5.js";const ee={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a temporary view that appears above other content."}}},tags:["autodocs"],argTypes:{...$("gds-popover")}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},e={...s},o={...s,render:()=>a` <gds-popover
      id="cancellable"
      @gds-ui-state=${d=>d.detail.reason==="close"&&d.preventDefault()}
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
    </gds-popover>`},t={...s,render:()=>a`
    <gds-popover disableScrollClose>
      <gds-button rank="secondary" slot="trigger">
        Open popover
        <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
      </gds-button>
      <gds-flex padding="xl">
        This popover will stay open when you scroll the page!
      </gds-flex>
    </gds-popover>
  `},n={...s,render:()=>a`<gds-div width="700px" height="250px">
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
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{fn:({y:d})=>({x:25,y:d+8})}]} .calcMaxWidth=${()=>"670px"}>
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
</gds-div>`},r={...s,render:()=>a`
    <gds-flex flex-direction="column" gap="m">
      <gds-text id="popover-label" tag="label">Popover label</gds-text>
      <gds-text id="popover-desc" font-size="detail-s">
        Extra guidance for popover content.
      </gds-text>
      <gds-popover
        open
        gds-aria-labelledby="popover-label"
        gds-aria-describedby="popover-desc"
      >
        <gds-button rank="secondary" slot="trigger">
          Show popover
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-button>
        <gds-flex padding="m">Popover content</gds-flex>
      </gds-popover>
    </gds-flex>
  `};var i,p,c,l,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var m,b,h,u,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"By default, the popover will close when clicking outside or hitting the escape key. This behavior can be customized by listening to the `gds-ui-state` event and calling `preventDefault()` on the event object when the popover should not close.\n\nFor example:\n\n```html\n<gds-popover @gds-ui-state=${(e: CustomEvent) => e.detail.reason === 'close' && e.preventDefault()}>...</gds-popover>\n```\n\nThe state change reasons are:\n- `show`: The popover is being opened by the user by clicking the trigger.\n- `close`: The popover is being closed by the user by clicking outside.\n- `cancel`: The popover is being closed by the user by hitting the escape key.",...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};var y,x,f,w,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"By default, the popover closes when the page is scrolled (on desktop viewports wider than 767px).\nThis behavior can be disabled by setting the `disableScrollClose` property to `true`.",...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var C,S,T,z,D;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var I,P,E,M,W;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text id="popover-label" tag="label">Popover label</gds-text>
      <gds-text id="popover-desc" font-size="detail-s">
        Extra guidance for popover content.
      </gds-text>
      <gds-popover
        open
        gds-aria-labelledby="popover-label"
        gds-aria-describedby="popover-desc"
      >
        <gds-button rank="secondary" slot="trigger">
          Show popover
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-button>
        <gds-flex padding="m">Popover content</gds-flex>
      </gds-popover>
    </gds-flex>
  \`
}`,...(E=(P=r.parameters)==null?void 0:P.docs)==null?void 0:E.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<dialog>` element.",...(W=(M=r.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};const oe=["Usage","CancelEvent","DisableScrollClose","Customization","ARIAForwarding"];export{r as ARIAForwarding,o as CancelEvent,n as Customization,t as DisableScrollClose,e as Usage,oe as __namedExportsOrder,ee as default};
