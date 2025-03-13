import{i as P,x as h}from"./lit-element-C_s9q329.js";import{n as u,r as k,g as _,G as $,h as G}from"./custom-element-scoping-BEGY3AqQ.js";import{t as M}from"./tokens.style-CFvqdzpw.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./rich-text-D1VnosvF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./static-_ukc2i0J.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./div-Cnle9s5w.js";import"./observe-light-dom-CmJPHUQ4.js";const N=P`
  @layer base, reset;
  @layer base {
    /* :root {
      interpolate-size: allow-keywords;
      } */

    details {
      border-bottom: solid var(--gds-space-4xs)
        var(--gds-color-l2-border-primary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
      transition: all 240ms linear;
    }

    details:hover {
      border-color: var(--gds-color-l2-border-quaternary);
    }

    summary {
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

    summary::-webkit-details-marker {
      display: none;
    }

    summary .label {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    summary svg {
      block-size: var(--gds-space-m);
      inline-size: var(--gds-space-m);
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
    }

    .content {
      padding-block-end: var(--gds-space-l);
    }

    summary:focus-visible {
      border-radius: var(--gds-space-2xs);
    }
  }
`;var I=Object.defineProperty,H=Object.getOwnPropertyDescriptor,i=(t,n,c,a)=>{for(var e=a>1?void 0:a?H(n,c):n,p=t.length-1,g;p>=0;p--)(g=t[p])&&(e=(a?g(n,c,e):g(e))||e);return a&&e&&I(n,c,e),e};let o=class extends ${constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large",this.isOpen=!1,this.handleToggle=t=>{const n=t.target;this.isOpen=n.open,this.open=n.open,this.isOpen&&this.name&&document.querySelectorAll("gds-accordion").forEach(a=>{const e=a;e!==this&&e.name===this.name&&(e.open=!1)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle",this.handleToggle),this.isOpen=this.open}disconnectedCallback(){this.removeEventListener("toggle",this.handleToggle),super.disconnectedCallback()}updated(t){t.has("open")&&(this.isOpen=this.open)}render(){return G`<details
      ?open=${this.open}
      ?name=${this.name||""}
      @toggle=${this.handleToggle}
      id="details"
    >
      <summary>
        <div class="label">${this.summary?this.summary:"Summary"}</div>
        <svg viewBox="0 0 20 20">
          <line x1="4" y1="10" x2="16" y2="10" />
          <line x1="10" y1="4" x2="10" y2="16">
            <animate
              attributeName="y1"
              dur="120ms"
              from="${this.isOpen?"4":"10"}"
              to="${this.isOpen?"10":"4"}"
              begin="details.toggle"
              fill="freeze"
            />
            <animate
              attributeName="y2"
              dur="120ms"
              from="${this.isOpen?"16":"10"}"
              to="${this.isOpen?"10":"16"}"
              begin="details.toggle"
              fill="freeze"
            />
          </line>
        </svg>
      </summary>
      <div class="content">
        <slot></slot>
      </div>
    </details> `}};o.styles=[M,N];i([u()],o.prototype,"summary",2);i([u()],o.prototype,"name",2);i([u({type:Boolean,reflect:!0})],o.prototype,"open",2);i([u({type:String})],o.prototype,"size",2);i([k()],o.prototype,"isOpen",2);o=i([_("gds-accordion")],o);const Y={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...s,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},d={...s,name:"Name",parameters:{...s.parameters,controls:{include:[]}},render:t=>h`
    <gds-flex min-width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Ungrouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  `},m={...s,name:"Open",parameters:{...s.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:t=>h`
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
  `},l={...s,name:"Size",parameters:{...s.parameters,controls:{include:[]},docs:{description:{story:`
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `}}},render:t=>h`
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
  `};var x,f,y,b,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var w,L,E,O,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Name',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex min-width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
        </gds-flex>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Ungrouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
          <gds-accordion summary="Example">
            <gds-rich-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-rich-text>
          </gds-accordion>
        </gds-flex>
      </gds-flex>
    </gds-flex>
  \`
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.description}}};var z,S,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(S=m.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,T,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(T=l.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Z=["accordion","Name","Open","Size"];export{d as Name,m as Open,l as Size,Z as __namedExportsOrder,r as accordion,Y as default};
