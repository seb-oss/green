import{i as X,x as v}from"./lit-element-C_s9q329.js";import{n as m,g as Z,G as ee,h as i}from"./custom-element-scoping-BEGY3AqQ.js";import{a as b}from"./query-p8xgzTDt.js";import{e as oe}from"./class-map-Bz98xO8-.js";import{t as te}from"./tokens.style-D2uXUvKM.js";import"./button-C-5Yq78U.js";import"./text-CfeDeQlf.js";import"./card-CmbpUGBE.js";import"./flex-CyLYsuUq.js";import"./rich-text-Du6l4CKh.js";import"./chevron-top-CU2dTKF0.js";import"./chevron-bottom-CcRSBbmu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-D5cEVG9c.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-C6fciv9m.js";import"./icon-DYBgint3.js";const se=X`
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
`,ne=X`
  :host {
    display: contents;
  }
`;var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,C=(t,e,r,s)=>{for(var o=s>1?void 0:s?ae(e,r):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(o=(s?d(e,r,o):d(o))||o);return s&&o&&re(e,r,o),o};let x=class extends ee{constructor(){super(...arguments),this.open=!1,this.customIcon=!1}render(){return this.customIcon?i`<slot></slot>`:i`
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
    `}updated(t){var e;if(t.has("open")){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("svg");if(r){const s=new CustomEvent("toggle",{bubbles:!0,composed:!0});r.dispatchEvent(s)}}}};x.styles=[ne];C([m({type:Boolean,reflect:!0})],x.prototype,"open",2);C([m({type:Boolean,attribute:"custom-icon"})],x.prototype,"customIcon",2);x=C([Z("gds-icon-accordion")],x);var ie=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,a=(t,e,r,s)=>{for(var o=s>1?void 0:s?ce(e,r):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(o=(s?d(e,r,o):d(o))||o);return s&&o&&ie(e,r,o),o};let n=class extends ee{constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",this.customIcon=!1,this._handleToggle=()=>{this.open=!this.open,this._updateContentHeight(),this._syncGroupState(),this._dispatchStateEvent()}}firstUpdated(){this._initializeContentHeight()}_initializeContentHeight(){this._content&&this._updateContentHeight()}_updateContentHeight(){this._content&&requestAnimationFrame(()=>{var t;(t=this._content)==null||t.style.setProperty("--_max-height",this.open?`${this._content.scrollHeight}px`:"0")})}_syncGroupState(){!this.open||!this.name||document.querySelectorAll("gds-accordion").forEach(t=>{if(t!==this&&t.name===this.name){const e=t;e.open=!1,e._updateContentHeight(),e._dispatchStateEvent()}})}_dispatchStateEvent(){this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}render(){return i`
      <div
        class=${oe({details:!0,accordion:!0,open:this.open,small:this.size==="small"})}
        part="base"
      >
        ${this._renderHeader()} ${this._renderContent()}
      </div>
    `}_renderHeader(){return i`
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
    `}_renderIconButton(){return i`
      <div class="summary-icon">
        <gds-button
          rank="tertiary"
          size=${this.size==="small"?"small":"medium"}
          @click=${this._handleToggle}
          aria-label="${this.open?"Collapse":"Expand"}"
        >
          <gds-icon-accordion
            .open=${this.open}
            ?custom-icon=${this.customIcon}
          >
            ${this.open?i`<slot name="summary-icon-open"></slot>`:i`<slot name="summary-icon-closed"></slot>`}
          </gds-icon-accordion>
        </gds-button>
      </div>
    `}_renderContent(){return i`
      <div class="content" part="content" aria-hidden="${!this.open}">
        <slot></slot>
      </div>
    `}};n.styles=[te,se];a([m({type:String})],n.prototype,"summary",2);a([m({type:String})],n.prototype,"name",2);a([m({type:Boolean,reflect:!0})],n.prototype,"open",2);a([m({type:String})],n.prototype,"size",2);a([m({type:Boolean,attribute:"custom-icon"})],n.prototype,"customIcon",2);a([b(".content")],n.prototype,"_content",2);a([b('slot[name="summary-icon-open"]')],n.prototype,"_openIconSlot",2);a([b('slot[name="summary-icon-closed"]')],n.prototype,"_closedIconSlot",2);n=a([Z("gds-accordion")],n);const Pe={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the accordion is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the accordion",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}},"custom-icon":{description:"Controls whether to use custom icons from slots",control:"boolean",table:{type:{summary:"boolean"}}}},parameters:{docs:{description:{component:`
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
    <gds-accordion summary="With Custom Icons" custom-icon>
      <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
      <gds-icon-chevron-bottom
        slot="summary-icon-closed"
      ></gds-icon-chevron-bottom>
      This accordion uses custom chevron icons.
    </gds-accordion>

    <gds-accordion summary="Default Icon">
      This accordion uses the default plus/minus icon.
    </gds-accordion>
  `},g={...l,name:"Grouped",parameters:{docs:{description:{story:"Accordions with the same name attribute will close each other when one is opened."}}},render:()=>v`
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
  `},h={...l,name:"Sizes",parameters:{docs:{description:{story:"The accordion component supports two sizes: large and small."}}},render:()=>v`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-text tag="small">Large Size (Default)</gds-text>
        <gds-accordion summary="Summary example">
          Content in default size
        </gds-accordion>

        <gds-accordion summary="Summary example">
          Content in small size
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-text tag="small">Small</gds-text>
        <gds-accordion size="small" summary="Summary example">
          Content in default size
        </gds-accordion>

        <gds-accordion size="small" summary="Summary example">
          Content in small size
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
  `},f={...l,name:"Initially Open",parameters:{docs:{description:{story:"Accordions can be initially opened using the open attribute."}}},render:()=>v`
    <gds-accordion open summary="Initially Open">
      This accordion starts in the open state.
    </gds-accordion>
  `};var _,z,w,S,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Accordion content goes here'
  }
}`,...(w=(z=p.parameters)==null?void 0:z.docs)==null?void 0:w.source},description:{story:"Basic example of an accordion component.",...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.description}}};var $,A,T,E,D;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    <gds-accordion summary="With Custom Icons" custom-icon>
      <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
      <gds-icon-chevron-bottom
        slot="summary-icon-closed"
      ></gds-icon-chevron-bottom>
      This accordion uses custom chevron icons.
    </gds-accordion>

    <gds-accordion summary="Default Icon">
      This accordion uses the default plus/minus icon.
    </gds-accordion>
  \`
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source},description:{story:"Example of accordions with custom icons.",...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var O,P,H,G,L;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Grouped',
  parameters: {
    docs: {
      description: {
        story: 'Accordions with the same name attribute will close each other when one is opened.'
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
}`,...(H=(P=g.parameters)==null?void 0:P.docs)==null?void 0:H.source},description:{story:"Example of grouped accordions.",...(L=(G=g.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};var B,R,j,q,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: 'The accordion component supports two sizes: large and small.'
      }
    }
  },
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-text tag="small">Large Size (Default)</gds-text>
        <gds-accordion summary="Summary example">
          Content in default size
        </gds-accordion>

        <gds-accordion summary="Summary example">
          Content in small size
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m" flex="1">
        <gds-text tag="small">Small</gds-text>
        <gds-accordion size="small" summary="Summary example">
          Content in default size
        </gds-accordion>

        <gds-accordion size="small" summary="Summary example">
          Content in small size
        </gds-accordion>
      </gds-flex>
    </gds-flex>
  \`
}`,...(j=(R=h.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"Example of different size variants.",...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var V,W,M,N,k;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(W=y.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:"Example with rich content.",...(k=(N=y.parameters)==null?void 0:N.docs)==null?void 0:k.description}}};var K,U,Y,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Initially Open',
  parameters: {
    docs: {
      description: {
        story: 'Accordions can be initially opened using the open attribute.'
      }
    }
  },
  render: () => html\`
    <gds-accordion open summary="Initially Open">
      This accordion starts in the open state.
    </gds-accordion>
  \`
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Example of initially open accordion.",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const He=["Default","CustomIcons","Grouped","Sizes","RichContent","InitiallyOpen"];export{u as CustomIcons,p as Default,g as Grouped,f as InitiallyOpen,y as RichContent,h as Sizes,He as __namedExportsOrder,Pe as default};
