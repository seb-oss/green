import{x as t}from"./iframe-iTp6uJWY.js";import"./details-CalwyJFs.js";import"./text-CcUR_mMe.js";import"./card-DN2oGusX.js";import"./flex-CCIVfaSE.js";import"./link-CV4RKDgW.js";import"./rich-text-BL1UV5uk.js";import"./chevron-top-CcHVa2Rf.js";import"./chevron-bottom-CR1_PZti.js";import"./details.component-m9ll48dQ.js";import"./default-typography.styles-CdOQY8qz.js";import"./card.component-DGl-TPP7.js";import"./flex.component-nuwIDH92.js";import"./props-link-Rpc7hPgz.js";import"./rich-text.component-CNmKIhdP.js";import"./chevron-top.component-B5XSmnsj.js";import"./icon.component-CSYMpqUX.js";import"./chevron-bottom.component-C2LDygFW.js";const b={title:"Components/Details",component:"gds-details",tags:["autodocs"],argTypes:{summary:{description:"The text displayed in the details header",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Summary"}}},name:{description:"Groups detailss together. Detailss with the same name will close each other when opened",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},open:{description:"Controls if the details is expanded",control:"boolean",table:{type:{summary:"boolean"}}},size:{description:"Controls the size of the details",control:{type:"select",options:["large","small"]},table:{type:{summary:'"large" | "small"'},defaultValue:{summary:"large"}}}},parameters:{docs:{description:{component:`The details component is a collapsible section that helps organize and hide content until needed.

Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: detailss with the same name will close each other automatically
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},w={...e,args:{summary:"Click to expand",innerHTML:"Details content goes here"}},L={...e,name:"Grouped",parameters:{docs:{description:{story:`
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`

`}}},render:()=>t`
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
  `},C={...e,name:"Sizes",parameters:{docs:{description:{story:`
The details component supports two sizes: large(default) and small.

\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`

        `}}},render:()=>t`
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
  `},z={...e,name:"Rich Content",parameters:{docs:{description:{story:"Detailss can contain any type of content, including other components."}}},render:()=>t`
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
  `},I={...e,name:"Initially Open",parameters:{docs:{description:{story:`
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`

        `}}},render:()=>t`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `},S=["Default","Grouped","Sizes","RichContent","InitiallyOpen"];export{w as Default,L as Grouped,I as InitiallyOpen,z as RichContent,C as Sizes,S as __namedExportsOrder,b as default};
