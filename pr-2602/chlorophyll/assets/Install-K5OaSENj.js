import{j as n,M as s}from"./blocks--uo8Vprr.js";import{useMDXComponents as t}from"./index-BYoxYqaN.js";import"./iframe-D06iXPVv.js";function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Get started/Install"}),`
`,n.jsx(e.h1,{id:"install",children:"Install"}),`
`,n.jsx(e.p,{children:`Green consists out of several packages that is best installed with NPM or Yarn.
We recommend installing the lib corresponding with the framework you're using even though the number of components they provide at the time of writing is limited. We currently support both Angular and React.`}),`
`,n.jsx(e.p,{children:"When installing you need to have the correct config setup depending if you use VPN or an external network."}),`
`,n.jsx(e.h2,{id:"config-connected-to-seb-corporate-or-on-vpn",children:"Config connected to SEB Corporate or on VPN"}),`
`,n.jsx(e.h3,{id:"npm",children:"npm"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"config registry to point to artifactory"}),`
`,n.jsx(e.li,{children:"proxy is not relevant here"}),`
`]}),`
`,n.jsx(e.h3,{id:"git",children:"git"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"proxy needed as you need to pass through the firewalls to connect to github.com"}),`
`,n.jsx(e.li,{children:"only https is allowed through the proxy, so git can't be using ssh"}),`
`]}),`
`,n.jsx(e.h2,{id:"config-connected-to-any-public-network-not-on-vpn",children:"Config connected to any public network (not on VPN)"}),`
`,n.jsx(e.h3,{id:"npm-1",children:"npm"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"config registry to npmjs"}),`
`,n.jsx(e.li,{children:"proxy according to your network requirements (SEB proxy settings disabled of course)"}),`
`]}),`
`,n.jsx(e.h3,{id:"git-1",children:"git"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"proxy according to your network requirements"}),`
`]}),`
`,n.jsx(e.h2,{id:"check-config-commands",children:"Check config commands"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`/* yarn */
yarn config list

/* npm */
npm config list

/* git */
git config --list --global
git config --list --local
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Please note"})," - you don't have to install chlorophyll which is the core lib containing common css if you install our libs for Angular and React as they both have a dependency to chlorophyll."]}),`
`,n.jsxs(e.p,{children:["If you need charts, we have libs for that too based on ",n.jsx(e.a,{href:"https://naver.github.io/billboard.js/",rel:"nofollow",children:"Billboardjs"}),". Same thing here, install the package for the framework you're using."]}),`
`,n.jsx(e.h2,{id:"angular",children:"Angular"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Components"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm install @sebgroup/green-angular --save
`})}),`
`,n.jsxs(e.p,{children:["For detailed information on the Angular lib, go here: ",n.jsx(e.a,{href:"https://storybook.seb.io/latest/angular/",rel:"nofollow",children:"Angular Storybook"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Charts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm install @sebgroup/green-angular-charts --save
`})}),`
`,n.jsxs(e.p,{children:["For detailed information on the Angular charts lib, go here: ",n.jsx(e.a,{href:"https://storybook.seb.io/latest/angular-charts/",rel:"nofollow",children:"Angular Charts Storybook"})]}),`
`,n.jsx(e.h2,{id:"react",children:"React"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Components"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm install @sebgroup/green-react --save
`})}),`
`,n.jsxs(e.p,{children:["For detailed information on the React lib, go here: ",n.jsx(e.a,{href:"https://storybook.seb.io/latest/react/",rel:"nofollow",children:"React Storybook"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Charts"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm install @sebgroup/green-react-charts --save
`})}),`
`,n.jsxs(e.p,{children:["For detailed information on the React charts lib, go here: ",n.jsx(e.a,{href:"https://storybook.seb.io/latest/react-charts/",rel:"nofollow",children:"React Charts Storybook"})]}),`
`,n.jsx(e.h2,{id:"pure-cssscss",children:"Pure CSS/SCSS"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm install @sebgroup/chlorophyll --save
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"./?path=/story/get-started-use--page",children:"Next step"})})]})}function c(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{c as default};
