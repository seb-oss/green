import{G as I}from"./dialog.component-DRBnhrdW.js";import{x as C}from"./lit-element-Bx14lxc-.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./watch-tFciLXSI.js";import"./tokens.style-Cct4pBht.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./button.component-DmkuBQlc.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-unlae3Cp.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-DkFuee-h.js";import"./div.component-CLY16RHW.js";import"./flex.component-BfKO9GTN.js";import"./cross-small.component-D9XbEW7U.js";import"./icon-BXUh_f_p.js";import"./unsafe-html-CYO4avEf.js";I.define();const U={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog appears in front of content to provide critical information or ask for a decision.

@beta`}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{heading:"Dialog heading",innerHTML:`<gds-button slot="trigger">Open Dialog</gds-button>

This is the content of the dialog.`}},t={...a},e={...a,args:{...a.args,variant:"slide-out"}},o={...a,render:()=>C`<gds-button
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
      </gds-dialog>`},s={...a,render:()=>C`<gds-dialog
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
    </gds-dialog>`};var n,i,d,r,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:`The easiest way to set up a dialog is to put a button in the trigger slot. This will
automatically open the dialog when the button is clicked.`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.description}}};var c,g,m,u,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    variant: 'slide-out'
  }
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source},description:{story:"You can set the `variant` attribute to `slide-out` to make the dialog slide in from the right.",...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var p,b,y,f,w;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:'You can also open and close the dialog programmatically by calling the `show()` and `close()` methods.\nIn this case you should add `aria-haspopup="dialog"` to the trigger element. Slotted triggers will get\nthis attribute automatically.\n\nInside the dialog, you can use the `slot="footer"` to add buttons to the footer of the dialog.',...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var v,k,T,D,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.source},description:{story:"You can listen to the `gds-show`, `gds-close` and `gds-ui-state` events to know when the dialog is opened or closed.\n\nWhen `close()` or `show()` is called without a parameter, the event will not be emitted. If a parameter is passed, the\nevent will be emitted with the parameter as the event detail. Also when any of the built-in methods are used to open or\nclose the dialog, the event will be emitted with the parameter as the event detail.\n\nAll the emitted events will have a `detail` object with a reason property that can be used to determine the reason for the event.\nThe `gds-ui-state` event can also be cancelled to prevent the dialog from closing.\n\nPossible reasons are:\n- `btn-close`: The dialog was closed by the user clicking the close button.\n- `btn-cancel`: The dialog was closed by the user clicking the default cancel button.\n- `btn-ok`: The dialog was closed by the user clicking the default OK button.\n- `native-close`: The dialog was closed by an action native to the HTML dialog element, such as pressing the Escape key.\n- `click-outside`: The dialog was closed by the user clicking outside the dialog.\n- `slotted-trigger`: The dialog was opened by the user clicking the slotted trigger button.\n\nThe reason can also be a custom string supplied when calling the `close()` or `show()` methods.",...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};const V=["Default","SlideOut","CustomButtons","Events"];export{o as CustomButtons,t as Default,s as Events,e as SlideOut,V as __namedExportsOrder,U as default};
