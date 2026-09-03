import{j as a}from"./jsx-runtime-u17CrQMm.js";import{S as _,T as j,a as T,b as i,c as f,d as g,e as h}from"./Table-CQPe_WP_.js";import{e as m}from"./iframe-CSOxlsOt.js";function P(o=[],s,c){const t=window.navigator?.languages||["sw","en"];return[...o].sort((e,r)=>{let n=0;return c===_.ASC?isNaN(r[s])&&isNaN(e[s])?n=String(e[s]).localeCompare(String(r[s]),t,{sensitivity:"base",ignorePunctuation:!0}):n=e[s]-r[s]:isNaN(r[s])&&isNaN(e[s])?n=String(r[s]).localeCompare(String(e[s]),t,{sensitivity:"base",ignorePunctuation:!0}):n=r[s]-e[s],n})}function H(o,s,c,t){const l=o.target;let e=!0,r=!1;const n=s?.map(d=>((d[c]===t||t==="all")&&(d.checked=l.checked),e=e&&d.checked,r=r||d.checked,d));return{data:n,isAllSelected:!!n&&e,isIndeterminate:r&&!e}}const p=[{children:"#",accessor:"id"},{children:"First name",accessor:"firstName"},{children:"Last name",accessor:"lastName"},{children:"Superhero",accessor:"superHero"}],y=[{id:"1",firstName:"Peter",lastName:"Parker",superHero:"Spider-man",expanded:!1,checked:!1,rowContentDetails:[{id:"1",firstName:"Peter",lastName:"Parker",superHero:"Spider-man"}]},{id:"2",firstName:"John",lastName:"Wayne",superHero:"Batman",expanded:!1,checked:!1,rowContentDetails:[{id:"1",firstName:"Peter",lastName:"Parker",superHero:"Spider-man"}]},{id:"3",firstName:"Bruce",lastName:"Banner",superHero:"Hulk",expanded:!1,checked:!1,rowContentDetails:[{id:"1",firstName:"Peter",lastName:"Parker",superHero:"Spider-man"}]}],k=()=>{const[o,s]=m.useState(y),[c,t]=m.useState(null),l=e=>{t(e),e&&s(P(o,e.accessor,e.sortDirection))};return a.jsxs(j,{sortedColumn:c,onSort:l,children:[a.jsx(T,{children:a.jsx(i,{children:p.map((e,r)=>a.jsx(f,{...e},r))})}),a.jsx(g,{children:o.map((e,r)=>a.jsx(i,{children:p.map((n,d)=>a.jsx(h,{children:e[n.accessor]},d))},r))})]})},D=()=>{const[o,s]=m.useState(y),[c,t]=m.useState({checked:!1,indeterminate:!1}),l=(e,r)=>{const{data:n,isAllSelected:d,isIndeterminate:E}=H(e,o,"id",r);t({checked:d,indeterminate:E}),s(n)};return a.jsxs(j,{onRowSelect:l,children:[a.jsx(T,{children:a.jsx(i,{...c,children:p.map((e,r)=>a.jsx(f,{...e},r))})}),a.jsx(g,{children:o.map((e,r)=>a.jsx(i,{uniqueKey:e.id,checked:e.checked,children:p.map((n,d)=>a.jsx(h,{children:e[n.accessor]},d))},r))})]})},N=()=>{const[o,s]=m.useState(y),c=(t,l)=>{s(e=>e.map(r=>r.id===l?{...r,expanded:t}:r))};return a.jsxs(j,{onRowExpand:c,children:[a.jsx(T,{children:a.jsx(i,{children:p.map((t,l)=>a.jsx(f,{...t},l))})}),a.jsx(g,{children:o.map((t,l)=>a.jsxs(m.Fragment,{children:[a.jsx(i,{uniqueKey:t.id,isExpanded:t.expanded,children:p.map((e,r)=>a.jsx(h,{children:t[e.accessor]},r))}),t.rowContentDetails?.map(e=>a.jsx(i,{isSubRow:!0,uniqueKey:e.id,isExpanded:e.expanded,children:p.map((r,n)=>a.jsx(h,{children:e[r.accessor]},n))},e.id))]},l))})]})};k.__docgenInfo={description:"",methods:[],displayName:"SortableTable"};D.__docgenInfo={description:"",methods:[],displayName:"SelectableTable"};N.__docgenInfo={description:"",methods:[],displayName:"ExpandableTable"};const C=()=>a.jsx("div",{className:"my-5",children:a.jsxs(j,{children:[a.jsx(T,{children:a.jsx(i,{children:p.map((o,s)=>a.jsx(f,{...o},s))})}),a.jsx(g,{children:y.map((o,s)=>a.jsx(i,{children:p.map((c,t)=>a.jsx(h,{children:o[c.accessor]},t))},s))})]})}),A={title:"Components/Table",component:j},b={render:C.bind({}),name:"Table",parameters:{componentIds:["component-table"]}},x={render:()=>a.jsx(k,{}),name:"Sortable table",parameters:{componentIds:["component-sortable"]}},u={render:()=>a.jsx(D,{}),name:"Selectable table",parameters:{componentIds:["component-selectable"]}},S={render:()=>a.jsx(N,{}),name:"Expandable table",parameters:{componentIds:["component-expandable"]}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Table',
  parameters: {
    componentIds: ['component-table']
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <SortableTable />,
  name: 'Sortable table',
  parameters: {
    componentIds: ['component-sortable']
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SelectableTable />,
  name: 'Selectable table',
  parameters: {
    componentIds: ['component-selectable']
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableTable />,
  name: 'Expandable table',
  parameters: {
    componentIds: ['component-expandable']
  }
}`,...S.parameters?.docs?.source}}};const R=["Default","SortableTableStory","SelectableTableStory","ExpandableTableStory"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:b,ExpandableTableStory:S,SelectableTableStory:u,SortableTableStory:x,__namedExportsOrder:R,default:A},Symbol.toStringTag,{value:"Module"}));export{b as D,S as E,x as S,I as T,u as a,p as c,y as r};
