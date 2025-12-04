import{u as r,j as e,M as i}from"./iframe-BSke6BDM.js";import"./preload-helper-Dp1pzeXC.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Migration guides"}),`
`,e.jsx(n.h1,{id:"migration-guides",children:"Migration guides"}),`
`,e.jsx(n.p,{children:"This document contains instructions on how to update to each new major version from the previous version."}),`
`,e.jsx(n.p,{children:"If you need to update several versions at once, it is recommended to follow the steps for one version at a time until you reach the latest one."}),`
`,e.jsx(n.p,{children:"Before you begin, make sure you have the latest feature/patch version of your current major version."}),`
`,e.jsx(n.h2,{id:"1902-to-2xx",children:"1.90.2 to 2.x.x"}),`
`,e.jsx(n.p,{children:"This release contains several updates and refinements related to the design tokens and declarative layout system. A lot of work has gone into aligning things between code and design (Figma), in order to make the design and development process as seamless as possible for everyone."}),`
`,e.jsx(n.p,{children:"Many of the breaking changes relates to how tokens are named and used, but we also took the opporutinity to remove some old deprecations and implement some much needed refactorings."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Badge:"})," Removed disabled property in favor for making it a variant.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," use ",e.jsx(n.code,{children:'<gds-badge variant="disabled">'})," instead of ",e.jsx(n.code,{children:"<gds-badge disabled>"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Badge:"})," There is no positive variant of the notification property of the badge",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," No action necessary, but variant will be ignored when the notification property is set to true."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button:"})," Button variants ",e.jsx(n.code,{children:"brand"}),", ",e.jsx(n.code,{children:"warning"})," and ",e.jsx(n.code,{children:"notice"})," is now added. Default button variant is now ",e.jsx(n.code,{children:"neutral"})," instead of ",e.jsx(n.code,{children:"brand"})," that was before.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Add ",e.jsx(n.code,{children:'variant="brand"'})," to buttons that should have the senior green colour."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Removed ",e.jsx(n.code,{children:"shadow"})," prop from ",e.jsx(n.code,{children:"gds-card"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Use ",e.jsx(n.code,{children:"box-shadow"})," property instead of ",e.jsx(n.code,{children:"shadow"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Colors:"})," Overhaul of color tokens structure and naming conventions.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Many of the color tokens used for ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"background"}),", ",e.jsx(n.code,{children:"border-color"}),", and similar properties that accepts color tokens, have changed names. Refer to cheat sheet below for how to update the most commonly used colors."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Container:"})," Removed ",e.jsx(n.code,{children:"gds-container"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Use ",e.jsx(n.code,{children:"gds-div"})," instead."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dialog:"})," Removed overflow style by default.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," If you were relying on the overflow behavior for long content to be scrollable, you now need to add overflow styles to the slotted element instead. For example, wrap the content in a ",e.jsx(n.code,{children:"<gds-div>"})," with overflow and height set."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Divider:"})," Removed levels from Divider since it's no longer relevant due to border lot being a part of the levels structure.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," If you have been using the levels prop to control the color you should now insted use the color prop to set the possible colors on the divider. See color documentation to see possible border colors."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font:"})," ",e.jsx(n.code,{children:"font-size"})," changed to ",e.jsx(n.code,{children:"font"}),", and font tokens updated.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Change all occurences of the ",e.jsx(n.code,{children:"font-size"})," style expression property and replace with font. Add font-weight to token name. Example: ",e.jsx(n.code,{children:'<gds-text font-size="body-m">'})," --> ",e.jsx(n.code,{children:'<gds-text font="body-regular-m">'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Note:"})," Because the ",e.jsx(n.code,{children:"font"})," shorthand property includes the ",e.jsx(n.code,{children:"font-family"})," property, components now expect the ",e.jsx(n.code,{children:"SEB SansSerif GDS"})," font-family to be present, whereas before they just inherited ",e.jsx(n.code,{children:"font-family"})," from higher in the document. Make sure you import the ",e.jsx(n.code,{children:"SEB SansSerif GDS"})," font from the ",e.jsx(n.code,{children:"@sebgroup/fonts"})," package and include the font declaration CSS from there."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon:"})," Removed deprecated ",e.jsx(n.code,{children:"width"})," and ",e.jsx(n.code,{children:"height"})," properties.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Use the ",e.jsx(n.code,{children:"size"})," property instead."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spacer:"})," Removed ",e.jsx(n.code,{children:"gds-spacer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," Use ",e.jsx(n.code,{children:"gds-div"})," instead, and set height using the ",e.jsx(n.code,{children:"height"})," property."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme:"})," Default design-version of ",e.jsx(n.code,{children:"gds-theme"})," is changed to ",e.jsx(n.code,{children:"2023"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"}),' To keep 2016 style, set the design-version attribute to "2016" explicitly.']}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theme:"})," ",e.jsx(n.code,{children:"gds-theme"})," now sets the ",e.jsx(n.code,{children:"color"})," CSS property by default.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Migration step:"})," If you were relying on inheriting ",e.jsx(n.code,{children:"color"})," from higher in the document, you need to override this now by setting the ",e.jsx(n.code,{children:"color"})," CSS property explicitly."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"color-token-migration-cheat-sheet-for-the-most-commonly-used-colors",children:"Color token migration cheat-sheet for the most commonly used colors"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Background"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"primary -> neutral-01"}),`
`,e.jsx(n.li,{children:"secondary -> neutral-02"}),`
`,e.jsx(n.li,{children:"tertiary -> neutral-03"}),`
`,e.jsx(n.li,{children:"positive -> positive-01"}),`
`,e.jsx(n.li,{children:"negative -> negative-01"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Color"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"primary -> neutral-01"}),`
`,e.jsx(n.li,{children:"secondary -> neutral-02"}),`
`,e.jsx(n.li,{children:"tertiary -> neutral-03"}),`
`,e.jsx(n.li,{children:"positive -> positive-01"}),`
`,e.jsx(n.li,{children:"negative -> negative-01"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Border"}),"-color"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"primary -> subtle-01"}),`
`,e.jsx(n.li,{children:"secondary -> strong"}),`
`]})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{l as default};
