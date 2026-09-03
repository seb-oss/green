const o={title:"Components/Card",tags:["autodocs"],parameters:{componentIds:["component-card"]},argTypes:{heading:{control:"text"},body:{control:"text"},link:{control:"text"},button:{control:"text"},primaryButton:{control:"text"},closeButton:{control:"boolean"}}},n={render:t=>`
  <section class="gds-card">
    ${t.heading||t.closeButton?`<header>
      <h3>${t.heading}</h3>
      ${t.closeButton?'<button class="close" type="button"><span class="sr-only">Close</span><i></i></button>':""}
     </header>`:""}
    <p>${t.body}</p>
    ${t.button||t.primaryButton||t.link?`<footer>
      ${t.link?`<a class="button" href="#">${t.link}</a>`:""}
      ${t.button?`<button type="button">${t.button}</button>`:""}
      ${t.primaryButton?`<button type="button" class="primary">${t.primaryButton}</button>`:""}
     </footer>`:""}
  </section>
`,args:{heading:"Card headline",body:"Card body",link:"",button:"",primaryButton:""}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => \`
  <section class="gds-card">
    \${args.heading || args.closeButton ? \`<header>
      <h3>\${args.heading}</h3>
      \${args.closeButton ? \`<button class="close" type="button"><span class="sr-only">Close</span><i></i></button>\` : ''}
     </header>\` : ''}
    <p>\${args.body}</p>
    \${args.button || args.primaryButton || args.link ? \`<footer>
      \${args.link ? \`<a class="button" href="#">\${args.link}</a>\` : ''}
      \${args.button ? \`<button type="button">\${args.button}</button>\` : ''}
      \${args.primaryButton ? \`<button type="button" class="primary">\${args.primaryButton}</button>\` : ''}
     </footer>\` : ''}
  </section>
\`,
  args: {
    heading: 'Card headline',
    body: 'Card body',
    link: '',
    button: '',
    primaryButton: ''
  }
}`,...n.parameters?.docs?.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/card)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-card)`,...n.parameters?.docs?.description}}};const e=["Card"];export{n as Card,e as __namedExportsOrder,o as default};
