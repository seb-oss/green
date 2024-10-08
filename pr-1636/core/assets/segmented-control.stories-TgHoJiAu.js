import{k as r}from"./lit-element-BoQqPHl6.js";import"./segmented-control-D-awcPXV.js";import"./gds-element-QykLKB9o.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./when-BxLAFfhK.js";import"./runtime-CMQcyTl6.js";import"./transitional-styles-C6IQsa0n.js";import"./watch-tFciLXSI.js";import"./resize-observer-B9k8v2TZ.js";import"./tokens.style-DuOE18tp.js";import"./chevron-right-CG1bFK5r.js";import"./icon-uAHwHZ0H.js";import"./directive-Ctav8iJK.js";const L={title:"Docs/Components/Segmented Control",component:"gds-segmented-control",subcomponents:{MenuItem:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.`}}},tags:["autodocs"]},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},n={...g},e={...g,render:a=>r`
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
  `},s={...g,render:a=>r`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},t={...g,render:a=>r`
    <div style="width:100vw; max-width: 700px;">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  `};var d,o,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var i,l,c,u,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var h,v,b,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var S,w,F,T,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="width:100vw; max-width: 700px;">
      <gds-segmented-control seg-min-width="200" value="3">
        <gds-segment value="1">First</gds-segment>
        <gds-segment value="2">Unusually long label text</gds-segment>
        <gds-segment value="3">Third</gds-segment>
        <gds-segment value="4">Fourth</gds-segment>
        <gds-segment value="5">Fifth</gds-segment>
      </gds-segmented-control>
    </div>
  \`
}`,...(F=(w=t.parameters)==null?void 0:w.docs)==null?void 0:F.source},description:{story:"The size of the segments can be configured using the `seg-min-width` attribute. This influences\nhow many segments will be visible at the same time. If you have long segment labels and want to\navoid concatenation, you can increase the `seg-min-width` attribute. But keep in mind that the\nbest practice is to keep the segment labels short.",...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};const O=["Basic","Usage","Small","SegmentSize"];export{n as Basic,t as SegmentSize,s as Small,e as Usage,O as __namedExportsOrder,L as default};
