import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BjnLyPsG.js";import{M as p,C as u,a as s}from"./blocks-6TEFU5KA.js";import{C as c,M as t}from"./context-menu-sdbHSl0B.js";import{C as x,D as j}from"./context-menu.stories-DFg-1z9I.js";import{C as b,G as l,a as m,b as a}from"./index-CwIyOUgR.js";import"./iframe-Y-KxOYKz.js";import"./index-BhU1qnJw.js";import"./create-component-CPRSibq9.js";import"./context-menu.component-Bq3lVvcb.js";import"./tokens.style-D-4pL0_J.js";import"./transitional-styles-oO2zGOF5.js";import"./runtime-nRyYmvPb.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./unwrap-slots-TD9WxEkU.js";import"./icon.component-CHivlQJj.js";import"./button.component-C2wBx_Tr.js";import"./class-map-Db9jdZw3.js";import"./dot-grid-one-horizontal.component-CfbzSQsL.js";import"./popover.component-DsELjKfL.js";import"./cross-small.component-Dc_t4_6r.js";import"./alert.component-DSPywWDJ.js";import"./dropdown.component-C4Llwo8X.js";import"./triangle-exclamation.component-CpuTYxxw.js";import"./chevron-bottom.component-BaJxtlIt.js";import"./checkmark.component-S51zsMc0.js";import"./circle-check.component-D0teqKrp.js";import"./index-DhMPe-2Q.js";import"./chevron-right.component-iB_WCXh-.js";import"./datepicker.component-BBM15R9O.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-LhdNdAZz.js";import"./index-CmLgmK9T.js";import"./filter-chips.component-BkcUqBI1.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BVC61oiK.js";import"./segmented-control.component-DBK_9_OF.js";import"./index-C-2AFl1M.js";function h(o){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return b||i("Core",!1),l||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),a||i("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:x}),`
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
