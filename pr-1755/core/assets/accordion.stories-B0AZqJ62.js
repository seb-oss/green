import{i as E,x as A}from"./lit-element-C_s9q329.js";import{n as C,r as S,g as L,G as T,h as l}from"./custom-element-scoping-BEGY3AqQ.js";import{t as M}from"./tokens.style-CFvqdzpw.js";import"./button-DMqiAWPO.js";import"./rich-text-DipTwc1Q.js";import"./minus-large-oSya4uuW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./default-typography.styles-CW-t1upr.js";import"./icon-DYBgint3.js";const N=E`
  @layer base, reset;
  @layer base {
    details {
      border-top: solid var(--gds-space-4xs) var(--gds-color-l3-border-tertiary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
      transition: all 120ms;
    }

    summary {
      font-weight: var(--gds-text-weight-regular);
      list-style: none;
      padding: 0.6cap 0.2ch 0.5cap 0.2ch;
      font-size: var(--gds-text-size-body-l);
      line-height: var(--gds-text-line-height-body-l);
      color: var(--gds-color-l2-content-primary);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
      outline-offset: var(--gds-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
    }

    summary:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    details[open] {
      padding-bottom: 1lh;
    }

    details[open] summary {
      margin-bottom: 1lh;
      border-bottom: var(--gds-space-4xs) solid
        var(--gds-color-l3-border-tertiary);
    }
  }
`;var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(o,e,t,s)=>{for(var n=s>1?void 0:s?P(e,t):e,c=o.length-1,m;c>=0;c--)(m=o[c])&&(n=(s?m(e,t,n):m(n))||n);return s&&n&&D(e,t,n),n};let a=class extends T{constructor(){super(),this.summary="",this.name="",this.isOpen=!1,this.handleToggle=o=>{const e=o.target;if(this.isOpen=e.open,this.isOpen&&this.name){const t=new CustomEvent("gds-accordion-opened",{bubbles:!0,composed:!0,detail:{name:this.name,sourceId:this.id}});window.dispatchEvent(t)}}}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle",this.handleToggle),window.addEventListener("gds-accordion-opened",this.handleOtherAccordions.bind(this))}disconnectedCallback(){this.removeEventListener("toggle",this.handleToggle),window.removeEventListener("gds-accordion-opened",this.handleOtherAccordions.bind(this)),super.disconnectedCallback()}handleOtherAccordions(o){var t;const e=o;if(this.name&&e.detail.name===this.name&&e.detail.sourceId!==this.id){this.isOpen=!1;const s=(t=this.shadowRoot)==null?void 0:t.querySelector("details");s&&(s.open=!1)}}ensureId(){return this.id||(this.id=`gds-accordion-${Math.random().toString(36).substr(2,9)}`),this.id}render(){return this.ensureId(),l`<details ?name=${this.name||""} @toggle=${this.handleToggle}>
      <summary>
        ${this.summary?this.summary:"Summary"}
        <gds-button rank="tertiary">
          ${this.isOpen?l`<gds-icon-minus-large></gds-icon-minus-large>`:l`<gds-icon-plus-large></gds-icon-plus-large>`}
        </gds-button>
      </summary>
      <slot></slot>
    </details>`}};a.styles=[M,N];d([C()],a.prototype,"summary",2);d([C()],a.prototype,"name",2);d([S()],a.prototype,"isOpen",2);a=d([L("gds-accordion")],a);const Z={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},p={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...p,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},i={...p,name:"Name",parameters:{...p.parameters,controls:{include:[]},docs:{description:{story:`
### Group Behavior
When multiple accordions share the same \`name\` attribute, they form a group. 
Opening one accordion in the group automatically closes other accordions in the same group.

### Use Cases
- FAQ sections
- Product details
- Step-by-step guides
- Settings panels
- Content organization

### Implementation Notes
- Uses custom events to handle group behavior
- Works across Shadow DOM boundaries
- Maintains proper state management
- Cleans up event listeners on disconnect
        `}}},render:o=>A`
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  `};var u,g,h,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var f,v,x,w,O;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Name',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    },
    docs: {
      description: {
        story: \`
### Group Behavior
When multiple accordions share the same \\\`name\\\` attribute, they form a group. 
Opening one accordion in the group automatically closes other accordions in the same group.

### Use Cases
- FAQ sections
- Product details
- Step-by-step guides
- Settings panels
- Content organization

### Implementation Notes
- Uses custom events to handle group behavior
- Works across Shadow DOM boundaries
- Maintains proper state management
- Cleans up event listeners on disconnect
        \`
      }
    }
  },
  render: args => html\`
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  \`
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.description}}};const ee=["accordion","RanksAndVariants"];export{i as RanksAndVariants,ee as __namedExportsOrder,r as accordion,Z as default};
