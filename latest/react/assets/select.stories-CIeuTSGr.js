import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as d,O as n,a as p}from"./select-ole1q_Gf.js";const a=({children:u,...c})=>e.jsx(d,{...c,children:u}),m={title:"Components/Select",component:d,argTypes:{id:{name:"id",type:{name:"string",required:!1},description:"Id for select element",table:{type:{summary:"string"}},control:{type:"text"}},className:{name:"className",type:{name:"string",required:!1},description:"Label for the select element",table:{type:{summary:"string"}},control:{type:"text"}},label:{name:"label",type:{name:"string",required:!1},defaultValue:"Select label",description:"Label for the select element",table:{type:{summary:"string"}},control:{type:"text"}},labelInformation:{name:"labelInformation",type:{name:"string",required:!1},defaultValue:"Select label information",description:"Label information for the select element",table:{type:{summary:"string"}},control:{type:"text"}},children:{name:"children",type:{name:"ReactNode",required:!1},description:"Children of Select component, should be SelectOptions",table:{type:{summary:"ReactNode"}},control:{type:null}},name:{name:"name",type:{name:"string"},description:"This will be used for the name attribute on the select element",table:{type:{summary:"string"}},control:{type:"text"}}}},l={render:a.bind({}),name:"With options",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:1,children:"1"}),e.jsx(n,{value:2,children:"2"}),e.jsx(n,{value:3,children:"3"}),e.jsx(n,{value:4,children:"4"}),e.jsx(n,{value:5,children:"5"}),e.jsx(n,{value:6,children:"6"}),e.jsx(n,{value:7,children:"7"}),e.jsx(n,{value:8,children:"8"})]}),name:"my-select"}},o={render:a.bind({}),name:"With placeholder",args:{defaultValue:"placeholder",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"placeholder",hidden:!0,children:"Placeholder"}),e.jsx(n,{value:2,children:"Label 2"}),e.jsx(n,{value:3,children:"Label 3"}),e.jsx(n,{value:4,children:"Label 4"})]})}},t={render:a.bind({}),name:"With option groups",args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(p,{label:"First group",children:[e.jsx(n,{value:1,children:"Label 1"}),e.jsx(n,{value:2,children:"Label 2"}),e.jsx(n,{value:3,children:"Label 3"}),e.jsx(n,{value:4,children:"Label 4"})]}),e.jsxs(p,{label:"Second group",children:[e.jsx(n,{value:1,children:"Label 1"}),e.jsx(n,{value:2,children:"Label 2"}),e.jsx(n,{value:3,children:"Label 3"}),e.jsx(n,{value:4,children:"Label 4"})]})]})}},i={render:a.bind({}),name:"With disabled group",args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(p,{label:"First group",children:[e.jsx(n,{value:1,children:"Label 1"}),e.jsx(n,{value:2,children:"Label 2"}),e.jsx(n,{value:3,children:"Label 3"}),e.jsx(n,{value:4,children:"Label 4"})]}),e.jsxs(p,{label:"Second group",disabled:!0,children:[e.jsx(n,{value:1,children:"Label 1"}),e.jsx(n,{value:2,children:"Label 2"}),e.jsx(n,{value:3,children:"Label 3"}),e.jsx(n,{value:4,children:"Label 4"})]})]})}},r={render:a.bind({}),name:"With validation",args:{label:"How many will live in your house?",validator:{indicator:"error",message:"You need to select how many live in your house"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:1,children:"Label 1"}),e.jsx(n,{value:2,children:"Label 2"}),e.jsx(n,{value:3,children:"Label 3"}),e.jsx(n,{value:4,children:"Label 4"})]})}},s={render:a.bind({}),name:"Expandable information",args:{label:"How many will live in your house?",labelInformation:"Include both children and adults",expandableInfo:"In order for us to give a correct estimation we need you to enter how many will live in your house",expandableInfoButtonLabel:"Toggle additional information",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:1,children:"1"}),e.jsx(n,{value:2,children:"2"}),e.jsx(n,{value:3,children:"3"}),e.jsx(n,{value:4,children:"4"}),e.jsx(n,{value:5,children:"5"}),e.jsx(n,{value:6,children:"6"}),e.jsx(n,{value:7,children:"7"}),e.jsx(n,{value:8,children:"8"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'With options',
  args: {
    children: <>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
        <Option value={6}>6</Option>
        <Option value={7}>7</Option>
        <Option value={8}>8</Option>
      </>,
    name: 'my-select'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'With placeholder',
  args: {
    defaultValue: 'placeholder',
    children: <>
        <Option value={'placeholder'} hidden>
          Placeholder
        </Option>
        <Option value={2}>Label 2</Option>
        <Option value={3}>Label 3</Option>
        <Option value={4}>Label 4</Option>
      </>
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'With option groups',
  args: {
    children: <>
        <OptionGroup label="First group">
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
        <OptionGroup label="Second group">
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
      </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'With disabled group',
  args: {
    children: <>
        <OptionGroup label="First group">
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
        <OptionGroup label="Second group" disabled={true}>
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
      </>
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'With validation',
  args: {
    label: 'How many will live in your house?',
    validator: {
      indicator: 'error',
      message: 'You need to select how many live in your house'
    },
    children: <>
        <Option value={1}>Label 1</Option>
        <Option value={2}>Label 2</Option>
        <Option value={3}>Label 3</Option>
        <Option value={4}>Label 4</Option>
      </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Expandable information',
  args: {
    label: 'How many will live in your house?',
    labelInformation: 'Include both children and adults',
    expandableInfo: 'In order for us to give a correct estimation we need you to enter how many will live in your house',
    expandableInfoButtonLabel: 'Toggle additional information',
    children: <>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
        <Option value={6}>6</Option>
        <Option value={7}>7</Option>
        <Option value={8}>8</Option>
      </>
  }
}`,...s.parameters?.docs?.source}}};const h=["WithOptions","WithPlaceholder","WithOptionGroups","WithDisabledGroup","WithValidation","ExpandableInformation"],v=Object.freeze(Object.defineProperty({__proto__:null,ExpandableInformation:s,WithDisabledGroup:i,WithOptionGroups:t,WithOptions:l,WithPlaceholder:o,WithValidation:r,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{s as E,v as S,l as W,o as a,t as b,i as c,r as d};
