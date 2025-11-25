const i={title:"Components/Badge",tags:["autodocs"],parameters:{componentIds:["component-badge"]},argTypes:{variant:{control:"select",options:["","info","success","warning","danger","light","dark"]},dismissible:{control:"boolean"},text:{control:"text"}}},s={render:e=>`
    <span class="badge ${e.variant}">
      <strong>${e.text}</strong>
      ${e.dismissible?`<button class="close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>`:""}
    </span>`,args:{text:"Badge",dismissible:!1}};var n,a,t,o,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => \`
    <span class="badge \${args.variant}">
      <strong>\${args.text}</strong>
      \${args.dismissible ? \`<button class="close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>\` : \`\`}
    </span>\`,
  args: {
    text: 'Badge',
    dismissible: false
  }
}`,...(t=(a=s.parameters)==null?void 0:a.docs)==null?void 0:t.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/badge)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-badge)

Badges are available in a number of different variants. Please note that the colors used in the examples below are not final yet.`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.description}}};const c=["Badge"];export{s as Badge,c as __namedExportsOrder,i as default};
