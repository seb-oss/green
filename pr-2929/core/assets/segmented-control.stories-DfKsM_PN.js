import{b as a}from"./iframe-Bezf6Gyf.js";import"./flex-BqOBLMZE.js";import{a as o}from"./argTableProps-BQjuOeV1.js";import"./segmented-control-BEOoKotk.js";import"./segment-C7H6z9ku.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-9-nqFDSl.js";import"./localized-decorator-CGBAhD8S.js";import"./resize-observer-CfkbZofs.js";import"./chevron-left.component-BTe5Yppw.js";import"./icon.component-DigpYCmp.js";import"./chevron-right.component-RQ-tRe_n.js";const x={title:"Components/Segmented control",component:"gds-segmented-control",subcomponents:{GdsSegment:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

SegmentedControl allows users to select a single option, immediately changing the display to reflect their selection. It is used for switching views or view options, not for navigation.`}}},tags:["autodocs"],argTypes:{...o("gds-segmented-control")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},g={...d},e={...d,render:r=>a`
    <gds-segmented-control
      value="2"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  `},s={...d,render:r=>a`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},n={...d,render:r=>a`
    <div style="width:90vw; max-width: 556px;">
      <gds-segmented-control value="1">
        <gds-segment value="1" min-width="200px">Min-width</gds-segment>
        <gds-segment value="flaschenabfüllmaschine" max-width="150px"
          >Flaschenabfüllmaschine</gds-segment
        >
        <gds-segment value="longlonglong">Long long label</gds-segment>
        <gds-segment value="longlabel">An even longer long label</gds-segment>
        <gds-segment value="pinetrees">Pinetrees</gds-segment>
      </gds-segmented-control>
    </div>
  `},t={...d,name:"ARIA Forwarding",render:()=>a`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="segmented-label">Select a view</div>
      <div id="segmented-description">Choose between list and grid layouts</div>
      <gds-segmented-control
        gds-aria-labelledby="segmented-label"
        gds-aria-describedby="segmented-description"
      >
        <gds-segment value="list">List</gds-segment>
        <gds-segment value="grid">Grid</gds-segment>
        <gds-segment value="table">Table</gds-segment>
      </gds-segmented-control>
    </gds-flex>
  `};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...g.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control
      value="2"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  \`
}`,...e.parameters?.docs?.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...s.parameters?.docs?.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="width:90vw; max-width: 556px;">
      <gds-segmented-control value="1">
        <gds-segment value="1" min-width="200px">Min-width</gds-segment>
        <gds-segment value="flaschenabfüllmaschine" max-width="150px"
          >Flaschenabfüllmaschine</gds-segment
        >
        <gds-segment value="longlonglong">Long long label</gds-segment>
        <gds-segment value="longlabel">An even longer long label</gds-segment>
        <gds-segment value="pinetrees">Pinetrees</gds-segment>
      </gds-segmented-control>
    </div>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Segments can have different widths depending on the content, and if there are too many\nsegments to fit in the container, scroll buttons will appear to the left and/or right.\n\nSegment with can also be controlled individually on the segments using the `width`,\n`min-width` and `max-width` Style Expression properties.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="400px">
      <div id="segmented-label">Select a view</div>
      <div id="segmented-description">Choose between list and grid layouts</div>
      <gds-segmented-control
        gds-aria-labelledby="segmented-label"
        gds-aria-describedby="segmented-description"
      >
        <gds-segment value="list">List</gds-segment>
        <gds-segment value="grid">Grid</gds-segment>
        <gds-segment value="table">Table</gds-segment>
      </gds-segmented-control>
    </gds-flex>
  \`
}`,...t.parameters?.docs?.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal segmented control.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...t.parameters?.docs?.description}}};const S=["Basic","Usage","Small","SegmentSize","AriaForwarding"];export{t as AriaForwarding,g as Basic,n as SegmentSize,s as Small,e as Usage,S as __namedExportsOrder,x as default};
