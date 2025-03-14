import{i as I,x as b}from"./lit-element-C_s9q329.js";import{n as p,g as M,G as N,h as m}from"./custom-element-scoping-BEGY3AqQ.js";import{e as V}from"./class-map-Bz98xO8-.js";import{t as k}from"./tokens.style-CFvqdzpw.js";import"./button-DMqiAWPO.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./rich-text-D1VnosvF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./div-Cnle9s5w.js";const K=I`
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
`,U=I`
  :host {
    display: contents;
  }
`;var R=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,W=(e,o,n,r)=>{for(var t=r>1?void 0:r?Q(o,n):o,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=(r?s(o,n,t):s(t))||t);return r&&t&&R(o,n,t),t};let f=class extends N{constructor(){super(...arguments),this.open=!1}render(){return m`
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
    `}};f.styles=[U];W([p({type:Boolean,reflect:!0})],f.prototype,"open",2);f=W([M("gds-icon-accordion")],f);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,B=e=>{throw TypeError(e)},g=(e,o,n,r)=>{for(var t=r>1?void 0:r?Y(o,n):o,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=(r?s(o,n,t):s(t))||t);return r&&t&&X(o,n,t),t},Z=(e,o,n)=>o.has(e)||B("Cannot "+n),ee=(e,o,n)=>o.has(e)?B("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,n),y=(e,o,n)=>(Z(e,o,"access private method"),n),c,H,J,j,F;let i=class extends N{constructor(){super(...arguments),ee(this,c),this.summary="",this.name="",this.open=!1,this.size="large"}render(){const e={details:!0,open:this.open,small:this.size==="small"};return m`<div class=${V(e)}>
      ${y(this,c,H).call(this)}
    </div> `}};c=new WeakSet;H=function(){return[y(this,c,j).call(this),y(this,c,J).call(this)].map(o=>m`${o}`)};J=function(){return m`<div class="content"><slot></slot></div>`};j=function(){return m`<div class="summary">
      <div class="summary-label">
        ${this.summary?this.summary:"Summary"}
      </div>
      <div class="summary-icon">${y(this,c,F).call(this)}</div>
    </div>`};F=function(){return m`<gds-button rank="tertiary" size="small">
      <gds-icon-accordion></gds-icon-accordion>
      <slot name="summary-icon-open" slot="icon"></slot>
      <slot name="summary-icon-closed" slot="icon"></slot>
    </gds-button>`};i.styles=[k,K];g([p()],i.prototype,"summary",2);g([p()],i.prototype,"name",2);g([p({type:Boolean,reflect:!0})],i.prototype,"open",2);g([p({type:String})],i.prototype,"size",2);i=g([M("gds-accordion")],i);const Le={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},l={...d,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},u={...d,name:"Name",parameters:{...d.parameters,controls:{include:[]}},render:e=>b`
    <gds-flex width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
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
  `},h={...d,name:"Open",parameters:{...d.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>b`
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
  `},x={...d,name:"Size",parameters:{...d.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>b`
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
  `};var v,w,L,E,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var q,O,S,A,C;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(S=(O=u.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var z,P,D;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(P=h.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var $,T,G;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(T=x.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};const Ee=["accordion","Name","Open","Size"];export{u as Name,h as Open,x as Size,Ee as __namedExportsOrder,l as accordion,Le as default};
