import{b as d}from"./iframe-qeEI_uNo.js";import"./text-DsodcxuK.js";import"./details-C6H6WmVU.js";import"./card-QA4qrU39.js";import"./flex-DGp1_pDp.js";import"./link-9RsrFITN.js";import"./rich-text-Dhx9kexW.js";import"./chevron-top-GxZMlBNu.js";import"./chevron-bottom-C-paZmSi.js";import"./preload-helper-PPVm8Dsz.js";import"./text.component-p52fBAj4.js";import"./default-typography.styles-NcamnoGz.js";import"./details.component-qu7QgmWT.js";import"./card.component-C4eM_R6t.js";import"./flex.component-qh20aZsh.js";import"./props-link-CH5XUFwR.js";import"./rich-text.component-9RlAB07X.js";import"./chevron-top.component-ClGnUk2r.js";import"./icon.component-BZ0X8Nco.js";import"./chevron-bottom.component-BcgNM-XU.js";const k={title:"Components/Details",component:"gds-details",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the details header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups detailss together. Detailss with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the details is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the details",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`The details component is a collapsible section that helps organize and hide content until needed.

Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: detailss with the same name will close each other automatically
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...e,args:{summary:"Click to expand",innerHTML:"Details content goes here"}},s={...e,name:"Grouped",parameters:{docs:{description:{story:`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`

`}}},render:()=>d`
    <gds-flex flex-direction="column">
      <gds-details name="group-1" summary="First Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
    </gds-flex>
  `},i={...e,name:"Sizes",parameters:{docs:{description:{story:`
The details component supports two sizes: large(default) and small.

\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`

        `}}},render:()=>d`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
      </gds-flex>
    </gds-flex>
  `},a={...e,name:"Rich Content",parameters:{docs:{description:{story:"Detailss can contain any type of content, including other components."}}},render:()=>d`
    <gds-details summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  `},n={...e,name:"Initially Open",parameters:{docs:{description:{story:`
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`

        `}}},render:()=>d`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `},r={...e,name:"ARIA Forwarding",render:()=>d`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="details-label">Additional Settings</div>
      <div id="details-description">Configure advanced options</div>
      <gds-details
        summary="Show more"
        gds-aria-labelledby="details-label"
        gds-aria-describedby="details-description"
      >
        <gds-text>Additional configuration options go here.</gds-text>
      </gds-details>
    </gds-flex>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Details content goes here'
  }
}`,...t.parameters?.docs?.source},description:{story:"Basic example of an details component.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Grouped',
  parameters: {
    docs: {
      description: {
        story: \`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\\\`\\\`\\\`html
<gds-details name="group-1"> ... </gds-details>
\\\`\\\`\\\`

\`
      }
    }
  },
  render: () => html\`
    <gds-flex flex-direction="column">
      <gds-details name="group-1" summary="First Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
    </gds-flex>
  \`
}`,...s.parameters?.docs?.source},description:{story:"Example of grouped detailss.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: \`
The details component supports two sizes: large(default) and small.

\\\`\\\`\\\`html
<gds-details size="small"> ... </gds-details>
\\\`\\\`\\\`

        \`
      }
    }
  },
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
      </gds-flex>
    </gds-flex>
  \`
}`,...i.parameters?.docs?.source},description:{story:"Example of different size variants.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rich Content',
  parameters: {
    docs: {
      description: {
        story: 'Detailss can contain any type of content, including other components.'
      }
    }
  },
  render: () => html\`
    <gds-details summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  \`
}`,...a.parameters?.docs?.source},description:{story:"Example with rich content.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Initially Open',
  parameters: {
    docs: {
      description: {
        story: \`
Detailss can be initially opened using the open attribute.

\\\`\\\`\\\`html
 <gds-details open> ... </gds-details>
\\\`\\\`\\\`

        \`
      }
    }
  },
  render: () => html\`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Example of initially open details.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="details-label">Additional Settings</div>
      <div id="details-description">Configure advanced options</div>
      <gds-details
        summary="Show more"
        gds-aria-labelledby="details-label"
        gds-aria-describedby="details-description"
      >
        <gds-text>Additional configuration options go here.</gds-text>
      </gds-details>
    </gds-flex>
  \`
}`,...r.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal details element.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...r.parameters?.docs?.description}}};const H=["Default","Grouped","Sizes","RichContent","InitiallyOpen","AriaForwarding"];export{r as AriaForwarding,t as Default,s as Grouped,n as InitiallyOpen,a as RichContent,i as Sizes,H as __namedExportsOrder,k as default};
