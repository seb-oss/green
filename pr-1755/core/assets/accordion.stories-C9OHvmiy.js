import{i as T,x}from"./lit-element-C_s9q329.js";import{n as l,g as G,G as B,h as a}from"./custom-element-scoping-BEGY3AqQ.js";import{a as f}from"./query-p8xgzTDt.js";import{e as M}from"./class-map-Bz98xO8-.js";import{t as N}from"./tokens.style-CFvqdzpw.js";import"./button-DMqiAWPO.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./rich-text-D1VnosvF.js";import"./chevron-top-CU2dTKF0.js";import"./chevron-bottom-CcRSBbmu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-Cnle9s5w.js";import"./icon-DYBgint3.js";const j=T`
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

    .details[open] {
      border-color: var(--gds-color-l2-border-primary);
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
`,W=T`
  :host {
    display: contents;
  }
`;var J=Object.defineProperty,F=Object.getOwnPropertyDescriptor,b=(e,o,r,n)=>{for(var t=n>1?void 0:n?F(o,r):o,d=e.length-1,c;d>=0;d--)(c=e[d])&&(t=(n?c(o,r,t):c(t))||t);return n&&t&&J(o,r,t),t};let g=class extends B{constructor(){super(...arguments),this.open=!1,this.customIcon=!1}render(){return this.customIcon?a`<slot></slot>`:a`
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
    `}updated(e){var o;if(e.has("open")){const r=(o=this.shadowRoot)==null?void 0:o.querySelector("svg");if(r){const n=new CustomEvent("toggle",{bubbles:!0,composed:!0});r.dispatchEvent(n)}}}};g.styles=[W];b([l({type:Boolean,reflect:!0})],g.prototype,"open",2);b([l({type:Boolean,attribute:"custom-icon"})],g.prototype,"customIcon",2);g=b([G("gds-icon-accordion")],g);var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,i=(e,o,r,n)=>{for(var t=n>1?void 0:n?V(o,r):o,d=e.length-1,c;d>=0;d--)(c=e[d])&&(t=(n?c(o,r,t):c(t))||t);return n&&t&&U(o,r,t),t};let s=class extends B{constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",this.customIcon=!1,this._handleToggle=()=>{this.open=!this.open,this._updateContentHeight(),this._syncGroupState(),this._dispatchStateEvent()}}firstUpdated(){this._initializeContentHeight()}_initializeContentHeight(){this._content&&this._updateContentHeight()}_updateContentHeight(){this._content&&requestAnimationFrame(()=>{var e;(e=this._content)==null||e.style.setProperty("--_max-height",this.open?`${this._content.scrollHeight}px`:"0")})}_syncGroupState(){!this.open||!this.name||document.querySelectorAll("gds-accordion").forEach(e=>{if(e!==this&&e.name===this.name){const o=e;o.open=!1,o._updateContentHeight(),o._dispatchStateEvent()}})}_dispatchStateEvent(){this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.open}))}render(){return a`
      <div
        class=${M({details:!0,accordion:!0,open:this.open,small:this.size==="small"})}
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
          size="small"
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
    `}};s.styles=[N,j];i([l({type:String})],s.prototype,"summary",2);i([l({type:String})],s.prototype,"name",2);i([l({type:Boolean,reflect:!0})],s.prototype,"open",2);i([l({type:String})],s.prototype,"size",2);i([l({type:Boolean,attribute:"custom-icon"})],s.prototype,"customIcon",2);i([f(".content")],s.prototype,"_content",2);i([f('slot[name="summary-icon-open"]')],s.prototype,"_openIconSlot",2);i([f('slot[name="summary-icon-closed"]')],s.prototype,"_closedIconSlot",2);s=i([G("gds-accordion")],s);const xe={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
## Overview
The \`gds-acordion\` component is a collapsible section that helps organize and hide content until needed. 
It follows the native HTML \`<details>\` and \`<summary>\` behavior while adding extra functionality for grouped accordions.

## Features
- Expandable/collapsible content sections
- Group behavior: accordions with the same name will close each other automatically
- Works across Shadow DOM boundaries
- Customizable summary text
- Accessible by default, following native HTML semantics
- Visual indicators for open/closed states

## Accessibility
- Follows ARIA best practices for expandable sections
- Keyboard navigable
- Screen reader friendly
- Maintains focus management

## Example
\`\`\`html
<gds-accordion name="group1" summary="Section 1">
  <gds-rich-text>Content for section 1</gds-rich-text>
</gds-accordion>

<gds-accordion name="group1" summary="Section 2">
  <gds-rich-text>Content for section 2</gds-rich-text>
</gds-accordion>
\`\`\`
        `}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},u={...m,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},p={...m,name:"Name",parameters:{...m.parameters,controls:{include:[]}},render:e=>x`
    <gds-flex width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped With custom icon</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example" custom-icon>
            <gds-icon-chevron-top
              slot="summary-icon-open"
            ></gds-icon-chevron-top>
            <gds-icon-chevron-bottom
              slot="summary-icon-closed"
            ></gds-icon-chevron-bottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Ungrouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},h={...m,name:"Open",parameters:{...m.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>x`
    <gds-accordion open name="default-open" summary="I'm open by default">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  `},y={...m,name:"Size",parameters:{...m.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>x`
    <gds-accordion open name="default-open" summary="I'm open by default">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  `};var v,_,w,E,L;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(w=(_=u.parameters)==null?void 0:_.docs)==null?void 0:w.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var q,S,$,C,O;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Name',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped With custom icon</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example" custom-icon>
            <gds-icon-chevron-top
              slot="summary-icon-open"
            ></gds-icon-chevron-top>
            <gds-icon-chevron-bottom
              slot="summary-icon-closed"
            ></gds-icon-chevron-bottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Ungrouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
          <gds-accordion summary="Example">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-accordion>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...($=(S=p.parameters)==null?void 0:S.docs)==null?void 0:$.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};var z,A,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Open',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    },
    docs: {
      description: {
        story: \`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        \`
      }
    }
  },
  render: args => html\`
    <gds-accordion open name="default-open" summary="I'm open by default">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  \`
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var P,D,H;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    },
    docs: {
      description: {
        story: \`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        \`
      }
    }
  },
  render: args => html\`
    <gds-accordion open name="default-open" summary="I'm open by default">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  \`
}`,...(H=(D=y.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const fe=["accordion","Name","Open","Size"];export{p as Name,h as Open,y as Size,fe as __namedExportsOrder,u as accordion,xe as default};
