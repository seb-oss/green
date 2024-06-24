import{i as p,x as l}from"./lit-element-2a5e401f.js";import{t as m,_ as o,s as c,g as v,G as g,h as u}from"./chunk.ZQ4D5K7J-ef571d48.js";import"./Reflect-a49e984a.js";import"./_commonjsHelpers-725317a4.js";var y=p`
  :host {
    display: contents;
  }

  hr {
    border-radius: 200px;
    color: currentColor;
    background: currentColor;
    font-size: 0;
    border: 0;
    block-size: 1px;
    margin-top: calc((var(--_size) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size) / 2) - (1px / 2));
  }
`,x=y,r=class extends g{render(){return u`<slot><hr /></slot>`}};r.styles=[m,x];o([c({property:"color",valueTemplate:s=>`var(--gds-sys-color-${s})`})],r.prototype,"color",2);o([c({property:"--_size",valueTemplate:s=>`var(--gds-sys-space-spacer-${s})`})],r.prototype,"size",2);r=o([v("gds-divider")],r);const h={title:"Components/Layouts/Divider",component:"gds-divider",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-divider`\n\n## Usage"}}}},_={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{}},e={..._,name:"Divider",render:s=>l` <gds-divider color="base400" size="2xl"></gds-divider>`};var t,a,d,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Divider',
  render: args => html\` <gds-divider color="base400" size="2xl"></gds-divider>\`
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source},description:{story:"Headings",...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.description}}};const C=["Divider"];export{e as Divider,C as __namedExportsOrder,h as default};
