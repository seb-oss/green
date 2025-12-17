import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CzcLKo0q.js";import{M as k,C as i,S as w}from"./WithTooltip-SK46ZJ2J-Cit5rXl0.js";import{I as l,a as I,D as C}from"./icon.stories-BBWbH6uo.js";import{r as v}from"./iframe-COuXMuk9.js";import{C as S,G as h,a as p,b as m}from"./index-D0TZCXJB.js";import{I as t,a as T}from"./index-QhvJbWl1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSmiiucn.js";import"./index-B3yo5JWP.js";import"./tokens.style-Dg6fuU4Q.js";import"./icon.component-0izHq8i2.js";import"./index-C0LM8GZn.js";import"./triangle-exclamation.component-BIsgdPZ8.js";import"./checkmark.component-DrShilwa.js";import"./alert.component-CSJgPS8f.js";import"./runtime-nRyYmvPb.js";import"./class-map-Cr5-1EEf.js";import"./unwrap-slots-BtkzZUtA.js";import"./button.component-D0LMXuwJ.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BDRmubxH.js";import"./dropdown.component-c66nyet-.js";import"./popover.component-UQ_9VUTC.js";import"./cross-small.component-CuDz6vWf.js";import"./chevron-bottom.component-Dg3DuLbZ.js";import"./circle-check.component-Ct4THthC.js";import"./chevron-right.component-CAgKwSEE.js";import"./datepicker.component-Bbmq3LbZ.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BXmKvSmL.js";import"./context-menu.component-Cgz6DTA6.js";import"./dot-grid-one-horizontal.component--mfEBDly.js";import"./filter-chips.component-CgStSEmP.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DMlyz3I3.js";import"./segmented-control.component-p_0DS9xL.js";import"./triangle-exclamation-jn1whbaJ.js";const me=s=>{const{Styles:o}=d()||{};o||r("Styles",!0);const[j,u]=v.useState(""),f=n=>{u(n.target.value.toLowerCase())},b=n=>{const c=`import { ${n} } from '@sebgroup/green-react/src/lib/icon/icons/${n}.js'`,y=`<${n} />`,a=`${c}

${y}`;navigator.clipboard.writeText(a),alert(`Copied to clipboard:
${a}`)},g=Object.keys(l).filter(n=>n.toLowerCase().includes(j));return e.jsxs("div",{className:"custom-card-storybook",children:[e.jsx(o,{}),e.jsx("input",{type:"text",id:"icon-search",placeholder:"Search icons...",onChange:f}),e.jsx("div",{className:"icon-showcase",children:g.map(n=>{const c=l[n];return e.jsxs("div",{className:"icon-container",onClick:()=>b(n),children:[e.jsx(c,{}),e.jsxs("code",{children:["<",n,"/>"]})]},n)})})]})},xe=()=>e.jsx("style",{children:`
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
  `});function x(s){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...s.components};return S||r("Core",!1),h||r("Core.GdsAlert",!0),p||r("Core.GdsDiv",!0),m||r("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(k,{of:I}),`
`,e.jsx(m,{children:e.jsx(p,{margin:"xl 0",children:e.jsxs(h,{variant:"notice",children:[e.jsx(o.strong,{children:"Note:"})," This version of Icon is deprecated! Please use the ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-icon--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
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
`,e.jsx(i,{children:e.jsx(T,{label:"This is the label for Rocket Icon"})})]})}function je(s={}){const{wrapper:o}={...d(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(x,{...s})}):x(s)}function r(s,o){throw new Error("Expected "+(o?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{xe as Styles,me as Template,je as default};
