import{b as a}from"./iframe-DeOIKC_g.js";import"./flex-D8BmS7bA.js";import{a as L}from"./argTableProps-BnOVaxed.js";import"./segmented-control-DigePvYf.js";import"./segment-CI7Yz86b.js";import"./preload-helper-Dp1pzeXC.js";import"./flex.component-BS1lVn8F.js";import"./localized-decorator-D52bHqJ7.js";import"./resize-observer-B9k8v2TZ.js";import"./chevron-left.component-DTVWJq2q.js";import"./icon.component-CSi_XagT.js";import"./chevron-right.component-CZtMwt86.js";const J={title:"Components/Segmented control",component:"gds-segmented-control",subcomponents:{GdsSegment:"gds-segment"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/segmented-control)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-segmented-control)

SegmentedControl allows users to select a single option, immediately changing the display to reflect their selection. It is used for switching views or view options, not for navigation.`}}},tags:["autodocs"],argTypes:{...L("gds-segmented-control")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{size:{control:{type:"text"}}},args:{innerHTML:`<gds-segment value="1">Item 1</gds-segment>
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
  `};var o,l,i;g.parameters={...g.parameters,docs:{...(o=g.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(i=(l=g.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,c,p,u,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"The `gds-segmented-control` element has a value-property that corresponds to the value of the selected segment.\nEach segment also needs to have a unique value-property set so thateach can be distinguished.",...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};var h,b,w,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-segmented-control size="small" value="2">
      <gds-segment value="1">First</gds-segment>
      <gds-segment value="2">Second</gds-segment>
      <gds-segment value="3">Third</gds-segment>
    </gds-segmented-control>
  \`
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"There is a small and a medium version which can be configured using the `size` attribute.",...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var x,S,F,T,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(S=n.parameters)==null?void 0:S.docs)==null?void 0:F.source},description:{story:"Segments can have different widths depending on the content, and if there are too many\nsegments to fit in the container, scroll buttons will appear to the left and/or right.\n\nSegment with can also be controlled individually on the segments using the `width`,\n`min-width` and `max-width` Style Expression properties.",...(A=(T=n.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var I,P,D,z,E;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(P=t.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:"Demonstrates ARIA forwarding, allowing external labels and descriptions to be associated with the internal segmented control.\nUses `gds-aria-labelledby` and `gds-aria-describedby` to wire up external accessibility text.",...(E=(z=t.parameters)==null?void 0:z.docs)==null?void 0:E.description}}};const K=["Basic","Usage","Small","SegmentSize","AriaForwarding"];export{t as AriaForwarding,g as Basic,n as SegmentSize,s as Small,e as Usage,K as __namedExportsOrder,J as default};
