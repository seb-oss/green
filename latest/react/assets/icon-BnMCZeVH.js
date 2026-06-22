import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BvvjDXjm.js";import{M as k,C as i,S as w}from"./blocks-C0rWuo81.js";import{I as l,a as I,D as C}from"./icon.stories-CiBUtABw.js";import{r as v}from"./iframe-txsmeMuy.js";import{C as S,G as h,a as p,b as x}from"./index-6ZDKvCrK.js";import{I as t,a as T}from"./index-mJTHNcea.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRnz6rZT.js";import"./index-DuhZW0-x.js";import"./declarative-layout-mixins-DB0GPc83.js";import"./icon.component-BDIfy52m.js";import"./index-CBCl7Z7z.js";import"./triangle-exclamation.component-CL_XKxIM.js";import"./checkmark.component-BEwi_isr.js";import"./alert.component-BTJLzQNv.js";import"./runtime-Cgryh99k.js";import"./class-map-BY9vqViY.js";import"./ref-DrhUxIs4.js";import"./button.component-r_dGdPLZ.js";import"./watch-QkQzTQuG.js";import"./when-CI7b_ccM.js";import"./transitional-styles-D09jC_VN.js";import"./card.component-DWFiwygp.js";import"./circle-check.component-CViPcpzD.js";import"./chevron-bottom.component-C9ZnmwqG.js";import"./cross-small.component-D4FuSTA9.js";import"./calender-add.component-CtQwhLgm.js";import"./chevron-right.component-BqhY3wlo.js";import"./dot-grid-one-horizontal.component-Czmi3SoK.js";const te=s=>{const{Styles:o}=d()||{};o||r("Styles",!0);const[j,u]=v.useState(""),f=n=>{u(n.target.value.toLowerCase())},b=n=>{const c=`import { ${n} } from '@sebgroup/green-react/src/lib/icon/icons/${n}.js'`,y=`<${n} />`,a=`${c}

${y}`;navigator.clipboard.writeText(a),alert(`Copied to clipboard:
${a}`)},g=Object.keys(l).filter(n=>n.toLowerCase().includes(j));return e.jsxs("div",{className:"custom-card-storybook",children:[e.jsx(o,{}),e.jsx("input",{type:"text",id:"icon-search",placeholder:"Search icons...",onChange:f}),e.jsx("div",{className:"icon-showcase",children:g.map(n=>{const c=l[n];return e.jsxs("div",{className:"icon-container",onClick:()=>b(n),children:[e.jsx(c,{}),e.jsxs("code",{children:["<",n,"/>"]})]},n)})})]})},ie=()=>e.jsx("style",{children:`
    .custom-card-storybook .icon-showcase {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 24px;
    }
    .custom-card-storybook .icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      gap: 20px;
      border-radius: 8px;
      border: 1px solid #ececec;
      padding: 32px 24px;
    }

    code {
      font-size: 10px;
    }

    .custom-card-storybook input#icon-search {
      margin-bottom: 1rem;
      padding: 0.5rem;
      width: 100%;
      box-sizing: border-box;
    }
  `});function m(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...s.components};return S||r("Core",!1),h||r("Core.GdsAlert",!0),p||r("Core.GdsDiv",!0),x||r("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(k,{of:I}),`
`,e.jsx(x,{children:e.jsx(p,{margin:"xl 0",children:e.jsxs(h,{variant:"notice",children:[e.jsx(o.strong,{children:"Note:"})," This version of Icon is deprecated! Please use the ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-icon--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(o.h1,{id:"icon",children:"Icon"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Icon"})," component is a flexible set of icon components. These allows you to use a variety of pre-defined icons in your application."]}),`
`,e.jsxs(o.p,{children:["You can customize the icons by setting the ",e.jsx(o.code,{children:"width"}),", ",e.jsx(o.code,{children:"height"}),", ",e.jsx(o.code,{children:"stroke"})," and ",e.jsx(o.code,{children:"label"})," properties."]}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.p,{children:"The react icons can be imported indivually like the example below."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { IconBank } from '@sebgroup/green-react/src/lib/icon/icons/IconBank.js'

<IconBank />
`})}),`
`,e.jsx(i,{children:e.jsx(w,{of:C})}),`
`,e.jsx(o.h2,{id:"solid-icons",children:"Solid Icons"}),`
`,e.jsxs(o.p,{children:["All icons support a boolean ",e.jsx(o.code,{children:"solid"})," prop to toggle between solid and outline icons. By default, the icons are outlined."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { IconBank } from '@sebgroup/green-react/src/lib/icon/icons/IconBank.js'

<IconBank solid />
`})}),`
`,e.jsxs(i,{children:[e.jsx(t,{}),e.jsx(t,{solid:!0})]}),`
`,e.jsx(o.h2,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(o.p,{children:["You can customize the icons by setting the ",e.jsx(o.code,{children:"width"})," and ",e.jsx(o.code,{children:"height"})," properties. If not specified it will fall back to  ",e.jsx(o.code,{children:"1lh"})," ",e.jsx(o.code,{children:"height"})," and ",e.jsx(o.code,{children:"auto"})," ",e.jsx(o.code,{children:"width"}),"."]}),`
`,e.jsxs(i,{children:[e.jsx(t,{width:"24",height:"24"}),e.jsx(t,{width:"48",height:"48"}),e.jsx(t,{width:"84",height:"84"})]}),`
`,e.jsx(o.h2,{id:"stroke",children:"Stroke"}),`
`,e.jsxs(o.p,{children:["You can change the icon stroke by setting the ",e.jsx(o.code,{children:"stroke"})," attribute."]}),`
`,e.jsx(i,{children:e.jsx(t,{stroke:"2"})}),`
`,e.jsx(o.h2,{id:"label",children:"Label"}),`
`,e.jsxs(o.p,{children:["Icons have the role of ",e.jsx(o.code,{children:"graphics-symbol"}),", and will by default have the icon name as label. You can customize the label by setting the ",e.jsx(o.code,{children:"label"})," attribute."]}),`
`,e.jsx(i,{children:e.jsx(T,{label:"This is the label for Rocket Icon"})})]})}function re(s={}){const{wrapper:o}={...d(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(m,{...s})}):m(s)}function r(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ie as Styles,te as Template,re as default};
