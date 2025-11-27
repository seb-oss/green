import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Bg_KsDDZ.js";import{M as r}from"./WithTooltip-SK46ZJ2J-C_GzWYMW.js";import"./iframe-BY-mButZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D3ahQoZ-.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Testing"}),`
`,e.jsx(n.h1,{id:"testing-react-applications-built-with-green",children:"Testing React applications built with Green"}),`
`,e.jsx(n.h2,{id:"jest",children:"Jest"}),`
`,e.jsxs(n.p,{children:[`To test React applications using Green React, you need to add some extra configuration. Because
some of the components in Green are Web Components, and Jest runs in a Node environment, Jest
needs some browser APIs mocked. Also, the code in both the `,e.jsx(n.code,{children:"@sebgroup/green-react"})," and ",e.jsx(n.code,{children:"@sebgroup/green-core"}),`
packages needs to be transformed by Babel before Jest can understand it. If you run into errors like
`,e.jsx(n.code,{children:"Jest encountered an unexpected token"}),", this is probably the reason."]}),`
`,e.jsx(n.p,{children:"To make testing as seamless as possible, Green provides some pre-packaged configuration that you can apply to your Jest configuration."}),`
`,e.jsx(n.h3,{id:"babel-config",children:"Babel config"}),`
`,e.jsxs(n.p,{children:["First, you need to make sure that you have ",e.jsx(n.code,{children:"babel-jest"})," installed in your project. If you don't, you can install it by running:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`$ npm install --save-dev babel-jest @babel/core @babel/preset-env
`})}),`
`,e.jsxs(n.p,{children:["Then, create a file called ",e.jsx(n.code,{children:"babel.config.js"})," in the root of your project with the following content:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
}
`})}),`
`,e.jsx(n.h3,{id:"jest-config",children:"Jest config"}),`
`,e.jsxs(n.p,{children:[`To use the config from Green, you first need to make sure your Jest config is written in Javascript and not Typescript,
or else convert it. If you have a `,e.jsx(n.code,{children:"jest.config.ts"})," file, rename it to ",e.jsx(n.code,{children:"jest.config.cjs"}),"."]}),`
`,e.jsxs(n.p,{children:["Then, change the ",e.jsx(n.code,{children:"const config = { ... }"})," to ",e.jsx(n.code,{children:"module.exports = { ... }"}),". Also remove the ",e.jsx(n.code,{children:"export default config"})," line."]}),`
`,e.jsx(n.p,{children:"Then, you can extend your configuration like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// import green jest config
const greenJestConfig = require('@sebgroup/green-core/jest-config')

// apply the green jest config
module.exports = greenJestConfig.apply({
  // Your existing config, for example:
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\\\.(js|jsx)$': 'babel-jest',
    '^.+\\\\.(ts|tsx)$': 'ts-jest',
  },
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
})
`})}),`
`,e.jsx(n.p,{children:"With both Babel and Jest properly configured, you should be able to test your app as usual with Jest."}),`
`,e.jsx(n.h2,{id:"interacting-with-green-web-components-in-a-test",children:"Interacting with Green web components in a test"}),`
`,e.jsxs(n.p,{children:["Here's an example using ",e.jsx(n.code,{children:"@testing-library/react"})," to test a React component that uses a Green web component internally:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Import types from Green core:
import type { GdsDropdown } from '@sebgroup/green-core'

// Then in your test:
it('should render correct dropdown text', async () => {
  // arrange
  const { container } = render(<HelloWorld msg="Hello React!" />)

  // Query the DOM using the GdsDropdown type
  const dropdown = container.querySelector<GdsDropdown>(
    '[gds-element="gds-dropdown"]', // This is the attribute that Green components use to identify themselves, since the element name itself will have a scoping suffix.
  )!

  // act
  dropdown.value = '1'

  // Wait for both \`updateComplete\` and \`setTimeout\` (for the next event loop tick)
  // This is usually enough to let the Web Component work out it's internal state
  await dropdown.updateComplete
  await new Promise((resolve) => setTimeout(resolve, 0))

  // assert
  expect(dropdown?.displayValue).toContain('Option 1')
})
`})}),`
`,e.jsx(n.p,{children:"Check the component's API documentation for more information on how to interact with the components."})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
