import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CgP_i2oT.js";import{M as p,C as u,a as s}from"./blocks-bqM9901G.js";import{C as c,M as t}from"./context-menu-BYKxFcrM.js";import{C as x,D as j}from"./context-menu.stories-Za8oKdW_.js";import{C as b,G as l,a as m,b as a}from"./index-1xFNDSNX.js";import"./iframe-DkL9EBEu.js";import"./index-D6Q5MuhT.js";import"./create-component-CPRSibq9.js";import"./context-menu.component-Tq4qO_30.js";import"./tokens.style-jEGfW-DP.js";import"./transitional-styles-CG-Bgfds.js";import"./runtime-nRyYmvPb.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./unwrap-slots-DYf-ATbn.js";import"./icon.component-BxP6a5uE.js";import"./button.component-WdXfx4e_.js";import"./class-map-B04fd3zn.js";import"./dot-grid-one-horizontal.component-DK98iYSN.js";import"./popover.component-BXMfVkzD.js";import"./cross-small.component-C_wPB7lc.js";import"./alert.component-CBvpIoZA.js";import"./dropdown.component-DzcYpTMW.js";import"./triangle-exclamation.component-B7KL1QWm.js";import"./chevron-bottom.component-DcaQZYo4.js";import"./checkmark.component-Dvq5rfbd.js";import"./circle-check.component-3aZUk-fs.js";import"./index-BW_nCQEw.js";import"./chevron-right.component-CXVSxhas.js";import"./datepicker.component-BPYEzAzo.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Cb_SsJbu.js";import"./index-BIbxHJPI.js";import"./filter-chips.component-D_h_e0Gz.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DAxesSVp.js";import"./segmented-control.component-DsgAGzmT.js";import"./index-Dno9Iw7e.js";import"./triangle-exclamation-BmCd9Vrl.js";function h(o){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return b||i("Core",!1),l||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),a||i("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:x}),`
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
`})]})}function ie(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(h,{...o})}):h(o)}function i(o,n){throw new Error("Expected "+(n?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ie as default};
