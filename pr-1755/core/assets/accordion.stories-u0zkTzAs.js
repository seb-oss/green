import{i as X,x as v}from"./lit-element-C_s9q329.js";import{n as m,g as Z,G as oo,h as a}from"./custom-element-scoping-BEGY3AqQ.js";import{a as b}from"./query-p8xgzTDt.js";import{e as eo}from"./class-map-Bz98xO8-.js";import{t as no}from"./tokens.style-D2uXUvKM.js";import"./button-C-5Yq78U.js";import"./text-CfeDeQlf.js";import"./card-CmbpUGBE.js";import"./flex-CyLYsuUq.js";import"./rich-text-Du6l4CKh.js";import"./chevron-top-CU2dTKF0.js";import"./chevron-bottom-CcRSBbmu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-D5cEVG9c.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-C6fciv9m.js";import"./icon-DYBgint3.js";const so=X`
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
`,to=X`
  :host {
    display: contents;
  }
`;var ro=Object.defineProperty,co=Object.getOwnPropertyDescriptor,C=(n,o,r,s)=>{for(var e=s>1?void 0:s?co(o,r):o,i=n.length-1,d;i>=0;i--)(d=n[i])&&(e=(s?d(o,r,e):d(e))||e);return s&&e&&ro(o,r,e),e};let x=class extends oo{constructor(){super(...arguments),this.open=!1,this.customIcon=!1}render(){return this.customIcon?a`<slot></slot>`:a`
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
    `}updated(n){var o;if(n.has("open")){const r=(o=this.shadowRoot)==null?void 0:o.querySelector("svg");if(r){const s=new CustomEvent("toggle",{bubbles:!0,composed:!0});r.dispatchEvent(s)}}}};x.styles=[to];C([m({type:Boolean,reflect:!0})],x.prototype,"open",2);C([m({type:Boolean,attribute:"custom-icon"})],x.prototype,"customIcon",2);x=C([Z("gds-icon-accordion")],x);var ao=Object.defineProperty,io=Object.getOwnPropertyDescriptor,c=(n,o,r,s)=>{for(var e=s>1?void 0:s?io(o,r):o,i=n.length-1,d;i>=0;i--)(d=n[i])&&(e=(s?d(o,r,e):d(e))||e);return s&&e&&ao(o,r,e),e};let t=class extends oo{constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",this.customIcon=!1,this._handleToggle=()=>{this.open=!this.open,this._updateContentHeight(),this._syncGroupState(),this._dispatchStateEvent()}}firstUpdated(){this._initializeContentHeight()}_initializeContentHeight(){this._content&&this._updateContentHeight()}_updateContentHeight(){this._content&&requestAnimationFrame(()=>{var n;(n=this._content)==null||n.style.setProperty("--_max-height",this.open?`${this._content.scrollHeight}px`:"0")})}_syncGroupState(){!this.open||!this.name||document.querySelectorAll("gds-accordion").forEach(n=>{if(n!==this&&n.name===this.name){const o=n;o.open=!1,o._updateContentHeight(),o._dispatchStateEvent()}})}_dispatchStateEvent(){this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}render(){return a`
      <div
        class=${eo({details:!0,accordion:!0,open:this.open,small:this.size==="small"})}
        part="base"
      >
        ${this._renderHeader()} ${this._renderContent()}
      </div>
    `}_renderHeader(){return a`
      <div class="summary" part="summary">
        <div
          class="summary-label"
          @click=${this._handleToggle}
          role="button"
          aria-expanded="${this.open}"
        >
          ${this.summary||"Summary"}
        </div>
        ${this._renderIconButton()}
      </div>
    `}_renderIconButton(){return a`
      <div class="summary-icon">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"xs":"medium"}
          @click=${this._handleToggle}
          aria-label="${this.open?"Collapse":"Expand"}"
        >
          <gds-icon-accordion
            .open=${this.open}
            ?custom-icon=${this.customIcon}
          >
            ${this.open?a`<slot name="summary-icon-open"></slot>`:a`<slot name="summary-icon-closed"></slot>`}
          </gds-icon-accordion>
        </gds-button>
      </div>
    `}_renderContent(){return a`
      <div class="content" part="content" aria-hidden="${!this.open}">
        <slot></slot>
      </div>
    `}};t.styles=[no,so];c([m({type:String})],t.prototype,"summary",2);c([m({type:String})],t.prototype,"name",2);c([m({type:Boolean,reflect:!0})],t.prototype,"open",2);c([m({type:String})],t.prototype,"size",2);c([m({type:Boolean,attribute:"custom-icon"})],t.prototype,"customIcon",2);c([b(".content")],t.prototype,"_content",2);c([b('slot[name="summary-icon-open"]')],t.prototype,"_openIconSlot",2);c([b('slot[name="summary-icon-closed"]')],t.prototype,"_closedIconSlot",2);t=c([Z("gds-accordion")],t);const Ho={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the accordion is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the accordion",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}},"custom-icon":{description:"Controls whether to use custom icons from slots",control:"boolean",table:{type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
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
        `}}}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...l,args:{summary:"Click to expand",innerHTML:"Accordion content goes here"}},u={...l,name:"Custom Icons",parameters:{docs:{description:{story:"Demonstrates how to use custom icons for open and closed states."}}},render:()=>v`
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
  `},g={...l,name:"Grouped",parameters:{docs:{description:{story:`
Accordions with the same name attribute will close each other when one is opened.

In this example, all accordions are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-accordion name="group-1"> ... </gds-accordion>
\`\`\`  

`}}},render:()=>v`
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
  `},h={...l,name:"Sizes",parameters:{docs:{description:{story:`
The accordion component supports two sizes: large(default) and small.        
        
\`\`\`html
<gds-accordion size="small"> ... </gds-accordion>
\`\`\`        
        
        `}}},render:()=>v`
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
  `},y={...l,name:"Rich Content",parameters:{docs:{description:{story:"Accordions can contain any type of content, including other components."}}},render:()=>v`
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
  `},f={...l,name:"Initially Open",parameters:{docs:{description:{story:`
Accordions can be initially opened using the open attribute.

\`\`\`html
 <gds-accordion open> ... </gds-accordion>
\`\`\`  
        
        `}}},render:()=>v`
    <gds-accordion open summary="Initially Open">
      This accordion starts in the open state.
    </gds-accordion>
  `};var _,S,w,I,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Accordion content goes here'
  }
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Basic example of an accordion component.",...(z=(I=p.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};var T,D,$,A,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source},description:{story:"Example of accordions with custom icons.",...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var O,P,H,G,L;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(P=g.parameters)==null?void 0:P.docs)==null?void 0:H.source},description:{story:"Example of grouped accordions.",...(L=(G=g.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};var B,R,W,j,q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"Example of different size variants.",...(q=(j=h.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};var F,V,k,M,N;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(V=y.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:"Example with rich content.",...(N=(M=y.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var K,U,Y,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Example of initially open accordion.",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const Go=["Default","CustomIcons","Grouped","Sizes","RichContent","InitiallyOpen"];export{u as CustomIcons,p as Default,g as Grouped,f as InitiallyOpen,y as RichContent,h as Sizes,Go as __namedExportsOrder,Ho as default};
