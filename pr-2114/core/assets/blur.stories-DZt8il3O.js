import{x as n}from"./lit-element-Bx14lxc-.js";import{a}from"./argTableProps-CY9EIQke.js";import"./text-BhQaTdoS.js";import{G as u}from"./blur.component-By-0qWsb.js";import"./custom-elements-DA1pzCtE.js";import"./text.component-B4D18gL7.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./div.component-DQzJWx6E.js";u.define();const D={title:"Components/Blur",component:"gds-blur",tags:["autodocs"],argTypes:{...a("gds-formatted-number")},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/blur)

The Blur component is used to apply a blur effect over content,
often used to obscure sensitive or background information.

The component acts as a container that wraps the target element
and applies a blur effect based on the \`shouldBlur\` property.

Note: When multiple blur components are rendered, each manages its own
blur effect independently.

@status beta`}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{shouldBlur:!0}},e={...d,render:s=>n`
    <gds-blur .shouldBlur=${s.shouldBlur}>
      <gds-text>Blur</gds-text>
    </gds-blur>
  `};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-blur .shouldBlur=\${args.shouldBlur}>
      <gds-text>Blur</gds-text>
    </gds-blur>
  \`
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,D as default};
