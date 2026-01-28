const o={title:"Components/Card",tags:["autodocs"],parameters:{componentIds:["component-card"]},argTypes:{heading:{control:"text"},body:{control:"text"},link:{control:"text"},button:{control:"text"},primaryButton:{control:"text"},closeButton:{control:"boolean"}}},n={render:t=>`
  <section class="card">
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
`,args:{heading:"Card headline",body:"Card body",link:"",button:"",primaryButton:""}},e=["Card"];export{n as Card,e as __namedExportsOrder,o as default};
