import{j as A}from"./jsx-runtime-D_zvdyIk.js";import{D as C}from"./dropdown-Q4r3fe3b.js";const a=({align:e,...t})=>A.jsx(C,{...t}),L={title:"Components/Dropdown",component:C},n={render:a.bind({}),name:"Dropdown",parameters:{componentIds:["component-dropdown"]},args:{options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:e=>{console.log("OnChange",e)},label:"Dropdown label",syncPopoverWidth:!1}},l={name:"TextAndPlaceholder",render:a.bind({}),args:{texts:{placeholder:"Select me please!"},label:"Awesome label!!",informationLabel:"Awesome informationLabel!!",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(e,t)=>e.id===t.id,onChange:e=>console.log("OnChange",e)}},s={name:"OptionHeadings",render:a.bind({}),args:{label:"Option headings",options:[{label:"Lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",heading:!0},{label:"Burger",value:"burger"},{label:"Pasta",value:"pasta"},{label:"Ramen",value:"ramen"}]}},o={name:"MultiSelect",render:a.bind({}),args:{label:"Multi Select",multiSelect:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}},r={name:"Small",render:a.bind({}),args:{label:"Small dropdown",size:"small",hideLabel:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}},i={render:a.bind({}),args:{label:"Dropdown with validation",options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],validator:{message:"This is an error message",indicator:"error"}}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,v,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var z,S,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,P,D;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(P=r.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var f,O,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(O=i.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const M=["Default","TextAndPlaceholder","OptionHeadings","MultiSelect","Small","WithValidation"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MultiSelect:o,OptionHeadings:s,Small:r,TextAndPlaceholder:l,WithValidation:i,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{k as D,o as M,s as O,r as S,l as T,n as a};
