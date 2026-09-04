import{a as i}from"./argTableProps-DhGDpDNW.js";import{h as a}from"./iframe-BTEMi5uh.js";import"./popover-CK1flUfe.js";import"./backdrop-BBJjo_9Z.js";import"./grouped-list-umbxPXlN.js";import"./chevron-bottom-aie-k8xT.js";import"./flex-DR3h5pID.js";import"./card-BWdMOB1t.js";import"./menu-button-91vxgRwn.js";import"./preload-helper-PPVm8Dsz.js";import"./popover.component-6WptriCu.js";import"./localized-decorator-jEt3bp2r.js";import"./floating-ui.dom-DzQH3ivI.js";import"./cross-small.component-COfPXHpi.js";import"./icon.component-1khu7vxe.js";import"./grouped-list.component-DVbTju2H.js";import"./list-item-m2ZRDXGT.js";import"./flex.component-DarE5pY2.js";import"./chevron-bottom.component-Bn2TRYg9.js";import"./card.component-CVSaPZfB.js";import"./menu-button.component-BHJaZG4s.js";const E={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a temporary view that appears above other content."}}},tags:["autodocs"],argTypes:{...i("gds-popover")}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
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
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...e.parameters?.docs?.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"By default, the popover will close when clicking outside or hitting the escape key. This behavior can be customized by listening to the `gds-ui-state` event and calling `preventDefault()` on the event object when the popover should not close.\n\nFor example:\n\n```html\n<gds-popover @gds-ui-state=${(e: CustomEvent) => e.detail.reason === 'close' && e.preventDefault()}>...</gds-popover>\n```\n\nThe state change reasons are:\n- `show`: The popover is being opened by the user by clicking the trigger.\n- `close`: The popover is being closed by the user by clicking outside.\n- `cancel`: The popover is being closed by the user by hitting the escape key.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"By default, the popover closes when the page is scrolled (on desktop viewports wider than 767px).\nThis behavior can be disabled by setting the `disableScrollClose` property to `true`.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<dialog>` element.",...r.parameters?.docs?.description}}};const M=["Usage","CancelEvent","DisableScrollClose","Customization","ARIAForwarding"];export{r as ARIAForwarding,o as CancelEvent,n as Customization,t as DisableScrollClose,e as Usage,M as __namedExportsOrder,E as default};
