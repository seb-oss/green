import{u as o,j as e,M as r}from"./iframe-BKxXo2qK.js";function s(t){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/MCP for coding agents"}),`
`,e.jsx(n.p,{children:"This guide helps you set up the Green Design System MCP (Model Context Protocol) server to work with GitHub Copilot in VS Code."}),`
`,e.jsx(n.h2,{id:"what-is-this",children:"What is this?"}),`
`,e.jsx(n.p,{children:"The Green MCP server provides AI agents like GitHub Copilot with direct access to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Green component documentation"}),`
`,e.jsx(n.li,{children:"Framework-specific guides (Angular, React)"}),`
`,e.jsx(n.li,{children:"Design guidelines"}),`
`,e.jsx(n.li,{children:"Setup and troubleshooting documentation"}),`
`]}),`
`,e.jsx(n.p,{children:"This helps Copilot give you accurate, up-to-date information about Green components when you're coding."}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsxs(n.p,{children:["The MCP server depends on ",e.jsx(n.code,{children:"@modelcontextprotocol/sdk"})," being installed in your project. This is specified as an optional peer dependency of Green Core, so you need to explicitly install it (as a dev dependency):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i -D @modelcontextprotocol/sdk
`})}),`
`,e.jsx(n.h2,{id:"setting-up-the-mcp-server",children:"Setting up the MCP server"}),`
`,e.jsxs(n.p,{children:["Create a new file in ",e.jsx(n.code,{children:".vscode/mcp.json"})," in your project with the following content:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "servers": {
    "Green Core MCP": {
      "type": "stdio",
      "command": "node",
      "args": ["./node_modules/@sebgroup/green-core/bin/mcp-server"]
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:'This tells VS Code to start the Green MCP server whenever you open the project. You should also be able to see it listed under "MCP Servers" on the Extensions tab. From there you can also start or restart the server if needed.'}),`
`,e.jsx(n.p,{children:"Now that you have the server set up, you should also add some base instrctions to tell the agent to make use of the MCP."}),`
`,e.jsxs(n.p,{children:["Create a new file in ",e.jsx(n.code,{children:".github/copilot-instructions.md"})," in your project and use this template:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`# Green Design System Components

This app is built in Angular using Green Design System components.

When using Green components, ALWAYS refer to the Green MCP server for component documentation, guidelines, and instructions.

ALWAYS start by reading the main instructions by using the \`get_instructions\` tool from the MCP server.
`})}),`
`,e.jsxs(n.p,{children:["You can change ",e.jsx(n.code,{children:"Angular"})," to ",e.jsx(n.code,{children:"React"})," or whatever framework you are using, and tailor the instructions in general to fit your needs."]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.p,{children:"If Copilot is not using the MCP server correctly, try restarting the MCP server from the Extensions tab in VS Code."}),`
`,e.jsx(n.p,{children:"You can also try asking the agent itself if it can access the Green MCP server or if it has trouble finding necessary documentation."})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default};
