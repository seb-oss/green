import{i as W,x as v}from"./lit-element-C_s9q329.js";import{n as g,g as B,G as H,h as i,r as J}from"./custom-element-scoping-BEGY3AqQ.js";import{e as X}from"./class-map-Bz98xO8-.js";import{t as Q}from"./tokens.style-CFvqdzpw.js";import"./button-DMqiAWPO.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./rich-text-D1VnosvF.js";import"./chevron-top-CU2dTKF0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-Cnle9s5w.js";import"./icon-DYBgint3.js";const Y=W`
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
      cursor: pointer;
      user-select: none;
      outline-offset: var(--gds-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
      padding-block: var(--gds-space-m);
      color: var(--gds-color-l2-content-primary);
    }

    .summary-label {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    .details:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    .content {
      padding-block-end: var(--gds-space-l);
    }
  }
`,Z=W`
  :host {
    display: contents;
  }
`;var ee=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,k=(e,o,n,r)=>{for(var t=r>1?void 0:r?oe(o,n):o,s=e.length-1,a;s>=0;s--)(a=e[s])&&(t=(r?a(o,n,t):a(t))||t);return r&&t&&ee(o,n,t),t};let f=class extends H{constructor(){super(...arguments),this.open=!1}render(){return i`
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <line x1="4" y1="10" x2="16" y2="10" />
        <line x1="10" y1="4" x2="10" y2="16">
          <animate
            attributeName="y1"
            dur="240ms"
            from="${this.open?"4":"10"}"
            to="${this.open?"10":"4"}"
            begin="details.toggle"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            dur="240ms"
            from="${this.open?"16":"10"}"
            to="${this.open?"10":"16"}"
            begin="details.toggle"
            fill="freeze"
          />
        </line>
      </svg>
    `}};f.styles=[Z];k([g({type:Boolean,reflect:!0})],f.prototype,"open",2);f=k([B("gds-icon-accordion")],f);var te=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,F=e=>{throw TypeError(e)},m=(e,o,n,r)=>{for(var t=r>1?void 0:r?ne(o,n):o,s=e.length-1,a;s>=0;s--)(a=e[s])&&(t=(r?a(o,n,t):a(t))||t);return r&&t&&te(o,n,t),t},V=(e,o,n)=>o.has(e)||F("Cannot "+n),_=(e,o,n)=>(V(e,o,"read from private field"),n?n.call(e):o.get(e)),w=(e,o,n)=>o.has(e)?F("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,n),x=(e,o,n)=>(V(e,o,"access private method"),n),b,l,K,U,j,R;let d=class extends H{constructor(){super(...arguments),w(this,l),this.summary="",this.name="",this.open=!1,this._summarySlotIconOpenOccupied=!1,this._summarySlotIconClosedOccupied=!1,this.size="large",w(this,b,(e,o)=>{const r=o.target.assignedNodes({flatten:!0}),t=r.length>0&&r.some(s=>{var a;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((a=s.textContent)==null?void 0:a.trim())!==""});e==="summary-icon-open"?this._summarySlotIconOpenOccupied=t:e==="summary-icon-closed"&&(this._summarySlotIconClosedOccupied=t)})}render(){const e={details:!0,open:this.open,small:this.size==="small"};return i`<div class=${X(e)}>
      ${x(this,l,K).call(this)}
    </div> `}};b=new WeakMap;l=new WeakSet;K=function(){return[x(this,l,j).call(this),x(this,l,U).call(this)].map(o=>i`${o}`)};U=function(){return i`<div class="content"><slot></slot></div>`};j=function(){return i`<div class="summary">
      <div class="summary-label">
        ${this.summary?this.summary:"Summary"}
      </div>
      <div class="summary-icon">
        <gds-button rank="tertiary" size="small">
          ${x(this,l,R).call(this)}
        </gds-button>
      </div>
    </div>`};R=function(){return!this._summarySlotIconOpenOccupied&&!this._summarySlotIconClosedOccupied?i`<gds-icon-accordion></gds-icon-accordion>`:i`
      ${this.open&&this._summarySlotIconClosedOccupied?i`<slot
            name="summary-icon-closed"
            @slotchange=${e=>_(this,b).call(this,"summary-icon-open",e)}
          ></slot>`:i`<slot
            name="summary-icon-open"
            @slotchange=${e=>_(this,b).call(this,"summary-icon-open",e)}
          ></slot>`}
    `};d.styles=[Q,Y];m([g()],d.prototype,"summary",2);m([g()],d.prototype,"name",2);m([g({type:Boolean,reflect:!0})],d.prototype,"open",2);m([J()],d.prototype,"_summarySlotIconOpenOccupied",2);m([J()],d.prototype,"_summarySlotIconClosedOccupied",2);m([g({type:String})],d.prototype,"size",2);d=m([B("gds-accordion")],d);const qe={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},u={...c,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},p={...c,name:"Name",parameters:{...c.parameters,controls:{include:[]}},render:e=>v`
    <gds-flex width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
            <gds-icon-chevron-top
              slot="summary-icon-open"
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
  `},h={...c,name:"Open",parameters:{...c.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>v`
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
  `},y={...c,name:"Size",parameters:{...c.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>v`
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
  `};var O,E,L,S,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.description}}};var C,A,I,z,D;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var P,T,$;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(T=h.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var N,G,M;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(G=y.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const Ce=["accordion","Name","Open","Size"];export{p as Name,h as Open,y as Size,Ce as __namedExportsOrder,u as accordion,qe as default};
