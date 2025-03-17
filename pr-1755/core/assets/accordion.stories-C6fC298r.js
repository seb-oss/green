import{i as W,x as w}from"./lit-element-C_s9q329.js";import{n as h,g as B,G as H,h as d,r as J}from"./custom-element-scoping-BEGY3AqQ.js";import{e as Q}from"./class-map-Bz98xO8-.js";import{t as Y}from"./tokens.style-CFvqdzpw.js";import{w as Z}from"./watch-tFciLXSI.js";import"./button-DMqiAWPO.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./rich-text-D1VnosvF.js";import"./chevron-top-CU2dTKF0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./div-Cnle9s5w.js";import"./icon-DYBgint3.js";const ee=W`
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
      display: none;
    }
  }
`,oe=W`
  :host {
    display: contents;
  }
`;var te=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,F=(e,o,t,s)=>{for(var n=s>1?void 0:s?ne(o,t):o,r=e.length-1,a;r>=0;r--)(a=e[r])&&(n=(s?a(o,t,n):a(n))||n);return s&&n&&te(o,t,n),n};let x=class extends H{constructor(){super(...arguments),this.open=!1}render(){return d`
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
    `}updated(e){var o;if(e.has("open")){const t=(o=this.shadowRoot)==null?void 0:o.querySelector("svg");if(t){const s=new CustomEvent("toggle",{bubbles:!0,composed:!0});t.dispatchEvent(s)}}}};x.styles=[oe];F([h({type:Boolean,reflect:!0})],x.prototype,"open",2);x=F([B("gds-icon-accordion")],x);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,R=e=>{throw TypeError(e)},l=(e,o,t,s)=>{for(var n=s>1?void 0:s?re(o,t):o,r=e.length-1,a;r>=0;r--)(a=e[r])&&(n=(s?a(o,t,n):a(n))||n);return s&&n&&se(o,t,n),n},V=(e,o,t)=>o.has(e)||R("Cannot "+t),_=(e,o,t)=>(V(e,o,"read from private field"),t?t.call(e):o.get(e)),O=(e,o,t)=>o.has(e)?R("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,t),u=(e,o,t)=>(V(e,o,"access private method"),t),c,v,b,K,U,j,X;let i=class extends H{constructor(){super(...arguments),O(this,c),this.summary="",this.name="",this.open=!1,this._summarySlotIconOpenOccupied=!1,this._summarySlotIconClosedOccupied=!1,this.size="large",O(this,b,(e,o)=>{const s=o.target.assignedNodes({flatten:!0}),n=s.length>0&&s.some(r=>{var a;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((a=r.textContent)==null?void 0:a.trim())!==""});e==="summary-icon-open"?this._summarySlotIconOpenOccupied=n:e==="summary-icon-closed"&&(this._summarySlotIconClosedOccupied=n)})}handleOpenChange(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("gds-icon-accordion");e&&(e.open=this.open)}render(){const e={details:!0,open:this.open,small:this.size==="small"};return d`<div class=${Q(e)}>
      ${u(this,c,K).call(this)}
    </div> `}};c=new WeakSet;v=function(){this.open=!this.open};b=new WeakMap;K=function(){return[u(this,c,j).call(this),u(this,c,U).call(this)].map(o=>d`${o}`)};U=function(){return d`<div class="content" .toggle=${this.open}><slot></slot></div>`};j=function(){return d`<div class="summary">
      <div class="summary-label" @click=${u(this,c,v)}>
        ${this.summary?this.summary:"Summary"}
      </div>
      <div class="summary-icon">
        <gds-button rank="tertiary" size="small" @click=${u(this,c,v)}>
          ${u(this,c,X).call(this)}
        </gds-button>
      </div>
    </div>`};X=function(){return!this._summarySlotIconOpenOccupied&&!this._summarySlotIconClosedOccupied?d`<gds-icon-accordion .open=${this.open}></gds-icon-accordion>`:d`
      ${this.open&&this._summarySlotIconClosedOccupied?d`<slot
            name="summary-icon-closed"
            @slotchange=${e=>_(this,b).call(this,"summary-icon-open",e)}
          ></slot>`:d`<slot
            name="summary-icon-open"
            @slotchange=${e=>_(this,b).call(this,"summary-icon-open",e)}
          ></slot>`}
    `};i.styles=[Y,ee];l([h()],i.prototype,"summary",2);l([h()],i.prototype,"name",2);l([h({type:Boolean,reflect:!0})],i.prototype,"open",2);l([Z("open")],i.prototype,"handleOpenChange",1);l([J()],i.prototype,"_summarySlotIconOpenOccupied",2);l([J()],i.prototype,"_summarySlotIconClosedOccupied",2);l([h({type:String})],i.prototype,"size",2);i=l([B("gds-accordion")],i);const $e={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...m,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},g={...m,name:"Name",parameters:{...m.parameters,controls:{include:[]}},render:e=>w`
    <gds-flex width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
            <gds-icon-chevron-top
              slot="summary-icon-open"
            ></gds-icon-chevron-top>
            <gds-icon-chevron-top
              slot="summary-icon-closed"
            ></gds-icon-chevron-top>
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
  `},y={...m,name:"Open",parameters:{...m.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>w`
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
  `},f={...m,name:"Size",parameters:{...m.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>w`
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
  `};var E,S,L,C,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(L=(S=p.parameters)==null?void 0:S.docs)==null?void 0:L.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(q=(C=p.parameters)==null?void 0:C.docs)==null?void 0:q.description}}};var $,A,I,z,D;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
            <gds-icon-chevron-top
              slot="summary-icon-open"
            ></gds-icon-chevron-top>
            <gds-icon-chevron-top
              slot="summary-icon-closed"
            ></gds-icon-chevron-top>
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
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var P,T,N;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(T=y.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var G,M,k;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(M=f.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const Ae=["accordion","Name","Open","Size"];export{g as Name,y as Open,f as Size,Ae as __namedExportsOrder,p as accordion,$e as default};
