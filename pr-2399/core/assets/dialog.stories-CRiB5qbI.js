import{G as Y}from"./dialog.component-D-XPIrx1.js";import{x as i}from"./lit-element-Bx14lxc-.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./watch-tFciLXSI.js";import"./tokens.style-DW_p3hws.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./button.component-C5T3Owg7.js";import"./static-B8S6DEnV.js";import"./transitional-styles-DOynpii0.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-QOfo36tN.js";import"./div.component-DPUDEuOs.js";import"./flex.component-sFfxQKGj.js";import"./cross-small.component-BeLaK_DU.js";import"./icon-Unif9O0f.js";import"./unsafe-html-CYO4avEf.js";Y.define();const oe={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog appears in front of content to provide critical information or ask for a decision."}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{heading:"Dialog heading",innerHTML:`<gds-button slot="trigger">Open Dialog</gds-button>
   <p> This is the content of the dialog.</p>

   <p>You can add any content here, including other components.</p>

    <p>You can also add buttons to the footer of the dialog by using the slot="footer" attribute on the button.</p>

    <p>You can also use the slot="footer" attribute to add buttons to the footer of the dialog.</p>

    <p>The dialog will automatically close when the user clicks outside of it or presses the Escape key.</p>

    <p>You can also close the dialog programmatically by calling the close() method on the dialog element.</p>

    <p>The dialog will also emit a gds-close event when it is closed, which you can listen to if you want to perform some action when the dialog is closed.</p>`,variant:"default",placement:"initial"}},t={...e},o={...e,args:{...e.args,variant:"slide-out"}},s={...e,render:()=>i`<gds-button
        aria-haspopup="dialog"
        onclick="document.getElementById('my-dialog').show()"
        >Open dialog</gds-button
      >
      <gds-dialog heading="Dialog heading" id="my-dialog">
        This is the content of the dialog.
        <gds-button
          slot="footer"
          onclick="document.getElementById('my-dialog').close('custom close')"
          >Custom close button</gds-button
        >
      </gds-dialog>`},n={...e,render:()=>i`<gds-dialog
      @gds-close=${console.log}
      @gds-show=${console.log}
      @gds-ui-state=${console.log}
      heading="Dialog heading"
      id="my-dialog-events"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
      <gds-button
        slot="footer"
        onclick="document.getElementById('my-dialog-events').close('custom close')"
        >Custom btn 2</gds-button
      >
    </gds-dialog>`},a={...e,render:()=>i`<gds-dialog
      @gds-close=${console.log}
      @gds-show=${console.log}
      @gds-ui-state=${console.log}
      heading="Dialog heading"
      id="my-dialog-events"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <div slot="dialog">
        If you put stuff here, you can customize the entire dialog, including
        header and footer.
      </div>
    </gds-dialog>`};var l,d,r,g,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(r=(d=t.parameters)==null?void 0:d.docs)==null?void 0:r.source},description:{story:`The easiest way to set up a dialog is to put a button in the trigger slot. This will
automatically open the dialog when the button is clicked.`,...(c=(g=t.parameters)==null?void 0:g.docs)==null?void 0:c.description}}};var u,h,m,p,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    variant: 'slide-out'
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:"You can set the `variant` attribute to `slide-out` to make the dialog slide in from the right.",...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var f,y,w,v,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-button
        aria-haspopup="dialog"
        onclick="document.getElementById('my-dialog').show()"
        >Open dialog</gds-button
      >
      <gds-dialog heading="Dialog heading" id="my-dialog">
        This is the content of the dialog.
        <gds-button
          slot="footer"
          onclick="document.getElementById('my-dialog').close('custom close')"
          >Custom close button</gds-button
        >
      </gds-dialog>\`
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:'You can also open and close the dialog programmatically by calling the `show()` and `close()` methods.\nIn this case you should add `aria-haspopup="dialog"` to the trigger element. Slotted triggers will get\nthis attribute automatically.\n\nInside the dialog, you can use the `slot="footer"` to add buttons to the footer of the dialog.',...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var D,T,I,$,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-dialog
      @gds-close=\${console.log}
      @gds-show=\${console.log}
      @gds-ui-state=\${console.log}
      heading="Dialog heading"
      id="my-dialog-events"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
      <gds-button
        slot="footer"
        onclick="document.getElementById('my-dialog-events').close('custom close')"
        >Custom btn 2</gds-button
      >
    </gds-dialog>\`
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source},description:{story:"You can listen to the `gds-show`, `gds-close` and `gds-ui-state` events to know when the dialog is opened or closed.\n\nWhen `close()` or `show()` is called without a parameter, the event will not be emitted. If a parameter is passed, the\nevent will be emitted with the parameter as the event detail. Also when any of the built-in methods are used to open or\nclose the dialog, the event will be emitted with the parameter as the event detail.\n\nAll the emitted events will have a `detail` object with a reason property that can be used to determine the reason for the event.\n\nPossible reasons are:\n- `btn-close`: The dialog was closed by the user clicking the close button.\n- `btn-cancel`: The dialog was closed by the user clicking the default cancel button.\n- `btn-ok`: The dialog was closed by the user clicking the default OK button.\n- `native-close`: The dialog was closed by an action native to the HTML dialog element, such as pressing the Escape key.\n- `click-outside`: The dialog was closed by the user clicking outside the dialog.\n- `slotted-trigger`: The dialog was opened by the user clicking the slotted trigger button.\n\nThe reason can also be a custom string supplied when calling the `close()` or `show()` methods.\n\n### Preventing close\nThe `gds-ui-state` event can be cancelled by calling `preventDefault()` on the event to prevent the dialog from closing. Presently, only the `gds-ui-state` event can be cancelled in this way.",...(C=($=n.parameters)==null?void 0:$.docs)==null?void 0:C.description}}};var E,O,P,B,S;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-dialog
      @gds-close=\${console.log}
      @gds-show=\${console.log}
      @gds-ui-state=\${console.log}
      heading="Dialog heading"
      id="my-dialog-events"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <div slot="dialog">
        If you put stuff here, you can customize the entire dialog, including
        header and footer.
      </div>
    </gds-dialog>\`
}`,...(P=(O=a.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:`You can customize the dialog completely by putting content in the \`dialog\` slot.
This will replace the default content of the dialog, including the header and footer.

When this slot is used, the footer slot will not be rendered, so you need to add a custom footer manually.

**Important:** Make sure to still use the \`heading\` property, as it is used to give the dialog an accessible name.`,...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};const se=["Default","SlideOut","CustomButtons","Events","CustomDialog"];export{s as CustomButtons,a as CustomDialog,t as Default,n as Events,o as SlideOut,se as __namedExportsOrder,oe as default};
