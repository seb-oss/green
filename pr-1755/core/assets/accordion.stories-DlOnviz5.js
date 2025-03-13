import{i as T,x}from"./lit-element-C_s9q329.js";import{n as l,g as _,G,h as M}from"./custom-element-scoping-BEGY3AqQ.js";import{t as N}from"./tokens.style-CFvqdzpw.js";import"./text-DQ_oI5A1.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./rich-text-D1VnosvF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./static-_ukc2i0J.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./div-Cnle9s5w.js";import"./observe-light-dom-CmJPHUQ4.js";const $=T`
  @layer base, reset;
  @layer base {
    details {
      border-bottom: solid var(--gds-space-4xs)
        var(--gds-color-l2-border-primary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
      transition: border-color 240ms linear;
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

    summary:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    .content {
      padding-block-end: var(--gds-space-l);
    }
  }
`;var k=Object.defineProperty,I=Object.getOwnPropertyDescriptor,s=(e,i,u,d)=>{for(var o=d>1?void 0:d?I(i,u):i,p=e.length-1,g;p>=0;p--)(g=e[p])&&(o=(d?g(i,u,o):g(o))||o);return d&&o&&k(i,u,o),o};let t=class extends G{constructor(){super(...arguments),this.summary="",this.name="",this.open=!1,this.size="large"}render(){return M`<details
      ?open=${this.open}
      @toggle=${e=>this.open=e.target.open}
      id="details"
    >
      <summary>
        <div class="label">${this.summary?this.summary:"Summary"}</div>
        <svg viewBox="0 0 20 20">
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
      </summary>
      <div class="content">
        <slot></slot>
      </div>
    </details> `}};t.styles=[N,$];s([l()],t.prototype,"summary",2);s([l()],t.prototype,"name",2);s([l({type:Boolean,reflect:!0})],t.prototype,"open",2);s([l({type:String})],t.prototype,"size",2);t=s([_("gds-accordion")],t);const Y={title:"Components/Accordion",component:"gds-accordion",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the accordion header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups accordions together. Accordions with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}},parameters:{docs:{description:{component:`
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
        `}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},a={...n,name:"Accordion",args:{innerHTML:"<p>Content</p>"}},r={...n,name:"Name",parameters:{...n.parameters,controls:{include:[]}},render:e=>x`
    <gds-flex width="100%" gap="xl">
      <gds-flex flex-direction="column" gap="xl" flex="1">
        <gds-text tag="small">Grouped</gds-text>
        <gds-flex flex-direction="column">
          <gds-accordion name="group-one" summary="Example">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
  `},c={...n,name:"Open",parameters:{...n.parameters,controls:{include:[]},docs:{description:{story:`
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
  `},m={...n,name:"Size",parameters:{...n.parameters,controls:{include:[]},docs:{description:{story:`
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
  `};var h,y,f,b,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: \`<p>Content</p>\`
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:`Basic example of an accordion component.
This story demonstrates the default usage with simple content.`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var w,L,E,q,O;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </gds-accordion>
          <gds-accordion name="group-one" summary="Example">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
}`,...(E=(L=r.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:`This story demonstrates how accordions with the same name interact with each other.<br/>
When one accordion in the group is opened, others in the same group will automatically close.

Key points:
- All accordions share the name "Name"
- Opening any accordion will close others in the group
- Each accordion maintains its own content independently
- The behavior works across Shadow DOM boundaries`,...(O=(q=r.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};var z,S,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,P,C;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const Z=["accordion","Name","Open","Size"];export{r as Name,c as Open,m as Size,Z as __namedExportsOrder,a as accordion,Y as default};
