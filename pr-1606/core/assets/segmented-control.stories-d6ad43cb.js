import{k as r}from"./lit-element-1d72f0ce.js";import"./segmented-control-c54846bb.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./when-748fcf30.js";import"./runtime-c06dc943.js";import"./transitional-styles-8ea9588a.js";import"./watch-c4961afe.js";import"./resize-observer-81981523.js";import"./tokens.style-01187a75.js";import"./chevron-right-f371f6a8.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";const L={title:"Docs/Components/Segmented Control",component:"gds-segmented-control",subcomponents:{MenuItem:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.`}}},tags:["autodocs"]},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},n={...g},e={...g,render:a=>r`
    <gds-segmented-control value="2" onchange="document.getElementById('sel').innerText = event.target.value">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  `},s={...g,render:a=>r`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},t={...g,render:a=>r`
    <div style="max-width: 800px">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  `};var o,d,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,l,c,u,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control value="2" onchange="document.getElementById('sel').innerText = event.target.value">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
      <gds-segment value="4">Fourth</gds-segment>
      <gds-segment value="5">Fifth</gds-segment>
    </gds-segmented-control>
    <div style="margin-top: 1rem">Selected: <span id="sel">2</span></div>
  \`
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var h,v,b,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var S,F,T,w,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="max-width: 800px">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  \`
}`,...(T=(F=t.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:"The size of the segments can be configured using the `seg-min-width` attribute. This influences\nhow many segments will be visible at the same time. If you have long segment labels and want to\navoid concatenation, you can increase the `seg-min-width` attribute. But keep in mind that the\nbest practice is to keep the segment labels short.",...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};const O=["Basic","Usage","Small","SegmentSize"];export{n as Basic,t as SegmentSize,s as Small,e as Usage,O as __namedExportsOrder,L as default};
