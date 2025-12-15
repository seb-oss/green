const l={title:"Components/Alert ribbon",tags:["autodocs"],parameters:{componentIds:["component-alertribbon"]},argTypes:{variant:{control:"select",options:["success","warning","danger",""]},heading:{control:"text"},content:{control:"text"},link:{control:"text"},button:{control:"text"},primaryButton:{control:"text"},closeButton:{control:"boolean"},isCloseable:{control:"boolean"},closeText:{control:"text"}}},n={render:t=>`
  <div role="alert" class="${t.variant}">
    <i>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2857 4H5.71429C4.7675 4 4 4.7675 4 5.71429V18.2857C4 19.2325 4.7675 20 5.71429 20H18.2857C19.2325 20 20 19.2325 20 18.2857V5.71429C20 4.7675 19.2325 4 18.2857 4ZM12 7.07143C12.8284 7.07143 13.5 7.743 13.5 8.57143C13.5 9.39986 12.8284 10.0714 12 10.0714C11.1716 10.0714 10.5 9.39986 10.5 8.57143C10.5 7.743 11.1716 7.07143 12 7.07143ZM14 16.1429C14 16.3795 13.8081 16.5714 13.5714 16.5714H10.4286C10.1919 16.5714 10 16.3795 10 16.1429V15.2857C10 15.049 10.1919 14.8571 10.4286 14.8571H10.8571V12.5714H10.4286C10.1919 12.5714 10 12.3795 10 12.1429V11.2857C10 11.049 10.1919 10.8571 10.4286 10.8571H12.7143C12.951 10.8571 13.1429 11.049 13.1429 11.2857V14.8571H13.5714C13.8081 14.8571 14 15.049 14 15.2857V16.1429Z" fill="#333333"/>
      </svg>
    </i>
    <div>
      ${t.heading?`<h3>${t.heading}</h3>`:""}
      <p>
        ${t.content}
        ${t.link?`<a href="#">${t.link}</a>.`:""}
      </p>
    </div>
    ${t.isCloseable||t.closeButton?t.closeText?'<button class="close" aria-label="'+t.closeText+'" type="button"><i></i></button>':'<button class="close" aria-label="Close Alert!!!" type="button"><i></i></button>':""}
    ${t.button||t.primaryButton?`<footer>
        ${t.button?`<button type="button">${t.button}</button>`:""}
        ${t.primaryButton?`<button type="button" class="primary small">${t.primaryButton}</button>`:""}
     </footer>`:""}
  </div>
`,name:"Alert ribbon",args:{variant:"",heading:"Can contain a heading.",content:"Body text starts on the same row as heading. A link (optional) always ends the message, stand alone or",link:"part of the sentence.",button:!1,primaryButton:"",closeButton:!1,isCloseable:!0,closeText:"Close this"}};var e,o,a,s,r;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => \`
  <div role="alert" class="\${args.variant}">
    <i>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2857 4H5.71429C4.7675 4 4 4.7675 4 5.71429V18.2857C4 19.2325 4.7675 20 5.71429 20H18.2857C19.2325 20 20 19.2325 20 18.2857V5.71429C20 4.7675 19.2325 4 18.2857 4ZM12 7.07143C12.8284 7.07143 13.5 7.743 13.5 8.57143C13.5 9.39986 12.8284 10.0714 12 10.0714C11.1716 10.0714 10.5 9.39986 10.5 8.57143C10.5 7.743 11.1716 7.07143 12 7.07143ZM14 16.1429C14 16.3795 13.8081 16.5714 13.5714 16.5714H10.4286C10.1919 16.5714 10 16.3795 10 16.1429V15.2857C10 15.049 10.1919 14.8571 10.4286 14.8571H10.8571V12.5714H10.4286C10.1919 12.5714 10 12.3795 10 12.1429V11.2857C10 11.049 10.1919 10.8571 10.4286 10.8571H12.7143C12.951 10.8571 13.1429 11.049 13.1429 11.2857V14.8571H13.5714C13.8081 14.8571 14 15.049 14 15.2857V16.1429Z" fill="#333333"/>
      </svg>
    </i>
    <div>
      \${args.heading ? \`<h3>\${args.heading}</h3>\` : ''}
      <p>
        \${args.content}
        \${args.link ? \`<a href="#">\${args.link}</a>.\` : ''}
      </p>
    </div>
    \${args.isCloseable || args.closeButton ? args.closeText ? \`<button class="close" aria-label="\` + args.closeText + \`" type="button"><i></i></button>\` : \`<button class="close" aria-label="Close Alert!!!" type="button"><i></i></button>\` : ''}
    \${args.button || args.primaryButton ? \`<footer>
        \${args.button ? \`<button type="button">\${args.button}</button>\` : ''}
        \${args.primaryButton ? \`<button type="button" class="primary small">\${args.primaryButton}</button>\` : ''}
     </footer>\` : ''}
  </div>
\`,
  name: 'Alert ribbon',
  args: {
    variant: '',
    heading: 'Can contain a heading.',
    content: 'Body text starts on the same row as heading. A link (optional) always ends the message, stand alone or',
    link: 'part of the sentence.',
    button: false,
    primaryButton: '',
    closeButton: false,
    isCloseable: true,
    closeText: 'Close this'
  }
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/alert-ribbon)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-alertribbon)

An alert ribbon is a message used to inform the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message. Note that 'closeButton' will be depricated and replaced by 'isCloseable'.`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.description}}};const i=["AlertRibbon"];export{n as AlertRibbon,i as __namedExportsOrder,l as default};
