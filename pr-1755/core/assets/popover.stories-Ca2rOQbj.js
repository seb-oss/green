import{a as B}from"./argTableProps-B4lvG2sp.js";import{n as E,G as M,h as l,g as W}from"./custom-element-scoping-b4c89-hi.js";import"./popover-BfZT0i8q.js";import{i as $}from"./lit-element-Bx14lxc-.js";import"./button-DwZeqd6F.js";import"./list-item-BuWPvydt.js";import"./chevron-bottom-BpEG-TG7.js";import"./flex-DTBzRj2-.js";import"./card-VanqcJEE.js";import"./menu-button-C-cMh9wk.js";import"./custom-elements-CZP8Ud3b.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./popover.component-B-PbM_U9.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./floating-ui.dom-BmFOYU71.js";import"./transitional-styles-DA3IwY6D.js";import"./tokens.style-C9bLefPj.js";import"./watch-tFciLXSI.js";import"./cross-small.component-DGKi69Og.js";import"./icon-TXeUf8MR.js";import"./button.component-stQavwFU.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./chevron-bottom.component-HDbW-OqF.js";import"./flex.component-QD4FtwzU.js";import"./div.component-DQzJWx6E.js";import"./card.component-URb5HL5V.js";var _=Object.defineProperty,S=Object.getOwnPropertyDescriptor,P=(e,i,a,d)=>{for(var o=d>1?void 0:d?S(i,a):i,p=e.length-1,c;p>=0;p--)(c=e[p])&&(o=(d?c(i,a,o):c(o))||o);return d&&o&&_(i,a,o),o};let s=class extends M{constructor(){super(...arguments),this.show=!1}render(){return l``}};s.styles=$`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `;P([E({type:Boolean,reflect:!0})],s.prototype,"show",2);s=P([W("gds-backdrop")],s);s.define();const be={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a transient view that appears above other content. It is used by components such as dropdowns."}}},tags:["autodocs"],argTypes:{...B("gds-popover")}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},t={...g},n={...g,render:()=>l` <gds-popover
      id="cancellable"
      @gds-ui-state=${e=>e.detail.reason==="close"&&e.preventDefault()}
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
    </gds-popover>`},r={...g,render:()=>l`<gds-div width="700px" height="250px">
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
        <gds-popover nonmodal backdrop="#my-backdrop" .floatingUIMiddleware=${[{fn:({y:e})=>({x:25,y:e+8})}]} .calcMaxWidth=${()=>"670px"}>
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
</gds-div>`};var m,h,u,b,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var y,f,w,k,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"By default, the popover will close when clicking outside or hitting the escape key. This behavior can be customized by listening to the `gds-ui-state` event and calling `preventDefault()` on the event object when the popover should not close.\n\nFor example:\n\n```html\n<gds-popover @gds-ui-state=${(e: CustomEvent) => e.detail.reason === 'close' && e.preventDefault()}>...</gds-popover>\n```\n\nThe state change reasons are:\n- `show`: The popover is being opened by the user by clicking the trigger.\n- `close`: The popover is being closed by the user by clicking outside.\n- `cancel`: The popover is being closed by the user by hitting the escape key.",...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.description}}};var C,z,T,D,I;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(z=r.parameters)==null?void 0:z.docs)==null?void 0:T.source},description:{story:"Here is an example of how the popover can be customized with sizing, placement and backdrop.",...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};const ve=["Usage","CancelEvent","Customization"];export{n as CancelEvent,r as Customization,t as Usage,ve as __namedExportsOrder,be as default};
