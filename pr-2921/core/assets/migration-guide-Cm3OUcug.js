import{u as d,j as e,M as i}from"./iframe-BgnVXT15.js";import"./preload-helper-PPVm8Dsz.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Migration guides"}),`
`,e.jsx(s.h1,{id:"migration-guides",children:"Migration guides"}),`
`,e.jsx(s.p,{children:"This document contains instructions on how to update to each new major version from the previous version."}),`
`,e.jsx(s.p,{children:"If you need to update several versions at once, it is recommended to follow the steps for one version at a time until you reach the latest one."}),`
`,e.jsx(s.p,{children:"Before you begin, make sure you have the latest feature/patch version of your current major version."}),`
`,e.jsx(s.h2,{id:"css-variables",children:"CSS variables"}),`
`,e.jsxs(s.p,{children:["Please ensure that you have at least one instance of ",e.jsx(s.code,{children:"gds-theme"})," at the root of your application. This ensures that all components have the correct variables versions, and guards against conflicts from shell or other MFEs."]}),`
`,e.jsx(s.h2,{id:"automated-migrations",children:"Automated migrations"}),`
`,e.jsxs(s.p,{children:["Many migrations can be automated using the ",e.jsx(s.code,{children:"green-core-context migrate"}),` command. This will detect and apply code changes for supported automated migrations.
Check out the `,e.jsx(s.a,{href:"/docs/guides-green-context-cli--docs",children:"Context CLI documentation"})," for more details on how to use the migration engine."]}),`
`,e.jsx(s.p,{children:"An effective way to apply the upgrade is to let your coding agent use the CLI to run migrations and handle manual steps."}),`
`,e.jsx(s.p,{children:"For example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-markdown",children:`We're updating this app to green-core 3.0.

Please use the \`npx green-core-context migrate\` CLI tool to run the migrations, and then handle any manual steps required.

When done, please give me a breakdown of what was updated.
`})}),`
`,e.jsx(s.p,{children:"(remember to install the updated package first)"}),`
`,e.jsx(s.h2,{id:"2xx-to-3xx",children:"2.x.x to 3.x.x"}),`
`,e.jsx(s.p,{children:"This release includes several improvements, both technical updates and structural changes that make the system easier and more consistent to work with across platforms."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Card:"})," Legacy card variants have been renamed.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'variant="primary"'})," -> ",e.jsx(s.code,{children:'variant="neutral-01"'})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'variant="secondary"'})," -> ",e.jsx(s.code,{children:'variant="neutral-02-outlined"'})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'variant="tertiary"'})," -> ",e.jsx(s.code,{children:'variant="neutral-02"'})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Applies to:"})," ",e.jsx(s.code,{children:"gds-card"}),", ",e.jsx(s.code,{children:"gds-card-linked"}),", ",e.jsx(s.code,{children:"gds-card-pattern-01"}),", and corresponding React wrappers."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Checkbox/Radio group:"})," ",e.jsx(s.code,{children:"direction"})," has been renamed.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Web component attribute: ",e.jsx(s.code,{children:"direction"})," -> ",e.jsx(s.code,{children:"flex-direction"})]}),`
`,e.jsxs(s.li,{children:["Angular property binding: ",e.jsx(s.code,{children:"[direction]"})," -> ",e.jsx(s.code,{children:"[flexDirection]"})]}),`
`,e.jsxs(s.li,{children:["Angular attribute binding: ",e.jsx(s.code,{children:"[attr.direction]"})," -> ",e.jsx(s.code,{children:"[attr.flex-direction]"})]}),`
`,e.jsxs(s.li,{children:["React prop: ",e.jsx(s.code,{children:"direction"})," -> ",e.jsx(s.code,{children:"flexDirection"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Note:"})," JavaScript property assignments and ",e.jsx(s.code,{children:"setAttribute('direction', ...)"})," usages should be reviewed and updated manually when targeting ",e.jsx(s.code,{children:"gds-checkbox-group"})," or ",e.jsx(s.code,{children:"gds-radio-group"})," instances."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Colors:"})," Several color tokens were renamed and a small set of tokens were removed.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Replace renamed tokens according to the cheat sheet below."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Note:"})," Deleted and legacy tokens must be reviewed manually."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Typography:"})," Typography tokens now use ",e.jsx(s.code,{children:"[name]-[size]-[weight]"})," ordering instead of ",e.jsx(s.code,{children:"[name]-[weight]-[size]"}),".",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Rename token usages according to the cheat sheet below, including shorthand style-expression values."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Note:"})," Deleted tokens have suggested replacements, but should be reviewed manually."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h3,{id:"color-token-migration-cheat-sheet-2xx---3xx",children:"Color token migration cheat-sheet (2.x.x -> 3.x.x)"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Core color token renames"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-l1-inversed"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-l1-neutral-03"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-l3-neutral-01"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-l3-neutral-03"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-l3-neutral-03"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-l3-neutral-01"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-l3-brand-03"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-l3-brand-02-2"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-content-inversed"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-content-neutral-05"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-border-interactive"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-border-neutral-01"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-border-subtle-01"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-border-neutral-02"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-border-subtle-02"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-border-neutral-03"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-border-strong"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-border-neutral-04"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-color-border-inverse"})," -> ",e.jsx(s.code,{children:"--gds-sys-color-border-neutral-05"})]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Shorthand value renames (for color-related attributes/props)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"inversed"})," -> ",e.jsx(s.code,{children:"neutral-05"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"interactive"})," -> ",e.jsx(s.code,{children:"neutral-01"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"subtle-01"})," -> ",e.jsx(s.code,{children:"neutral-02"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"subtle-02"})," -> ",e.jsx(s.code,{children:"neutral-03"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"strong"})," -> ",e.jsx(s.code,{children:"neutral-04"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"inverse"})," -> ",e.jsx(s.code,{children:"neutral-05"})]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Deleted tokens (manual review required)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-l3-neutral-04"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-l3-neutral-05"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-l3-disabled-02"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-l3-disabled-03"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-content-disabled-02"})}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Legacy tokens (manual review required)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-dark-red-2"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"--gds-sys-color-blue"})}),`
`]}),`
`,e.jsx(s.h3,{id:"typography-token-migration-cheat-sheet-2xx---3xx",children:"Typography token migration cheat-sheet (2.x.x -> 3.x.x)"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Renamed tokens (safe replacements)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-detail-book-m"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-detail-m-book"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-detail-book-s"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-detail-s-book"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-detail-book-xs"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-detail-xs-book"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-detail-regular-m"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-detail-m-regular"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-detail-regular-s"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-detail-s-regular"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-detail-regular-xs"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-detail-xs-regular"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-medium-m"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-m-medium"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-medium-s"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-s-medium"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-book-m"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-m-book"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-book-s"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-s-book"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-regular-l"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-l-regular"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-regular-m"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-m-regular"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-regular-s"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-s-regular"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-italic-l"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-l-regular-italic"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-italic-m"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-m-regular-italic"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-body-italic-s"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-body-s-regular-italic"})]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Deleted tokens (manual review with suggested replacement)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-display-2xl"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-display-l"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-display-xl"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-display-l"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-heading-2xs"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-heading-xs"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-preamble-2xl"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-preamble-xl"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--gds-sys-text-preamble-xs"})," -> ",e.jsx(s.code,{children:"--gds-sys-text-preamble-s"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["The same typography renames also apply to shorthand style-expression values (for example ",e.jsx(s.code,{children:"body-regular-m"})," -> ",e.jsx(s.code,{children:"body-m-regular"}),")."]}),`
`,e.jsx(s.h2,{id:"1902-to-2xx",children:"1.90.2 to 2.x.x"}),`
`,e.jsx(s.p,{children:"This release contains several updates and refinements related to the design tokens and declarative layout system. A lot of work has gone into aligning things between code and design (Figma), in order to make the design and development process as seamless as possible for everyone."}),`
`,e.jsx(s.p,{children:"Many of the breaking changes relates to how tokens are named and used, but we also took the opporutinity to remove some old deprecations and implement some much needed refactorings."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Badge:"})," Removed disabled property in favor for making it a variant.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," use ",e.jsx(s.code,{children:'<gds-badge variant="disabled">'})," instead of ",e.jsx(s.code,{children:"<gds-badge disabled>"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Badge:"})," There is no positive variant of the notification property of the badge",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," No action necessary, but variant will be ignored when the notification property is set to true."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Button:"})," Button variants ",e.jsx(s.code,{children:"brand"}),", ",e.jsx(s.code,{children:"warning"})," and ",e.jsx(s.code,{children:"notice"})," is now added. Default button variant is now ",e.jsx(s.code,{children:"neutral"})," instead of ",e.jsx(s.code,{children:"brand"})," that was before.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Add ",e.jsx(s.code,{children:'variant="brand"'})," to buttons that should have the senior green colour."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Card:"})," Removed ",e.jsx(s.code,{children:"shadow"})," prop from ",e.jsx(s.code,{children:"gds-card"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Use ",e.jsx(s.code,{children:"box-shadow"})," property instead of ",e.jsx(s.code,{children:"shadow"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Colors:"})," Overhaul of color tokens structure and naming conventions.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Many of the color tokens used for ",e.jsx(s.code,{children:"color"}),", ",e.jsx(s.code,{children:"background"}),", ",e.jsx(s.code,{children:"border-color"}),", and similar properties that accepts color tokens, have changed names. Refer to cheat sheet below for how to update the most commonly used colors."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Container:"})," Removed ",e.jsx(s.code,{children:"gds-container"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Use ",e.jsx(s.code,{children:"gds-div"})," instead."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dialog:"})," Removed overflow style by default.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," If you were relying on the overflow behavior for long content to be scrollable, you now need to add overflow styles to the slotted element instead. For example, wrap the content in a ",e.jsx(s.code,{children:"<gds-div>"})," with overflow and height set."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Divider:"})," Removed levels from Divider since it's no longer relevant due to border lot being a part of the levels structure.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," If you have been using the levels prop to control the color you should now insted use the color prop to set the possible colors on the divider. See color documentation to see possible border colors."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Font:"})," ",e.jsx(s.code,{children:"font-size"})," changed to ",e.jsx(s.code,{children:"font"}),", and font tokens updated.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Change all occurences of the ",e.jsx(s.code,{children:"font-size"})," style expression property and replace with font. Add font-weight to token name. Example: ",e.jsx(s.code,{children:'<gds-text font-size="body-m">'})," --> ",e.jsx(s.code,{children:'<gds-text font="body-regular-m">'})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Note:"})," Because the ",e.jsx(s.code,{children:"font"})," shorthand property includes the ",e.jsx(s.code,{children:"font-family"})," property, components now expect the ",e.jsx(s.code,{children:"SEB SansSerif GDS"})," font-family to be present, whereas before they just inherited ",e.jsx(s.code,{children:"font-family"})," from higher in the document. Make sure you import the ",e.jsx(s.code,{children:"SEB SansSerif GDS"})," font from the ",e.jsx(s.code,{children:"@sebgroup/fonts"})," package and include the font declaration CSS from there."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Icon:"})," Removed deprecated ",e.jsx(s.code,{children:"width"})," and ",e.jsx(s.code,{children:"height"})," properties.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Use the ",e.jsx(s.code,{children:"size"})," property instead."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Spacer:"})," Removed ",e.jsx(s.code,{children:"gds-spacer"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," Use ",e.jsx(s.code,{children:"gds-div"})," instead, and set height using the ",e.jsx(s.code,{children:"height"})," property."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Theme:"})," Default design-version of ",e.jsx(s.code,{children:"gds-theme"})," is changed to ",e.jsx(s.code,{children:"2023"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"}),' To keep 2016 style, set the design-version attribute to "2016" explicitly.']}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Theme:"})," ",e.jsx(s.code,{children:"gds-theme"})," now sets the ",e.jsx(s.code,{children:"color"})," CSS property by default.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration step:"})," If you were relying on inheriting ",e.jsx(s.code,{children:"color"})," from higher in the document, you need to override this now by setting the ",e.jsx(s.code,{children:"color"})," CSS property explicitly."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h3,{id:"color-token-migration-cheat-sheet-for-the-most-commonly-used-colors",children:"Color token migration cheat-sheet for the most commonly used colors"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Background"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"primary -> neutral-01"}),`
`,e.jsx(s.li,{children:"secondary -> neutral-02"}),`
`,e.jsx(s.li,{children:"tertiary -> neutral-03"}),`
`,e.jsx(s.li,{children:"positive -> positive-01"}),`
`,e.jsx(s.li,{children:"negative -> negative-01"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Color"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"primary -> neutral-01"}),`
`,e.jsx(s.li,{children:"secondary -> neutral-02"}),`
`,e.jsx(s.li,{children:"tertiary -> neutral-03"}),`
`,e.jsx(s.li,{children:"positive -> positive-01"}),`
`,e.jsx(s.li,{children:"negative -> negative-01"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Border"}),"-color"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"primary -> subtle-01"}),`
`,e.jsx(s.li,{children:"secondary -> strong"}),`
`]})]})}function t(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{t as default};
