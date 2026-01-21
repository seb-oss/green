import{x as s}from"./iframe-C3UwppBg.js";import{a as n}from"./argTableProps-DVltGU8L.js";import"./segmented-control-Bc7_7g17.js";import"./segment-B_DIFkHm.js";import"./localized-decorator-r9IxuSjn.js";import"./resize-observer-B9k8v2TZ.js";import"./chevron-left.component-BZIiOPRJ.js";import"./icon.component-B-gqN3-z.js";import"./chevron-right.component-DSqmkrnj.js";const p={title:"Components/Segmented control",component:"gds-segmented-control",subcomponents:{GdsSegment:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

SegmentedControl allows users to select a single option, immediately changing the display to reflect their selection. It is used for switching views or view options, not for navigation.`}}},tags:["autodocs"],argTypes:{...n("gds-segmented-control")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},u={...e},v={...e,render:t=>s`
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
  `},h={...e,render:t=>s`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},b={...e,render:t=>s`
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
  `},S=["Basic","Usage","Small","SegmentSize"];export{u as Basic,b as SegmentSize,h as Small,v as Usage,S as __namedExportsOrder,p as default};
