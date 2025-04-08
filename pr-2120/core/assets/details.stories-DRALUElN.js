import{i as se,x as _}from"./lit-element-Bx14lxc-.js";import{n as v,G as ae,h as y,g as ne}from"./custom-element-scoping-b4c89-hi.js";import{a as O}from"./query-p8xgzTDt.js";import{e as oe}from"./class-map-CXsQwv0r.js";import{t as le}from"./tokens.style-C9bLefPj.js";import{w as de}from"./watch-tFciLXSI.js";import{w as me,b as pe,d as ce}from"./declarative-layout-mixins-BB4ZLY5n.js";import{G as ge}from"./button.component-Bdos8zoN.js";import"./text-BhQaTdoS.js";import"./card-VanqcJEE.js";import"./flex-DTBzRj2-.js";import"./rich-text-DRnv2pO8.js";import"./chevron-top-CItMZyCS.js";import"./chevron-bottom-BpEG-TG7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./transitional-styles-BOwn52Fb.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-BL31MtW8.js";import"./text.component-B4D18gL7.js";import"./div.component-DQzJWx6E.js";import"./card.component-URb5HL5V.js";import"./flex.component-QD4FtwzU.js";import"./icon-TXeUf8MR.js";import"./chevron-bottom.component-HDbW-OqF.js";const he=se`
  :host {
    display: contents;
  }
`;var ue=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,re=(e,t,s,a)=>{for(var n=a>1?void 0:a?ye(t,s):t,d=e.length-1,m;d>=0;d--)(m=e[d])&&(n=(a?m(t,s,n):m(n))||n);return a&&n&&ue(t,s,n),n};let x=class extends ae{constructor(){super(...arguments),this.open=!1}render(){return y`
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
    `}updated(e){var t;if(e.has("open")){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("svg");if(s){const a=new CustomEvent("toggle",{bubbles:!0,composed:!0});s.dispatchEvent(a)}}}};x.styles=[he];re([v({type:Boolean,reflect:!0})],x.prototype,"open",2);x=re([ne("gds-icon-details")],x);const fe=se`
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

    .summary-icon {
      border-radius: var(--gds-space-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
    }

    .summary:focus {
      outline-color: var(--gds-color-l3-content-tertiary);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:is(:hover, :focus-within) .summary-icon {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
      }

      .summary:active .summary-icon {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-pressed)
        );
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-color-l2-border-quaternary);
      }
    }

    .summary-label {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      padding-block: var(--gds-space-s);
    }

    .details.small .content {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    .details.open .content {
      display: flex;
      padding-block-end: var(--gds-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-space-s);
    }

    .content {
      max-height: var(--_max-height, 0);
      overflow: hidden;
      transition: all 240ms cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }
  }
`;var xe=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ie=e=>{throw TypeError(e)},l=(e,t,s,a)=>{for(var n=a>1?void 0:a?ve(t,s):t,d=e.length-1,m;d>=0;d--)(m=e[d])&&(n=(a?m(t,s,n):m(n))||n);return a&&n&&xe(t,s,n),n},be=(e,t,s)=>t.has(e)||ie("Cannot "+s),r=(e,t,s)=>(be(e,t,"read from private field"),s?s.call(e):t.get(e)),o=(e,t,s)=>t.has(e)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),S,f,w,z,D,C,$,k,E;let i=class extends me(pe(ce(ae))){constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",o(this,S,()=>{this._content&&r(this,f).call(this)}),o(this,f,()=>{this._content&&requestAnimationFrame(()=>{var e;(e=this._content)==null||e.style.setProperty("--_max-height",this.open?`${this._content.scrollHeight}px`:"0")})}),o(this,w,()=>{this.open=!this.open,r(this,C).call(this)}),o(this,z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),r(this,w).call(this))}),o(this,D,()=>{!this.open||!this.name||document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var t,s;if(e!==this&&e.name===this.name){const a=e;a.open=!1,r(t=a,f).call(t),r(s=a,C).call(s)}})}),o(this,C,()=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}),o(this,$,()=>y`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${r(this,w)}
        @keydown=${r(this,z)}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name||"default"}"
      >
        <div id="summary-${this.name||"default"}" class="summary-label">
          ${this.summary||"Summary"}
        </div>
        ${r(this,k).call(this)}
      </div>
    `),o(this,k,()=>y`
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
    `),o(this,E,()=>y`
      <div
        id="content-${this.name||"default"}"
        class="content"
        aria-hidden="${!this.open}"
      >
        <slot></slot>
      </div>
    `)}firstUpdated(){r(this,S).call(this)}__handleOpenChange(){r(this,f).call(this),r(this,D).call(this)}render(){return y`
      <div
        class=${oe({details:!0,open:this.open,small:this.size==="small"})}
      >
        ${r(this,$).call(this)} ${r(this,E).call(this)}
      </div>
    `}};S=new WeakMap;f=new WeakMap;w=new WeakMap;z=new WeakMap;D=new WeakMap;C=new WeakMap;$=new WeakMap;k=new WeakMap;E=new WeakMap;i.styles=[le,fe];l([v({type:String})],i.prototype,"summary",2);l([v({type:String})],i.prototype,"name",2);l([v({type:Boolean,reflect:!0})],i.prototype,"open",2);l([v({type:String})],i.prototype,"size",2);l([O(".content")],i.prototype,"_content",2);l([O('slot[name="summary-icon-open"]')],i.prototype,"_openIconSlot",2);l([O('slot[name="summary-icon-closed"]')],i.prototype,"_closedIconSlot",2);l([de("open")],i.prototype,"__handleOpenChange",1);i=l([ne("gds-details",{dependsOn:[ge,x]})],i);i.define();const Xe={title:"Components/Details",component:"gds-details",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the details header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups detailss together. Detailss with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the details is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the details",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`
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
        `}}}},b={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...b,args:{summary:"Click to expand",innerHTML:"Details content goes here"}},c={...b,name:"Grouped",parameters:{docs:{description:{story:`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`  

`}}},render:()=>_`
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
  `},g={...b,name:"Sizes",parameters:{docs:{description:{story:`
The details component supports two sizes: large(default) and small.        
        
\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`        
        
        `}}},render:()=>_`
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
  `},h={...b,name:"Rich Content",parameters:{docs:{description:{story:"Detailss can contain any type of content, including other components."}}},render:()=>_`
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
  `},u={...b,name:"Initially Open",parameters:{docs:{description:{story:`
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`  
        
        `}}},render:()=>_`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `};var P,T,I,G,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Details content goes here'
  }
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source},description:{story:"Basic example of an details component.",...(M=(G=p.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var W,L,H,R,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(L=c.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:"Example of grouped detailss.",...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};var q,A,F,V,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Example of different size variants.",...(K=(V=g.parameters)==null?void 0:V.docs)==null?void 0:K.description}}};var N,j,U,X,J;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(j=h.parameters)==null?void 0:j.docs)==null?void 0:U.source},description:{story:"Example with rich content.",...(J=(X=h.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var Q,Y,Z,ee,te;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Example of initially open details.",...(te=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const Je=["Default","Grouped","Sizes","RichContent","InitiallyOpen"];export{p as Default,c as Grouped,u as InitiallyOpen,h as RichContent,g as Sizes,Je as __namedExportsOrder,Xe as default};
