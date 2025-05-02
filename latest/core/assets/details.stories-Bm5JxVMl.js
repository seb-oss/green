import{i as te,x as D}from"./lit-element-Bx14lxc-.js";import{n as f,G as se,h as y,g as ae}from"./custom-element-scoping-CNGU1oQ0.js";import{a as L}from"./query-p8xgzTDt.js";import{e as I}from"./class-map-CXsQwv0r.js";import{t as re}from"./tokens.style-BXmqfwyc.js";import{w as oe}from"./watch-tFciLXSI.js";import{w as le,b as de,d as me}from"./declarative-layout-mixins-D1Y0gyd7.js";import{G as pe}from"./button.component-BTMPVhVx.js";import"./text-ChmE-p4g.js";import"./card-gDZ-yWb8.js";import"./flex-D0O-iS51.js";import"./link-BFqr2VL1.js";import"./rich-text-BzshVqVC.js";import"./chevron-top-CEOXD32Y.js";import"./chevron-bottom-C3qHEjrn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./transitional-styles-D3LmVzsf.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./text.component-DB4qijWA.js";import"./div.component-CbIAaKIF.js";import"./card.component-BfLCFBH7.js";import"./flex.component-BO1tOu_E.js";import"./link.component-B5XDXlbT.js";import"./chevron-top.component-DqbZG0wM.js";import"./icon-BROJl4dB.js";import"./chevron-bottom.component-HMcv7xtK.js";const ge=te`
  :host {
    display: contents;
  }
`;var ce=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ie=(e,t,s,n)=>{for(var a=n>1?void 0:n?he(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(n?d(t,s,a):d(a))||a);return n&&a&&ce(t,s,a),a};let x=class extends se{constructor(){super(...arguments),this.open=!1}render(){return y`
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
    `}updated(e){var t;if(e.has("open")){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("svg");if(s){const n=new CustomEvent("toggle",{bubbles:!0,composed:!0});s.dispatchEvent(n)}}}};x.styles=[ge];ie([f({type:Boolean,reflect:!0})],x.prototype,"open",2);x=ie([ae("gds-icon-details")],x);const ue=te`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-4xs)
        var(--gds-sys-color-l2-border-primary);
      font-size: var(--gds-sys-text-size-body-m);
      line-height: var(--gds-sys-text-line-height-body-m);
      color: var(--gds-sys-color-l2-content-secondary);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-sys-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-sys-color-l2-content-primary);
    }

    .summary-icon {
      border-radius: var(--gds-sys-space-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
      position: relative;
    }

    .summary-icon::after {
      content: '';
      position: absolute;
      border-radius: var(--gds-sys-space-max);
      transition: all 280ms;
      inset: 0;
      scale: 0.9;
      opacity: 0;
      pointer-events: none;
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-l3-states-light-hover)
      );
    }

    .summary:focus {
      outline-color: var(--gds-sys-color-l3-content-tertiary);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:hover .summary-icon::after,
      .summary:focus-visible .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .summary:active .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-sys-color-l2-border-quaternary);
      }
    }

    .summary-label {
      font-size: var(--gds-sys-text-size-heading-xs);
      line-height: var(--gds-sys-text-line-height-heading-xs);
      font-weight: var(--gds-sys-text-weight-regular);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font-size: var(--gds-sys-text-size-heading-2xs);
      line-height: var(--gds-sys-text-line-height-heading-2xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font-size: var(--gds-sys-text-size-heading-2xs);
      line-height: var(--gds-sys-text-line-height-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-sys-space-2xs);
    }

    .details.open .content {
      padding-block-end: var(--gds-sys-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-sys-space-s);
    }

    .content {
      interpolate-size: allow-keywords;
      height: 0;
      transition:
        height 0.35s ease,
        padding-block-end 0.35s ease;
      overflow: hidden;
      outline: none;
      scrollbar-width: none;
    }

    .content.open {
      overflow: auto;
      height: max-content;
      max-height: 100vh;
    }
  }
`;var ye=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,ne=e=>{throw TypeError(e)},o=(e,t,s,n)=>{for(var a=n>1?void 0:n?xe(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(n?d(t,s,a):d(a))||a);return n&&a&&ye(t,s,a),a},fe=(e,t,s)=>t.has(e)||ne("Cannot "+s),r=(e,t,s)=>(fe(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b,S,z,w,k,C,_;let i=class extends le(de(me(se))){constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",m(this,b,()=>{this.open=!this.open,r(this,w).call(this)}),m(this,S,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),r(this,b).call(this))}),m(this,z,()=>{!this.open||!this.name||document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var t;if(e!==this&&e.name===this.name){const s=e;s.open=!1,r(t=s,w).call(t)}})}),m(this,w,()=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}),m(this,k,()=>y`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${r(this,b)}
        @keydown=${r(this,S)}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name||"default"}"
      >
        <div id="summary-${this.name||"default"}" class="summary-label">
          ${this.summary||"Summary"}
        </div>
        ${r(this,C).call(this)}
      </div>
    `),m(this,C,()=>y`
      <div class="summary-icon" role="presentation" aria-hidden="true">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"xs":"medium"}
          role="presentation"
          tabindex="-1"
        >
          <gds-icon-details .open=${this.open}></gds-icon-details>
        </gds-button>
      </div>
    `),m(this,_,()=>y`
      <div
        id="content-${this.name||"default"}"
        class=${I({content:!0,open:this.open,small:this.size==="small"})}
        aria-hidden="${!this.open}"
        ?inert="${!this.open}"
      >
        <slot></slot>
      </div>
    `)}__handleOpenChange(){r(this,z).call(this)}render(){return y`
      <div
        class=${I({details:!0,open:this.open,small:this.size==="small"})}
      >
        ${r(this,k).call(this)} ${r(this,_).call(this)}
      </div>
    `}};b=new WeakMap;S=new WeakMap;z=new WeakMap;w=new WeakMap;k=new WeakMap;C=new WeakMap;_=new WeakMap;i.styles=[re,ue];o([f({type:String})],i.prototype,"summary",2);o([f({type:String})],i.prototype,"name",2);o([f({type:Boolean,reflect:!0})],i.prototype,"open",2);o([f({type:String})],i.prototype,"size",2);o([L(".content")],i.prototype,"_content",2);o([L('slot[name="summary-icon-open"]')],i.prototype,"_openIconSlot",2);o([L('slot[name="summary-icon-closed"]')],i.prototype,"_closedIconSlot",2);o([oe("open")],i.prototype,"__handleOpenChange",1);i=o([ae("gds-details",{dependsOn:[pe,x]})],i);i.define();const Qe={title:"Components/Details",component:"gds-details",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the details header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups detailss together. Detailss with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the details is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the details",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`
## Overview
The \`gds-details\` component is a collapsible section that helps organize and hide content until needed.
It provides smooth animations, grouping behavior.

## Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: detailss with the same name will close each other automatically
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support

\`\`\`html
<gds-details summary="Click to expand">
  Content here
</gds-details>
\`\`\`
        `}}}},v={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...v,args:{summary:"Click to expand",innerHTML:"Details content goes here"}},g={...v,name:"Grouped",parameters:{docs:{description:{story:`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`  

`}}},render:()=>D`
    <gds-flex flex-direction="column">
      <gds-details name="group-1" summary="First Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
    </gds-flex>
  `},c={...v,name:"Sizes",parameters:{docs:{description:{story:`
The details component supports two sizes: large(default) and small.        
        
\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`        
        
        `}}},render:()=>D`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-details summary="Summary example">
          <gds-text margin="xl">test</gds-text>
        </gds-details>
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
  `},h={...v,name:"Rich Content",parameters:{docs:{description:{story:"Detailss can contain any type of content, including other components."}}},render:()=>D`
    <gds-details summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  `},u={...v,name:"Initially Open",parameters:{docs:{description:{story:`
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`  
        
        `}}},render:()=>D`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `};var $,T,E,H,O;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Details content goes here'
  }
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source},description:{story:"Basic example of an details component.",...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.description}}};var P,G,M,W,R;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
    </gds-flex>
  \`
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source},description:{story:"Example of grouped detailss.",...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.description}}};var B,q,A,F,V;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        <gds-details summary="Summary example">
          <gds-text margin="xl">test</gds-text>
        </gds-details>
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
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:"Example of different size variants.",...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.description}}};var K,N,j,X,J;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  \`
}`,...(j=(N=h.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:"Example with rich content.",...(J=(X=h.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var Q,U,Y,Z,ee;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Example of initially open details.",...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const Ue=["Default","Grouped","Sizes","RichContent","InitiallyOpen"];export{p as Default,g as Grouped,u as InitiallyOpen,h as RichContent,c as Sizes,Ue as __namedExportsOrder,Qe as default};
