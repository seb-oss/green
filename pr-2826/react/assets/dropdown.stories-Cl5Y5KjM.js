import{j as u}from"./jsx-runtime-u17CrQMm.js";import{D as c}from"./dropdown-cmMZs8-T.js";const a=({align:e,...t})=>u.jsx(c,{...t}),d={title:"Components/Dropdown",component:c},n={render:a.bind({}),name:"Dropdown",parameters:{componentIds:["component-dropdown"]},args:{options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:e=>{console.log("OnChange",e)},label:"Dropdown label",syncPopoverWidth:!1}},l={name:"TextAndPlaceholder",render:a.bind({}),args:{texts:{placeholder:"Select me please!"},label:"Awesome label!!",informationLabel:"Awesome informationLabel!!",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(e,t)=>e.id===t.id,onChange:e=>console.log("OnChange",e)}},s={name:"OptionHeadings",render:a.bind({}),args:{label:"Option headings",options:[{label:"Lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",heading:!0},{label:"Burger",value:"burger"},{label:"Pasta",value:"pasta"},{label:"Ramen",value:"ramen"}]}},o={name:"MultiSelect",render:a.bind({}),args:{label:"Multi Select",multiSelect:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}},r={name:"Small",render:a.bind({}),args:{label:"Small dropdown",size:"small",hideLabel:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}},i={render:a.bind({}),args:{label:"Dropdown with validation",options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],validator:{message:"This is an error message",indicator:"error"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Dropdown',
  parameters: {
    componentIds: ['component-dropdown']
  },
  args: {
    options: [{
      label: 'Select',
      value: null
    }, {
      label: 'Tacos',
      value: 'tacos'
    }, {
      label: 'Pizza',
      value: 'pizza'
    }, {
      label: 'Sushi',
      value: 'sushi'
    }],
    label: 'Dropdown label',
    multiSelect: false,
    searchable: false,
    texts: {
      selected: 'selected',
      placeholder: 'Select',
      close: 'Close',
      optionsDescription: 'Options'
    },
    onChange: value => {
      console.log('OnChange', value);
    },
    label: 'Dropdown label',
    syncPopoverWidth: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'TextAndPlaceholder',
  render: Template.bind({}),
  args: {
    texts: {
      placeholder: 'Select me please!'
    },
    label: 'Awesome label!!',
    informationLabel: 'Awesome informationLabel!!',
    options: [{
      label: 'Tacos',
      value: {
        id: 'tacos',
        kitchen: 'mexican'
      }
    }, {
      label: 'Pizza',
      value: {
        id: 'pizza',
        kitchen: 'italian'
      }
    }, {
      label: 'Sushi',
      value: {
        id: 'sushi',
        kitchen: 'japanese'
      }
    }],
    compareWith: (meal1, meal2) => meal1.id === meal2.id,
    onChange: value => console.log('OnChange', value)
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'OptionHeadings',
  render: Template.bind({}),
  args: {
    label: 'Option headings',
    options: [{
      label: 'Lunch',
      heading: true
    }, {
      label: 'Tacos',
      value: 'tacos'
    }, {
      label: 'Pizza',
      value: 'pizza'
    }, {
      label: 'Sushi',
      value: 'sushi'
    }, {
      label: 'Dinner',
      heading: true
    }, {
      label: 'Burger',
      value: 'burger'
    }, {
      label: 'Pasta',
      value: 'pasta'
    }, {
      label: 'Ramen',
      value: 'ramen'
    }]
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'MultiSelect',
  render: Template.bind({}),
  args: {
    label: 'Multi Select',
    multiSelect: true,
    options: [{
      label: 'Tacos',
      value: 'tacos'
    }, {
      label: 'Pizza',
      value: 'pizza'
    }, {
      label: 'Sushi',
      value: 'sushi'
    }]
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Small',
  render: Template.bind({}),
  args: {
    label: 'Small dropdown',
    size: 'small',
    hideLabel: true,
    options: [{
      label: 'Tacos',
      value: 'tacos'
    }, {
      label: 'Pizza',
      value: 'pizza'
    }, {
      label: 'Sushi',
      value: 'sushi'
    }]
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  args: {
    label: 'Dropdown with validation',
    options: [{
      label: 'Tacos',
      value: 'tacos'
    }, {
      label: 'Pizza',
      value: 'pizza'
    }, {
      label: 'Sushi',
      value: 'sushi'
    }],
    validator: {
      message: 'This is an error message',
      indicator: 'error'
    }
  }
}`,...i.parameters?.docs?.source}}};const p=["Default","TextAndPlaceholder","OptionHeadings","MultiSelect","Small","WithValidation"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MultiSelect:o,OptionHeadings:s,Small:r,TextAndPlaceholder:l,WithValidation:i,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{h as D,o as M,s as O,r as S,l as T,n as a};
