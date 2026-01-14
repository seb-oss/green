import{i as S,n as h,J as k,h as p,g as $,a0 as L,S as O,Q as T,a as D,t as E,d as C,a8 as P,P as G,x as f}from"./iframe-C-vSePkR.js";import"./text-D3fs0Szs.js";import"./card-B79GTse1.js";import"./flex-C4J0xRk9.js";import"./link-N1sXCLJU.js";import"./rich-text-Dv3xOHsj.js";import"./chevron-top-B4R4Wifz.js";import"./chevron-bottom-BiUBOz5c.js";import"./default-typography.styles-BCLwmegz.js";import"./card.component-dplERBBH.js";import"./flex.component-C5LxecxV.js";import"./link.component-BZ5L7GlQ.js";import"./props-link-Djm-4mcv.js";import"./rich-text.component-DqBrZMpL.js";import"./chevron-top.component-BUj8eB89.js";import"./icon.component-Ca-hYHGF.js";import"./chevron-bottom.component-DtmY9UfK.js";const H=S`
  :host {
    display: contents;
  }
`;var M=Object.defineProperty,W=Object.getOwnPropertyDescriptor,z=(e,t,s,n)=>{for(var a=n>1?void 0:n?W(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(n?d(t,s,a):d(a))||a);return n&&a&&M(t,s,a),a};let c=class extends k{constructor(){super(...arguments),this.open=!1}render(){return p`
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
    `}updated(e){var t;if(e.has("open")){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("svg");if(s){const n=new CustomEvent("toggle",{bubbles:!0,composed:!0});s.dispatchEvent(n)}}}};c.styles=[H];z([h({type:Boolean,reflect:!0})],c.prototype,"open",2);c=z([$("gds-icon-details")],c);const B=S`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-5xs)
        var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-body-regular-m);
      color: var(--gds-sys-color-content-neutral-01);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-sys-color-content-neutral-01);
    }

    .summary-icon {
      border-radius: var(--gds-sys-radius-max);
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
      border-radius: var(--gds-sys-radius-max);
      transition: all 280ms;
      inset: 0;
      scale: 0.9;
      opacity: 0;
      pointer-events: none;
    }

    .summary:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

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
        border-color: var(--gds-sys-color-border-strong);
      }
    }

    .summary-label {
      font: var(--gds-sys-text-heading-xs);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font: var(--gds-sys-text-heading-2xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font: var(--gds-sys-text-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-sys-radius-2xs);
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
`;var R=Object.defineProperty,A=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},r=(e,t,s,n)=>{for(var a=n>1?void 0:n?A(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(n?d(t,s,a):d(a))||a);return n&&a&&R(t,s,a),a},V=(e,t,s)=>t.has(e)||I("Cannot "+s),o=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u,x,v,y,b,w,_;let i=class extends L(O(T(k))){constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",m(this,u,()=>{this.open=!this.open,o(this,y).call(this)}),m(this,x,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),o(this,u).call(this))}),m(this,v,()=>{!this.open||!this.name||document.querySelectorAll('[gds-element="gds-details"]').forEach(e=>{var t;if(e!==this&&e.name===this.name){const s=e;s.open=!1,o(t=s,y).call(t)}})}),m(this,y,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open})}),m(this,b,()=>p`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${o(this,u)}
        @keydown=${o(this,x)}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name||"default"}"
      >
        <div id="summary-${this.name||"default"}" class="summary-label">
          ${this.summary||"Summary"}
        </div>
        ${o(this,w).call(this)}
      </div>
    `),m(this,w,()=>p`
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
    `),m(this,_,()=>p`
      <div
        id="content-${this.name||"default"}"
        class=${D({content:!0,open:this.open,small:this.size==="small"})}
        aria-hidden="${!this.open}"
        ?inert="${!this.open}"
      >
        <slot></slot>
      </div>
    `)}__handleOpenChange(){o(this,v).call(this)}render(){return p`
      <div
        class=${D({details:!0,open:this.open,small:this.size==="small"})}
      >
        ${o(this,b).call(this)} ${o(this,_).call(this)}
      </div>
    `}};u=new WeakMap;x=new WeakMap;v=new WeakMap;y=new WeakMap;b=new WeakMap;w=new WeakMap;_=new WeakMap;i.styles=[E,B];r([h({type:String})],i.prototype,"summary",2);r([h({type:String})],i.prototype,"name",2);r([h({type:Boolean,reflect:!0})],i.prototype,"open",2);r([h({type:String})],i.prototype,"size",2);r([C(".content")],i.prototype,"_content",2);r([C('slot[name="summary-icon-open"]')],i.prototype,"_openIconSlot",2);r([C('slot[name="summary-icon-closed"]')],i.prototype,"_closedIconSlot",2);r([P("open")],i.prototype,"__handleOpenChange",1);i=r([$("gds-details",{dependsOn:[G,c]})],i);i.define();const oe={title:"Components/Details",component:"gds-details",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the details header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups detailss together. Detailss with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the details is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the details",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`The details component is a collapsible section that helps organize and hide content until needed.

Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: detailss with the same name will close each other automatically
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support`}}}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},re={...g,args:{summary:"Click to expand",innerHTML:"Details content goes here"}},le={...g,name:"Grouped",parameters:{docs:{description:{story:`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`

`}}},render:()=>f`
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
  `},de={...g,name:"Sizes",parameters:{docs:{description:{story:`
The details component supports two sizes: large(default) and small.

\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`

        `}}},render:()=>f`
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
  `},me={...g,name:"Rich Content",parameters:{docs:{description:{story:"Detailss can contain any type of content, including other components."}}},render:()=>f`
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
  `},pe={...g,name:"Initially Open",parameters:{docs:{description:{story:`
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`

        `}}},render:()=>f`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `},ce=["Default","Grouped","Sizes","RichContent","InitiallyOpen"];export{re as Default,le as Grouped,pe as InitiallyOpen,me as RichContent,de as Sizes,ce as __namedExportsOrder,oe as default};
