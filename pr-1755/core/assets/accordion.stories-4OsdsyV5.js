import{i as S,x as T}from"./lit-element-C_s9q329.js";import{n as g,r as N,g as D,G as P,h as u}from"./custom-element-scoping-BEGY3AqQ.js";import{t as I}from"./tokens.style-CFvqdzpw.js";import"./button-DMqiAWPO.js";import"./rich-text-DmPwkjTj.js";import"./minus-large-oSya4uuW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-iv5lM2WH.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./runtime-BL31MtW8.js";import"./watch-tFciLXSI.js";import"./default-typography.styles-CW-t1upr.js";import"./icon-DYBgint3.js";const M=S`
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
`;var _=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(e,t,o,s)=>{for(var n=s>1?void 0:s?z(t,o):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(n=(s?p(t,o,n):p(n))||n);return s&&n&&_(t,o,n),n};let a=class extends P{constructor(){super(),this.summary="",this.name="",this.open=!1,this.isOpen=!1,this.handleToggle=e=>{const t=e.target;if(this.isOpen=t.open,this.open=t.open,this.isOpen&&this.name){const o=new CustomEvent("gds-accordion-opened",{bubbles:!0,composed:!0,detail:{name:this.name,sourceId:this.id}});window.dispatchEvent(o)}}}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle",this.handleToggle),window.addEventListener("gds-accordion-opened",this.handleOtherAccordions.bind(this)),this.isOpen=this.open}disconnectedCallback(){this.removeEventListener("toggle",this.handleToggle),window.removeEventListener("gds-accordion-opened",this.handleOtherAccordions.bind(this)),super.disconnectedCallback()}updated(e){e.has("open")&&this.handleOpenChange()}handleOpenChange(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("details");if(e&&(e.open=this.open,this.isOpen=this.open,this.open&&this.name)){const o=new CustomEvent("gds-accordion-opened",{bubbles:!0,composed:!0,detail:{name:this.name,sourceId:this.id}});window.dispatchEvent(o)}}handleOtherAccordions(e){var o;const t=e;if(this.name&&t.detail.name===this.name&&t.detail.sourceId!==this.id){this.open=!1,this.isOpen=!1;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("details");s&&(s.open=!1)}}ensureId(){return this.id||(this.id=`gds-accordion-${Math.random().toString(36).substr(2,9)}`),this.id}render(){return this.ensureId(),u`<details
      ?open=${this.open}
      ?name=${this.name||""}
      @toggle=${this.handleToggle}
    >
      <summary>
        ${this.summary?this.summary:"Summary"}
        <gds-button rank="tertiary">
          ${this.isOpen?u`<gds-icon-minus-large></gds-icon-minus-large>`:u`<gds-icon-plus-large></gds-icon-plus-large>`}
        </gds-button>
      </summary>
      <slot></slot>
    </details>`}};a.styles=[I,M];c([g()],a.prototype,"summary",2);c([g()],a.prototype,"name",2);c([g({type:Boolean,reflect:!0})],a.prototype,"open",2);c([N()],a.prototype,"isOpen",2);a=c([D("gds-accordion")],a);const se={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...d,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},r={...d,name:"Name",parameters:{...d.parameters,controls:{include:[]}},render:e=>T`
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
  `},m={...d,name:"Open",parameters:{...d.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:e=>T`
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
  `};var h,y,b,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var v,w,O,E,L;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Name',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
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
}`,...(O=(w=r.parameters)==null?void 0:w.docs)==null?void 0:O.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var C,A,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const ne=["accordion","Name","Open"];export{r as Name,m as Open,ne as __namedExportsOrder,i as accordion,se as default};
