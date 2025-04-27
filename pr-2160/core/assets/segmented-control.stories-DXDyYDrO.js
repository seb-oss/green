import{x as r}from"./lit-element-Bx14lxc-.js";import{a as P}from"./argTableProps-CzMrkfXU.js";import"./segmented-control-Crul-5y7.js";import"./custom-elements-Dglz1H-e.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./tokens.style-OWC-W9l-.js";import"./transitional-styles-Ckr_5-pT.js";import"./resize-observer-B9k8v2TZ.js";import"./watch-tFciLXSI.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./chevron-right.component-B3rpjwFs.js";import"./icon-BISRwovF.js";import"./directive-CF8sV3Lr.js";const J={title:"Components/Segmented Control",component:"gds-segmented-control",subcomponents:{GdsSegment:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.`}}},tags:["autodocs"],argTypes:{...P("gds-segmented-control")}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},t={...g},e={...g,render:o=>r`
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
  `},s={...g,render:o=>r`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},n={...g,render:o=>r`
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var h,v,b,f,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var w,y,x,T,F;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Segments can have different widths depending on the content, and if there are too many\nsegments to fit in the container, scroll buttons will appear to the left and/or right.\n\nSegment with can also be controlled individually on the segments using the `width`,\n`min-width` and `max-width` Style Expression properties.",...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};const K=["Basic","Usage","Small","SegmentSize"];export{t as Basic,n as SegmentSize,s as Small,e as Usage,K as __namedExportsOrder,J as default};
