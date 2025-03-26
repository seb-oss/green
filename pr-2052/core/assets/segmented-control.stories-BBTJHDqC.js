import{x as a}from"./lit-element-BTGJPccZ.js";import{a as P}from"./argTableProps-DJ3osy8N.js";import"./custom-elements-WCmTfZl-.js";const I={title:"Components/Segmented Control",component:"gds-segmented-control",subcomponents:{GdsSegment:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.`}}},tags:["autodocs"],argTypes:{...P("gds-segmented-control")}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
<gds-segment value="2">Item 2</gds-segment>
<gds-segment value="3">Item 3</gds-segment>`,value:"1"}},t={...g},e={...g,render:r=>a`
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
  `},s={...g,render:r=>a`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  `},n={...g,render:r=>a`
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
  `};var d,o,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var l,i,c,u,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var h,v,b,f,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Segments can have different widths depending on the content, and if there are too many\nsegments to fit in the container, scroll buttons will appear to the left and/or right.\n\nSegment with can also be controlled individually on the segments using the `width`,\n`min-width` and `max-width` Style Expression properties.",...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};const B=["Basic","Usage","Small","SegmentSize"];export{t as Basic,n as SegmentSize,s as Small,e as Usage,B as __namedExportsOrder,I as default};
