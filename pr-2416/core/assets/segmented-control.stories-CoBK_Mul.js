import{x as o}from"./lit-element-Bx14lxc-.js";import{a as P}from"./argTableProps-Cus5HUPx.js";import"./segment-B3EppRLI.js";import"./custom-elements-DI5KxUIE.js";import"./segmented-control.component-Brwm-sDw.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./gds-element-DTROifYq.js";import"./tokens.style-BAmYQ5hh.js";import"./transitional-styles-DlCTkooe.js";import"./resize-observer-B9k8v2TZ.js";import"./watch-tFciLXSI.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./chevron-right.component-cbPv3zCv.js";import"./icon-DNXzWdP7.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";const N={title:"Components/Segmented control",component:"gds-segmented-control",subcomponents:{GdsSegment:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

SegmentedControl allows users to select a single option, immediately changing the display to reflect their selection. It is used for switching views or view options, not for navigation.`}}},tags:["autodocs"],argTypes:{...P("gds-segmented-control")}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},t={...g},e={...g,render:r=>o`
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
  `},s={...g,render:r=>o`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},n={...g,render:r=>o`
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
  `};var a,d,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,i,c,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var h,v,f,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var y,S,x,T,F;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:"Segments can have different widths depending on the content, and if there are too many\nsegments to fit in the container, scroll buttons will appear to the left and/or right.\n\nSegment with can also be controlled individually on the segments using the `width`,\n`min-width` and `max-width` Style Expression properties.",...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};const Q=["Basic","Usage","Small","SegmentSize"];export{t as Basic,n as SegmentSize,s as Small,e as Usage,Q as __namedExportsOrder,N as default};
