import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as i,b as o}from"./buttonGroup-8sh9sxA0.js";const v=({...x})=>a.jsxs(i,{...x,children:[a.jsx(o,{value:"value-1",label:"First label"}),a.jsx(o,{value:"value-2",label:"Second label"})]}),G={title:"Components/Form/RadioGroup",component:i},e={render:v.bind({}),name:"Default",parameters:{componentIds:["component-radiogroup"]},args:{label:"Radio group",labelInformation:"This is longer information describing the input"}},n={render:()=>a.jsxs(i,{label:"Radio Group",labelInformation:"Radio Group Description",expandableInfo:"This is a long expandable information that can be sent to the radio group component",expandableInfoButtonLabel:"Toggle additional information",children:[a.jsx(o,{label:"Radio Button 1",name:"name",value:"button1"}),a.jsx(o,{label:"Radio Button 2",name:"name",value:"button2"})]}),name:"Expandable information"},t={render:()=>a.jsxs(i,{label:"Radio Group",labelInformation:"Radio Group Description",validator:{message:"This form item is invalid! And what happens if its really long?",indicator:"error"},children:[a.jsx(o,{label:"Radio Button 1",name:"name",value:"button1"}),a.jsx(o,{label:"Radio Button 2",name:"name",value:"button2"})]}),name:"Validation"},r={render:()=>a.jsxs(i,{label:"Radio Group",labelInformation:"Radio Group Description",validator:{message:"This form item is invalid! And what happens if its really long?",indicator:"error"},horizontal:!0,children:[a.jsx(o,{label:"Radio Button 1",name:"name",value:"button1"}),a.jsx(o,{label:"Radio Button 2",name:"name",value:"button2"})]}),name:"Horizontal"};var l,s,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: RadioGroupTemplate.bind({}),
  name: 'Default',
  parameters: {
    componentIds: ['component-radiogroup']
  },
  args: {
    label: 'Radio group',
    labelInformation: 'This is longer information describing the input'
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Group" labelInformation="Radio Group Description" expandableInfo="This is a long expandable information that can be sent to the radio group component" expandableInfoButtonLabel="Toggle additional information">
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>,
  name: 'Expandable information'
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,c,R;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Group" labelInformation="Radio Group Description" validator={{
    message: 'This form item is invalid! And what happens if its really long?',
    indicator: 'error'
  }}>
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>,
  name: 'Validation'
}`,...(R=(c=t.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};var f,g,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Group" labelInformation="Radio Group Description" validator={{
    message: 'This form item is invalid! And what happens if its really long?',
    indicator: 'error'
  }} horizontal>
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>,
  name: 'Horizontal'
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const B=["Default","ExpandableInformation","Validation","Horizontal"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ExpandableInformation:n,Horizontal:r,Validation:t,__namedExportsOrder:B,default:G},Symbol.toStringTag,{value:"Module"}));export{e as D,n as E,r as H,T as R,t as V};
