import{G as B}from"./dialog.component-BL4qMpWG.js";import{x as I}from"./lit-element-Bx14lxc-.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./when-BR7zwNJC.js";import"./watch-tFciLXSI.js";import"./tokens.style-vQBwQv71.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./button.component-DxucwjBZ.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CD1mMrWO.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BqSibp9P.js";import"./div.component-CrCsvFNO.js";import"./flex.component-Apgiyuoj.js";import"./cross-large.component-Cba1UBg2.js";import"./icon-CMjDogij.js";B.define();const U={title:"Components/Dialog",component:"gds-dialog",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A dialog is a type of modal window that appears in front of app content
to provide critical information or ask for a decision. Dialogs disable
all app functionality when they appear, and remain on screen until confirmed,
dismissed, or a required action has been taken.

@beta`}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{heading:"Dialog heading",innerHTML:`<gds-button slot="trigger">Open Dialog</gds-button>

This is the content of the dialog.`}},t={...a},o={...a,args:{...a.args,variant:"slide-out"}},e={...a,render:()=>I`<gds-button
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
      </gds-dialog>`},s={...a,render:()=>I`<gds-dialog
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
    </gds-dialog>`};var n,i,r,d,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source},description:{story:`The easiest way to set up a dialog is to put a button in the trigger slot. This will
automatically open the dialog when the button is clicked.`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var g,c,m,u,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    variant: 'slide-out'
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"You can set the `variant` attribute to `slide-out` to make the dialog slide in from the right.",...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var h,b,f,y,w;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:'You can also open and close the dialog programmatically by calling the `show()` and `close()` methods.\nIn this case you should add `aria-haspopup="dialog"` to the trigger element. Slotted triggers will get\nthis attribute automatically.\n\nInside the dialog, you can use the `slot="footer"` to add buttons to the footer of the dialog.',...(w=(y=e.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var D,v,k,C,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source},description:{story:"You can listen to the `gds-show`, `gds-close` and `gds-ui-state` events to know when the dialog is opened or closed.\n\nWhen `close()` or `show()` is called without a parameter, the event will not be emitted. If a parameter is passed, the\nevent will be emitted with the parameter as the event detail. Also when any of the built-in methods are used to open or\nclose the dialog, the event will be emitted with the parameter as the event detail.",...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};const V=["Default","SlideOut","CustomButtons","Events"];export{e as CustomButtons,t as Default,s as Events,o as SlideOut,V as __namedExportsOrder,U as default};
