import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Ce4N3Qt2.js";import{M as p,C as u,a as s}from"./blocks-BU-Qk8I7.js";import{C as c,M as t}from"./context-menu-wd7qhUOe.js";import{C as x,D as j}from"./context-menu.stories-Cj3gs_QW.js";import{C as b,G as l,a as m,b as a}from"./index-D5CPAOiW.js";import"./iframe-CvnAE0Jk.js";import"./index-drF52G3B.js";import"./create-component-CPRSibq9.js";import"./context-menu.component-ByHINk2l.js";import"./tokens.style-CRBPQR2S.js";import"./transitional-styles-AQBOz2Qb.js";import"./runtime-nRyYmvPb.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./unwrap-slots-Bw0-dRwp.js";import"./icon.component-BzQWnnPR.js";import"./button.component-BYe_GDsa.js";import"./class-map-DB6DioQt.js";import"./dot-grid-one-horizontal.component-BWrhvjRc.js";import"./popover.component-Dglp6Lcb.js";import"./cross-small.component-B3ZruKuv.js";import"./alert.component-CDc_tb3b.js";import"./dropdown.component-BO_IxCQ9.js";import"./triangle-exclamation.component-B7w-7WrF.js";import"./chevron-bottom.component-DZmgqzRx.js";import"./checkmark.component-BELzHkcT.js";import"./circle-check.component-CbDUoBc9.js";import"./index-37rzCoHf.js";import"./chevron-right.component-DYvods92.js";import"./datepicker.component-M3kYR-00.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CAOKGPyz.js";import"./index-_GkbJROZ.js";import"./filter-chips.component-0EX8zFGy.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-B2pt1qOp.js";import"./segmented-control.component-C_r1Nyfi.js";import"./index-CvOVOkVI.js";function h(o){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return b||i("Core",!1),l||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),a||i("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:x}),`
`,e.jsx(a,{children:e.jsx(m,{margin:"xl 0",children:e.jsxs(l,{variant:"notice",children:[e.jsx(n.strong,{children:"Note:"})," This version of Context Menu is deprecated! Please use the ",e.jsx(n.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-context-menu--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(n.h1,{id:"context-menu",children:"Context Menu"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/seb-oss/green/tree/main/libs/react/src/lib/context-menu",rel:"nofollow",children:"Source code"}),`
 | 
`,e.jsx(n.a,{href:"https://designlibrary.sebgroup.com/components/component-moremenu",rel:"nofollow",children:"Usage guidelines"})]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The context menu is a clickable button that opens a menu where you can find the action connected to an area or item. This component is a wrapper and uses the ",e.jsx(n.a,{href:"https://github.com/seb-oss/green/tree/main/libs/core/src/components/context-menu",rel:"nofollow",children:"Green Core Context Menu"})," component under the hood."]}),`
`,e.jsx(n.h2,{id:"importing-the-component",children:"Importing the component"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"ContextMenu"})," component, you need to import the component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ContextMenu } from '@sebgroup/green-react/src/lib/context-menu'
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["In the example below, we are listening to the ",e.jsx(n.code,{children:"onMenuItemClick"})," event on the ",e.jsx(n.code,{children:"ContextMenu"})," component.",e.jsx(n.br,{}),`
`,"(",e.jsx(n.code,{children:"onMenuItemClick={(e) => console.log(e)}"}),")"]}),`
`,e.jsx(u,{of:j}),`
`,e.jsxs(n.p,{children:["A more typical usage would be to listen to ",e.jsx(n.code,{children:"onClick"})," events on individual ",e.jsx(n.code,{children:"MenuItem"}),"s, while mapping to your specific data:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ContextMenu buttonLabel="Choose an action">
  {myListOfActions.map((action) => (
    <MenuItem key={action.id} onClick={() => console.log(action.id)}>
      {action.name}
    </MenuItem>
  ))}
</ContextMenu>
`})}),`
`,e.jsx(n.h3,{id:"show-label",children:"Show label"}),`
`,e.jsxs(n.p,{children:["You can show the label by setting the ",e.jsx(n.code,{children:"showLabel"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(c,{showLabel:!0,buttonLabel:"Choose an action",onMenuItemClick:r=>console.log(r),children:[e.jsx(t,{children:"Action 1"}),e.jsx(t,{children:"Action 2"}),e.jsx(t,{children:"Action 3"})]}),`
`,e.jsx(n.h3,{id:"custom-menu-item-content",children:"Custom menu item content"}),`
`,e.jsxs(n.p,{children:["You can put any type of content within the ",e.jsx(n.code,{children:"MenuItem"})," component, including icons, images, or other components."]}),`
`,e.jsxs(c,{label:"Choose an action",onMenuItemClick:r=>console.log(r),children:[e.jsx(t,{children:"Action 1"}),e.jsx(t,{children:"Action 2"}),e.jsx(t,{children:"Action 3"})]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(n.h3,{id:"contextmenu",children:"ContextMenu"}),`
`,e.jsx(s,{children:"\n| Prop            | Type                           | Description                                                                  |\n| :-------------- | :----------------------------- | :--------------------------------------------------------------------------- |\n| open            | `boolean`                      | control if the menu should be open or not                                    |\n| buttonLabel     | `string`                       | label for button next to icon                                                |\n| ariaLabel       | `string`                       | aria-label of icon button                                                    |\n| label           | `string`                       | List of items in the accordion                                               |\n| showLabel       | `boolean`                      | Control if the label should be visually shown                                |\n| onMenuItemClick | `(event: CustomEvent) => void` | A callback function to trigger when item is clicked, is applied to all items |\n"}),`
`,e.jsx(n.h3,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(n.h3,{id:"menuitem-1",children:"MenuItem"}),`
`,e.jsx(s,{children:`
| Prop    | Type                                | Description                                         |
| :------ | :---------------------------------- | :-------------------------------------------------- |
| onClick | \`(event: React.MouseEvent) => void\` | A callback function to trigger when item is clicked |
`})]})}function te(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(h,{...o})}):h(o)}function i(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{te as default};
