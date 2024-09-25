import{o as p}from"./observe-light-dom-ff3ee03f.js";import{g as m,G as x,h}from"./gds-element-86064462.js";import{t as f}from"./tokens.style-01187a75.js";import{i as v}from"./lit-element-1d72f0ce.js";import"./divider-175a5512.js";import"./_commonjsHelpers-725317a4.js";import"./style-expression-property-26695edd.js";import"./watch-c4961afe.js";const w=v`
  a {
    color: currentColor;
  }

  h1 {
    font-size: var(--gds-text-size-heading-xl);
    line-height: var(--gds-text-line-height-heading-xl);
    font-weight: var(--gds-text-weight-regular);
  }

  h2 {
    font-size: var(--gds-text-size-heading-l);
    line-height: var(--gds-text-line-height-heading-l);
    font-weight: var(--gds-text-weight-regular);
  }

  h3 {
    font-size: var(--gds-text-size-heading-m);
    line-height: var(--gds-text-line-height-heading-m);
    font-weight: var(--gds-text-weight-regular);
  }

  h4 {
    font-size: var(--gds-text-size-heading-s);
    line-height: var(--gds-text-line-height-heading-s);
    font-weight: var(--gds-text-weight-regular);
  }

  h5 {
    font-size: var(--gds-text-size-heading-xs);
    line-height: var(--gds-text-line-height-heading-xs);
    font-weight: var(--gds-text-weight-regular);
  }

  h6 {
    font-size: var(--gds-text-size-heading-2xs);
    line-height: var(--gds-text-line-height-heading-2xs);
    font-weight: var(--gds-text-weight-regular);
  }

  p,
  span,
  em,
  strong,
  mark {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
  }

  small {
    font-size: var(--gds-text-size-detail-xs);
    line-height: var(--gds-text-line-height-detail-xs);
  }
`;var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(e,i,o,n)=>{for(var t=n>1?void 0:n?b(i,o):i,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(n?c(i,o,t):c(t))||t);return n&&t&&y(i,o,t),t};let s=class extends x{querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){var e;return((e=this.shadowRoot)==null?void 0:e.innerHTML)||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}render(){return h``}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};s.styles=[f,w];g([p()],s.prototype,"_captureDOM",1);s=g([m("gds-rich-text")],s);const _={title:"Docs/Content/Rich Text",component:"gds-rich-text",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-rich-text\` can be used to wrap generic HTML content and apply typography styles.

The wrapped content will get captured and transferred to the inner shadowRoot of the \`gds-rich-text\` element.

A typical use case for this component is to wrap a block of HTML content output from a CMS or other source
that you want to apply the design system typography to.

@status beta`}}}},S={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...S,name:"Rich Text",render:e=>h`
    <gds-rich-text id="rt">
      <h1>Sed nec nunc non odio ultricies</h1>
      <p>
        consectetur.
        <a
          href="javascript:;"
          @click=${()=>console.log("Event listeners are retained in the captured DOM")}
          >Nullam auctor</a
        >
        nisl vel justo consectetur, et ultricies felis tincidunt. Sed auctor
        libero non turpis tincidunt, a ultricies nulla ultricies. Donec
        condimentum, nunc ac tincidunt ultricies, justo ipsum pharetra elit, nec
        ultricies ligula nunc a neque. Sed nec nunc non odio ultricies
        consectetur.
      </p>
      <ul>
        <li>Nullam auctor nisl vel justo consectetur</li>
        <li>ultricies felis tincidunt</li>
        <li>Sed auctor libero non turpis tincidunt</li>
        <li>a ultricies nulla ultricies</li>
      </ul>
      <h2>Consectetur adipiscing elit</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        nisl vel justo consectetur, et ultricies felis tincidunt. Sed auctor
        libero non turpis tincidunt, a ultricies nulla ultricies. Donec
        condimentum, nunc ac tincidunt ultricies, justo ipsum pharetra elit, nec
        ultricies ligula nunc a neque.
      </p>
    </gds-rich-text>
    <gds-divider></gds-divider>
    <p>
      Setting new children will cause the content to be re-captured, replaceing
      the old contents:
    </p>
    <button
      @click=${()=>(document.getElementById("rt").appendChild(new Text("Added text node")),null)}
    >
      Change it
    </button>
  `};var a,u,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rich Text',
  render: args => html\`
    <gds-rich-text id="rt">
      <h1>Sed nec nunc non odio ultricies</h1>
      <p>
        consectetur.
        <a
          href="javascript:;"
          @click=\${() => console.log('Event listeners are retained in the captured DOM')}
          >Nullam auctor</a
        >
        nisl vel justo consectetur, et ultricies felis tincidunt. Sed auctor
        libero non turpis tincidunt, a ultricies nulla ultricies. Donec
        condimentum, nunc ac tincidunt ultricies, justo ipsum pharetra elit, nec
        ultricies ligula nunc a neque. Sed nec nunc non odio ultricies
        consectetur.
      </p>
      <ul>
        <li>Nullam auctor nisl vel justo consectetur</li>
        <li>ultricies felis tincidunt</li>
        <li>Sed auctor libero non turpis tincidunt</li>
        <li>a ultricies nulla ultricies</li>
      </ul>
      <h2>Consectetur adipiscing elit</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        nisl vel justo consectetur, et ultricies felis tincidunt. Sed auctor
        libero non turpis tincidunt, a ultricies nulla ultricies. Donec
        condimentum, nunc ac tincidunt ultricies, justo ipsum pharetra elit, nec
        ultricies ligula nunc a neque.
      </p>
    </gds-rich-text>
    <gds-divider></gds-divider>
    <p>
      Setting new children will cause the content to be re-captured, replaceing
      the old contents:
    </p>
    <button
      @click=\${() => (document.getElementById('rt')!.appendChild(new Text('Added text node')), null)}
    >
      Change it
    </button>
  \`
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const L=["Divider"];export{r as Divider,L as __namedExportsOrder,_ as default};
