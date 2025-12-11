import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as w}from"./card-DAydkd46.js";import{r as y}from"./iframe-BMDUfR-u.js";const s=n=>null,p=({list:n,onTabChange:c,children:r})=>{const[i,C]=y.useState(v()),b=a=>{if(a.preventDefault(),a.currentTarget.ariaDisabled!=="true"){const t=parseInt(a.currentTarget.dataset.indexNumber);C(t),c&&c(t)}};function v(){let a=0;return r?a=r.findIndex(t=>t.props.selected):n&&(a=n.findIndex(t=>t.selected)),a!==-1?a:0}return e.jsxs(e.Fragment,{children:[e.jsxs("nav",{role:"tablist",children:[!r&&(n==null?void 0:n.map((a,t)=>e.jsx("a",{href:a.disabled?void 0:a.href||"#",onClick:b,role:"tab","data-index-number":t,"aria-disabled":a.disabled,"aria-selected":i===t,children:a.text},t))),r==null?void 0:r.map((a,t)=>e.jsx("a",{href:a.props.disabled?void 0:a.props.href||"#",onClick:b,role:"tab","data-index-number":t,"aria-disabled":a.props.disabled,"aria-selected":i===t,children:a.props.title},t))]}),e.jsxs("section",{children:[!r&&(n==null?void 0:n.map((a,t)=>e.jsx("article",{role:"tabpanel","aria-hidden":i!==t,children:a.text},t))),r==null?void 0:r.map((a,t)=>e.jsx("article",{role:"tabpanel","aria-hidden":i!==t,children:i===t&&a.props.children},t))]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"IList"}],raw:"IList[]"},description:"**Deprecated**\n@deprecated use `<Tab>` child components instead"},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabProps"}],raw:"ReactElement<TabProps>"}],raw:"ReactElement<TabProps>[]"},description:""}}};const m=({children:n,...c})=>e.jsx(w,{children:e.jsx(p,{...c,children:n})}),D={title:"Components/Tabs",component:p},d={render:m.bind({}),name:"Tabs",parameters:{componentIds:["component-tabs"]},args:{children:[e.jsx(s,{title:"Page 1",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"pt-5",children:"Tab content will only render when a tab is selected."}),e.jsx("p",{children:"If you need to pre-load data, do it separately outside of the component that is rendered in the tab."})]})}),e.jsx(s,{title:"Page 2",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"pt-5",children:"Page 2 is a component"}),e.jsx("p",{className:"pt-4",children:"With more comlpex content."})]})}),e.jsx(s,{title:"Page 3",children:e.jsx("p",{className:"pt-5",children:"Page 3, simple text content."})}),e.jsx(s,{title:"Page 4",children:e.jsx("p",{className:"pt-5",children:"Page 4, simple text content."})})]}},l={render:m.bind({}),name:"Default selection",args:{children:[e.jsx(s,{title:"Page 1",children:e.jsx("div",{className:"pt-5",children:"Page 1 Content, with spacing."})}),e.jsx(s,{title:"Page 2",children:e.jsx("div",{className:"pt-5",children:"Page 2 Content, with spacing."})}),e.jsx(s,{title:"Page 3",children:"Page 3 Content, no spacing."}),e.jsx(s,{title:"Page 4",selected:!0,children:e.jsxs("div",{className:"pt-5",children:["Page 4 Content, set as selected."," "]})})]}},o={render:m.bind({}),name:"Disabled tabs",args:{children:[e.jsx(s,{title:"Page 1",children:e.jsx("div",{className:"pt-5",children:"Page 1 Content, with spacing."})}),e.jsx(s,{title:"Page 2",children:e.jsx("div",{className:"pt-5",children:"Page 2 Content, with spacing."})}),e.jsx(s,{title:"Page 3",disabled:!0,children:"Page 3 Content."}),e.jsx(s,{title:"Page 4",disabled:!0,children:"Page 4 Content."})]}};var g,h,T;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Tabs',
  parameters: {
    componentIds: ['component-tabs']
  },
  args: {
    children: [<Tab title={'Page 1'}>
        <>
          <p className="pt-5">Tab content will only render when a tab is selected.</p>
          <p>
            If you need to pre-load data, do it separately outside of the
            component that is rendered in the tab.
          </p>
        </>
      </Tab>, <Tab title={'Page 2'}>
        <>
          <h2 className="pt-5">Page 2 is a component</h2>
          <p className="pt-4">With more comlpex content.</p>
        </>
      </Tab>, <Tab title={'Page 3'}>
        <p className="pt-5">Page 3, simple text content.</p>
      </Tab>, <Tab title={'Page 4'}>
        <p className="pt-5">Page 4, simple text content.</p>
      </Tab>]
  }
}`,...(T=(h=d.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var P,u,x;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Default selection',
  args: {
    children: [<Tab title={'Page 1'}>
        <div className="pt-5">Page 1 Content, with spacing.</div>
      </Tab>, <Tab title={'Page 2'}>
        <div className="pt-5">Page 2 Content, with spacing.</div>
      </Tab>, <Tab title={'Page 3'}>
        Page 3 Content, no spacing.
      </Tab>, <Tab title={'Page 4'} selected>
        <div className="pt-5">Page 4 Content, set as selected.{' '}</div>
      </Tab>]
  }
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,f,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Disabled tabs',
  args: {
    children: [<Tab title={'Page 1'}>
        <div className="pt-5">Page 1 Content, with spacing.</div>
      </Tab>, <Tab title={'Page 2'}>
        <div className="pt-5">Page 2 Content, with spacing.</div>
      </Tab>, <Tab title={'Page 3'} disabled>
        Page 3 Content.
      </Tab>, <Tab title={'Page 4'} disabled>
        Page 4 Content.
      </Tab>]
  }
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const I=["Default","DefaultSelection","DisabledTabs"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:d,DefaultSelection:l,DisabledTabs:o,__namedExportsOrder:I,default:D},Symbol.toStringTag,{value:"Module"}));export{d as D,R as T,l as a,o as b};
