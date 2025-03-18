import{i as le,x as w}from"./lit-element-C_s9q329.js";import{n as p,g as de,G as me,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as E}from"./query-p8xgzTDt.js";import{e as pe}from"./class-map-Bz98xO8-.js";import{t as ue}from"./tokens.style-D2uXUvKM.js";import"./button-CYVJ_aNX.js";import"./text-C2tVe2l7.js";import"./card-Ba2-oykd.js";import"./flex-ByO9eAnq.js";import"./rich-text-QVegComu.js";import"./chevron-top-CU2dTKF0.js";import"./chevron-bottom-CcRSBbmu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-DeTyU6yi.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-Bl-Gqprv.js";import"./icon-DYBgint3.js";const ge=le`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-space-4xs)
        var(--gds-color-l2-border-primary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
      transition: border-color 240ms linear;
    }

    .details:hover {
      border-color: var(--gds-color-l2-border-quaternary);
    }

    .details.open {
      border-color: var(--gds-color-l2-border-quaternary);
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-color-l2-content-primary);
    }

    .summary-label {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      flex: 1;
    }

    .details.small .summary-label {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      padding-block: var(--gds-space-s);
    }

    .details:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    .details.open .content {
      display: flex;
      padding-block-end: var(--gds-space-l);
    }

    .content {
      max-height: var(--_max-height, 0);
      overflow: hidden;
      transition: all 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    [aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      translate: 0 -4px;
    }
  }
`,he=le`
  :host {
    display: contents;
  }
`;var ye=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,O=(e,s,t,o)=>{for(var n=o>1?void 0:o?fe(s,t):s,m=e.length-1,c;m>=0;m--)(c=e[m])&&(n=(o?c(s,t,n):c(n))||n);return o&&n&&ye(s,t,n),n};let C=class extends me{constructor(){super(...arguments),this.open=!1,this.customIcon=!1}render(){return this.customIcon?d`<slot></slot>`:d`
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        id="plus"
      >
        <line x1="4" y1="10" x2="16" y2="10" />
        <line x1="10" y1="4" x2="10" y2="16">
          <animate
            attributeName="y1"
            dur="240ms"
            from="${this.open?"4":"10"}"
            to="${this.open?"10":"4"}"
            begin="plus.toggle"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            dur="240ms"
            from="${this.open?"16":"10"}"
            to="${this.open?"10":"16"}"
            begin="plus.toggle"
            fill="freeze"
          />
        </line>
      </svg>
    `}updated(e){var s;if(e.has("open")){const t=(s=this.shadowRoot)==null?void 0:s.querySelector("svg");if(t){const o=new CustomEvent("toggle",{bubbles:!0,composed:!0});t.dispatchEvent(o)}}}};C.styles=[he];O([p({type:Boolean,reflect:!0})],C.prototype,"open",2);O([p({type:Boolean,attribute:"custom-icon"})],C.prototype,"customIcon",2);C=O([de("gds-icon-details")],C);var xe=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ce=e=>{throw TypeError(e)},r=(e,s,t,o)=>{for(var n=o>1?void 0:o?ve(s,t):s,m=e.length-1,c;m>=0;m--)(c=e[m])&&(n=(o?c(s,t,n):c(n))||n);return o&&n&&xe(s,t,n),n},be=(e,s,t)=>s.has(e)||ce("Cannot "+t),a=(e,s,t)=>(be(e,s,"read from private field"),t?t.call(e):s.get(e)),l=(e,s,t)=>s.has(e)?ce("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),S,b,D,I,_,z,T,$;let i=class extends me{constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",this.customIcon=!1,l(this,S,()=>{this._content&&a(this,b).call(this)}),l(this,b,()=>{this._content&&requestAnimationFrame(()=>{var e;(e=this._content)==null||e.style.setProperty("--_max-height",this.open?`${this._content.scrollHeight}px`:"0")})}),l(this,D,()=>{this.open=!this.open,a(this,b).call(this),a(this,I).call(this),a(this,_).call(this)}),l(this,I,()=>{!this.open||!this.name||document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var s,t;if(e!==this&&e.name===this.name){const o=e;o.open=!1,a(s=o,b).call(s),a(t=o,_).call(t)}})}),l(this,_,()=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}),l(this,z,()=>d`
      <div class="summary" part="summary">
        <div
          class="summary-label"
          @click=${a(this,D)}
          role="button"
          aria-expanded="${this.open}"
        >
          ${this.summary||"Summary"}
        </div>
        ${a(this,T).call(this)}
      </div>
    `),l(this,T,()=>d`
      <div class="summary-icon">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"xs":"medium"}
          @click=${a(this,D)}
          aria-label="${this.open?"Collapse":"Expand"}"
        >
          <gds-icon-details .open=${this.open} ?custom-icon=${this.customIcon}>
            ${this.open?d`<slot name="summary-icon-open"></slot>`:d`<slot name="summary-icon-closed"></slot>`}
          </gds-icon-details>
        </gds-button>
      </div>
    `),l(this,$,()=>d`
      <div class="content" part="content" aria-hidden="${!this.open}">
        <slot></slot>
      </div>
    `)}firstUpdated(){a(this,S).call(this)}render(){return d`
      <div
        class=${pe({details:!0,open:this.open,small:this.size==="small"})}
        part="base"
      >
        ${a(this,z).call(this)} ${a(this,$).call(this)}
      </div>
    `}};S=new WeakMap;b=new WeakMap;D=new WeakMap;I=new WeakMap;_=new WeakMap;z=new WeakMap;T=new WeakMap;$=new WeakMap;i.styles=[ue,ge];r([p({type:String})],i.prototype,"summary",2);r([p({type:String})],i.prototype,"name",2);r([p({type:Boolean,reflect:!0})],i.prototype,"open",2);r([p({type:String})],i.prototype,"size",2);r([p({type:Boolean,attribute:"custom-icon"})],i.prototype,"customIcon",2);r([E(".content")],i.prototype,"_content",2);r([E('slot[name="summary-icon-open"]')],i.prototype,"_openIconSlot",2);r([E('slot[name="summary-icon-closed"]')],i.prototype,"_closedIconSlot",2);i=r([de("gds-details")],i);const Ne={title:"Components/Details",component:"gds-details",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the details header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups detailss together. Detailss with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the details is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the details",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}},"custom-icon":{description:"Controls whether to use custom icons from slots",control:"boolean",table:{type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
## Overview
The \`gds-details\` component is a collapsible section that helps organize and hide content until needed.
It provides smooth animations, grouping behavior, and support for custom icons.

## Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: detailss with the same name will close each other automatically
- Custom icon support through slots
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support

## Custom Icons
You can provide custom icons for both open and closed states:

\`\`\`html
<gds-details custom-icon>
  <gds-icon-chevron-up slot="summary-icon-open"></gds-icon-chevron-up>
  <gds-icon-chevron-down slot="summary-icon-closed"></gds-icon-chevron-down>
  Content here
</gds-details>
\`\`\`
        `}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},g={...u,args:{summary:"Click to expand",innerHTML:"Details content goes here"}},h={...u,name:"Custom Icons",parameters:{docs:{description:{story:"Demonstrates how to use custom icons for open and closed states."}}},render:()=>w`
    <gds-flex gap="2xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Default</gds-text>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Custom icon</gds-text>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
      </gds-flex>
    </gds-flex>
  `},y={...u,name:"Grouped",parameters:{docs:{description:{story:`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`  

`}}},render:()=>w`
    <gds-flex flex-direction="column">
      <gds-details name="group-1" summary="First Details">
        Content of first details
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        Content of second details
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        Content of third details
      </gds-details>
    </gds-flex>
  `},f={...u,name:"Sizes",parameters:{docs:{description:{story:`
The details component supports two sizes: large(default) and small.        
        
\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`        
        
        `}}},render:()=>w`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
      </gds-flex>
    </gds-flex>
  `},x={...u,name:"Rich Content",parameters:{docs:{description:{story:"Detailss can contain any type of content, including other components."}}},render:()=>w`
    <gds-details summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  `},v={...u,name:"Initially Open",parameters:{docs:{description:{story:`
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`  
        
        `}}},render:()=>w`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `};var P,W,k,G,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Details content goes here'
  }
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:"Basic example of an details component.",...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var L,H,B,R,q;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Custom Icons',
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how to use custom icons for open and closed states.'
      }
    }
  },
  render: () => html\`
    <gds-flex gap="2xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Default</gds-text>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Custom icon</gds-text>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
      </gds-flex>
    </gds-flex>
  \`
}`,...(B=(H=h.parameters)==null?void 0:H.docs)==null?void 0:B.source},description:{story:"Example of detailss with custom icons.",...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var A,F,V,N,j;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Grouped',
  parameters: {
    docs: {
      description: {
        story: \`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\\\`\\\`\\\`html
<gds-details name="group-1"> ... </gds-details>
\\\`\\\`\\\`  

\`
      }
    }
  },
  render: () => html\`
    <gds-flex flex-direction="column">
      <gds-details name="group-1" summary="First Details">
        Content of first details
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        Content of second details
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        Content of third details
      </gds-details>
    </gds-flex>
  \`
}`,...(V=(F=y.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"Example of grouped detailss.",...(j=(N=y.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var K,U,Y,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: \`
The details component supports two sizes: large(default) and small.        
        
\\\`\\\`\\\`html
<gds-details size="small"> ... </gds-details>
\\\`\\\`\\\`        
        
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
      </gds-flex>
    </gds-flex>
  \`
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Example of different size variants.",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,ee,se,te;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rich Content',
  parameters: {
    docs: {
      description: {
        story: 'Detailss can contain any type of content, including other components.'
      }
    }
  },
  render: () => html\`
    <gds-details summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  \`
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Example with rich content.",...(te=(se=x.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var oe,ne,ae,ie,re;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Initially Open',
  parameters: {
    docs: {
      description: {
        story: \`
Detailss can be initially opened using the open attribute.

\\\`\\\`\\\`html
 <gds-details open> ... </gds-details>
\\\`\\\`\\\`  
        
        \`
      }
    }
  },
  render: () => html\`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  \`
}`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:"Example of initially open details.",...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.description}}};const je=["Default","CustomIcons","Grouped","Sizes","RichContent","InitiallyOpen"];export{h as CustomIcons,g as Default,y as Grouped,v as InitiallyOpen,x as RichContent,f as Sizes,je as __namedExportsOrder,Ne as default};
