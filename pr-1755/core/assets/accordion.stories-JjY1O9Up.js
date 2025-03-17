import{i as io,x as w}from"./lit-element-C_s9q329.js";import{n as p,g as mo,G as lo,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as $}from"./query-p8xgzTDt.js";import{e as uo}from"./class-map-Bz98xO8-.js";import{t as go}from"./tokens.style-D2uXUvKM.js";import"./button-CYVJ_aNX.js";import"./text-CfeDeQlf.js";import"./card-CmbpUGBE.js";import"./flex-CyLYsuUq.js";import"./rich-text-Du6l4CKh.js";import"./chevron-top-CU2dTKF0.js";import"./chevron-bottom-CcRSBbmu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-DeTyU6yi.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-C6fciv9m.js";import"./icon-DYBgint3.js";const ho=io`
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
`,yo=io`
  :host {
    display: contents;
  }
`;var fo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,E=(o,e,s,n)=>{for(var t=n>1?void 0:n?xo(e,s):e,m=o.length-1,l;m>=0;m--)(l=o[m])&&(t=(n?l(e,s,t):l(t))||t);return n&&t&&fo(e,s,t),t};let C=class extends lo{constructor(){super(...arguments),this.open=!1,this.customIcon=!1}render(){return this.customIcon?d`<slot></slot>`:d`
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
    `}updated(o){var e;if(o.has("open")){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("svg");if(s){const n=new CustomEvent("toggle",{bubbles:!0,composed:!0});s.dispatchEvent(n)}}}};C.styles=[yo];E([p({type:Boolean,reflect:!0})],C.prototype,"open",2);E([p({type:Boolean,attribute:"custom-icon"})],C.prototype,"customIcon",2);C=E([mo("gds-icon-accordion")],C);var vo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,po=o=>{throw TypeError(o)},c=(o,e,s,n)=>{for(var t=n>1?void 0:n?bo(e,s):e,m=o.length-1,l;m>=0;m--)(l=o[m])&&(t=(n?l(e,s,t):l(t))||t);return n&&t&&vo(e,s,t),t},Co=(o,e,s)=>e.has(o)||po("Cannot "+s),r=(o,e,s)=>(Co(o,e,"read from private field"),s?s.call(o):e.get(o)),i=(o,e,s)=>e.has(o)?po("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,s),I,b,_,z,S,T,D,A;let a=class extends lo{constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",this.customIcon=!1,i(this,I,()=>{this._content&&r(this,b).call(this)}),i(this,b,()=>{this._content&&requestAnimationFrame(()=>{var o;(o=this._content)==null||o.style.setProperty("--_max-height",this.open?`${this._content.scrollHeight}px`:"0")})}),i(this,_,()=>{this.open=!this.open,r(this,b).call(this),r(this,z).call(this),r(this,S).call(this)}),i(this,z,()=>{!this.open||!this.name||document.querySelectorAll("gds-accordion").forEach(o=>{var e,s;if(o!==this&&o.name===this.name){const n=o;n.open=!1,r(e=n,b).call(e),r(s=n,S).call(s)}})}),i(this,S,()=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}),i(this,T,()=>d`
      <div class="summary" part="summary">
        <div
          class="summary-label"
          @click=${r(this,_)}
          role="button"
          aria-expanded="${this.open}"
        >
          ${this.summary||"Summary"}
        </div>
        ${r(this,D).call(this)}
      </div>
    `),i(this,D,()=>d`
      <div class="summary-icon">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"xs":"medium"}
          @click=${r(this,_)}
          aria-label="${this.open?"Collapse":"Expand"}"
        >
          <gds-icon-accordion
            .open=${this.open}
            ?custom-icon=${this.customIcon}
          >
            ${this.open?d`<slot name="summary-icon-open"></slot>`:d`<slot name="summary-icon-closed"></slot>`}
          </gds-icon-accordion>
        </gds-button>
      </div>
    `),i(this,A,()=>d`
      <div class="content" part="content" aria-hidden="${!this.open}">
        <slot></slot>
      </div>
    `)}firstUpdated(){r(this,I).call(this)}render(){return d`
      <div
        class=${uo({details:!0,accordion:!0,open:this.open,small:this.size==="small"})}
        part="base"
      >
        ${r(this,T).call(this)} ${r(this,A).call(this)}
      </div>
    `}};I=new WeakMap;b=new WeakMap;_=new WeakMap;z=new WeakMap;S=new WeakMap;T=new WeakMap;D=new WeakMap;A=new WeakMap;a.styles=[go,ho];c([p({type:String})],a.prototype,"summary",2);c([p({type:String})],a.prototype,"name",2);c([p({type:Boolean,reflect:!0})],a.prototype,"open",2);c([p({type:String})],a.prototype,"size",2);c([p({type:Boolean,attribute:"custom-icon"})],a.prototype,"customIcon",2);c([$(".content")],a.prototype,"_content",2);c([$('slot[name="summary-icon-open"]')],a.prototype,"_openIconSlot",2);c([$('slot[name="summary-icon-closed"]')],a.prototype,"_closedIconSlot",2);a=c([mo("gds-accordion")],a);const jo={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the accordion is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the accordion",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}},"custom-icon":{description:"Controls whether to use custom icons from slots",control:"boolean",table:{type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
## Overview
The \`gds-accordion\` component is a collapsible section that helps organize and hide content until needed.
It provides smooth animations, grouping behavior, and support for custom icons.

## Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: accordions with the same name will close each other automatically
- Custom icon support through slots
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support

## Custom Icons
You can provide custom icons for both open and closed states:

\`\`\`html
<gds-accordion custom-icon>
  <gds-icon-chevron-up slot="summary-icon-open"></gds-icon-chevron-up>
  <gds-icon-chevron-down slot="summary-icon-closed"></gds-icon-chevron-down>
  Content here
</gds-accordion>
\`\`\`
        `}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},g={...u,args:{summary:"Click to expand",innerHTML:"Accordion content goes here"}},h={...u,name:"Custom Icons",parameters:{docs:{description:{story:"Demonstrates how to use custom icons for open and closed states."}}},render:()=>w`
    <gds-flex gap="2xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Default</gds-text>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Custom icon</gds-text>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
      </gds-flex>
    </gds-flex>
  `},y={...u,name:"Grouped",parameters:{docs:{description:{story:`
Accordions with the same name attribute will close each other when one is opened.

In this example, all accordions are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-accordion name="group-1"> ... </gds-accordion>
\`\`\`  

`}}},render:()=>w`
    <gds-flex flex-direction="column" gap="m">
      <gds-accordion name="group-1" summary="First Accordion">
        Content of first accordion
      </gds-accordion>
      <gds-accordion name="group-1" summary="Second Accordion">
        Content of second accordion
      </gds-accordion>
      <gds-accordion name="group-1" summary="Third Accordion">
        Content of third accordion
      </gds-accordion>
    </gds-flex>
  `},f={...u,name:"Sizes",parameters:{docs:{description:{story:`
The accordion component supports two sizes: large(default) and small.        
        
\`\`\`html
<gds-accordion size="small"> ... </gds-accordion>
\`\`\`        
        
        `}}},render:()=>w`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
      </gds-flex>
    </gds-flex>
  `},x={...u,name:"Rich Content",parameters:{docs:{description:{story:"Accordions can contain any type of content, including other components."}}},render:()=>w`
    <gds-accordion summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Accordion</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-accordion>
  `},v={...u,name:"Initially Open",parameters:{docs:{description:{story:`
Accordions can be initially opened using the open attribute.

\`\`\`html
 <gds-accordion open> ... </gds-accordion>
\`\`\`  
        
        `}}},render:()=>w`
    <gds-accordion open summary="Initially Open">
      This accordion starts in the open state.
    </gds-accordion>
  `};var O,P,W,k,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Accordion content goes here'
  }
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Basic example of an accordion component.",...(G=(k=g.parameters)==null?void 0:k.docs)==null?void 0:G.description}}};var M,L,H,B,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Custom icon</gds-text>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
      </gds-flex>
    </gds-flex>
  \`
}`,...(H=(L=h.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:"Example of accordions with custom icons.",...(R=(B=h.parameters)==null?void 0:B.docs)==null?void 0:R.description}}};var q,F,V,N,j;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Grouped',
  parameters: {
    docs: {
      description: {
        story: \`
Accordions with the same name attribute will close each other when one is opened.

In this example, all accordions are grouped together with the name attribute set to "group-1".

\\\`\\\`\\\`html
<gds-accordion name="group-1"> ... </gds-accordion>
\\\`\\\`\\\`  

\`
      }
    }
  },
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-accordion name="group-1" summary="First Accordion">
        Content of first accordion
      </gds-accordion>
      <gds-accordion name="group-1" summary="Second Accordion">
        Content of second accordion
      </gds-accordion>
      <gds-accordion name="group-1" summary="Third Accordion">
        Content of third accordion
      </gds-accordion>
    </gds-flex>
  \`
}`,...(V=(F=y.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:"Example of grouped accordions.",...(j=(N=y.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var K,U,Y,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: \`
The accordion component supports two sizes: large(default) and small.        
        
\\\`\\\`\\\`html
<gds-accordion size="small"> ... </gds-accordion>
\\\`\\\`\\\`        
        
        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
      </gds-flex>
    </gds-flex>
  \`
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Example of different size variants.",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,oo,eo,so;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rich Content',
  parameters: {
    docs: {
      description: {
        story: 'Accordions can contain any type of content, including other components.'
      }
    }
  },
  render: () => html\`
    <gds-accordion summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Accordion</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-accordion>
  \`
}`,...(oo=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:oo.source},description:{story:"Example with rich content.",...(so=(eo=x.parameters)==null?void 0:eo.docs)==null?void 0:so.description}}};var no,to,ro,ao,co;v.parameters={...v.parameters,docs:{...(no=v.parameters)==null?void 0:no.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Initially Open',
  parameters: {
    docs: {
      description: {
        story: \`
Accordions can be initially opened using the open attribute.

\\\`\\\`\\\`html
 <gds-accordion open> ... </gds-accordion>
\\\`\\\`\\\`  
        
        \`
      }
    }
  },
  render: () => html\`
    <gds-accordion open summary="Initially Open">
      This accordion starts in the open state.
    </gds-accordion>
  \`
}`,...(ro=(to=v.parameters)==null?void 0:to.docs)==null?void 0:ro.source},description:{story:"Example of initially open accordion.",...(co=(ao=v.parameters)==null?void 0:ao.docs)==null?void 0:co.description}}};const Ko=["Default","CustomIcons","Grouped","Sizes","RichContent","InitiallyOpen"];export{h as CustomIcons,g as Default,y as Grouped,v as InitiallyOpen,x as RichContent,f as Sizes,Ko as __namedExportsOrder,jo as default};
