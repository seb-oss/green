const y={title:"Components/Spinner",tags:["autodocs"],parameters:{componentIds:["component-spinners"]},argTypes:{size:{control:{type:"select",labels:{"gds-spinner-sm":"Small","gds-spinner-lg":"Large"}},options:["","gds-spinner-sm","gds-spinner-lg"]}}},n={render:s=>`
    <div class="gds-spinner ${s.size}"></div>`},d={render:()=>`
    <div class="gds-spinner gds-spinner-sm"></div>
    <div class="gds-spinner"></div>
    <div class="gds-spinner gds-spinner-lg"></div>`},e={render:s=>`
    <div class="gds-spinner${s.cover?"-cover":""} ${s.size}"></div>`,decorators:[s=>`<div class="gds-spinner-wrapper gds-spinner-cover gds-spinner-backdrop">${s()}</div>`]},r={render:s=>`
    <div class="gds-spinner ${s.size}"></div>`,decorators:[s=>`<div class="gds-spinner-wrapper gds-spinner-fullscreen gds-spinner-backdrop">${s()}</div>`]};var i,a,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:'{\n  render: args => `\n    <div class="gds-spinner ${args.size}"></div>`\n}',...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var o,c,t;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => \`
    <div class="gds-spinner gds-spinner-sm"></div>
    <div class="gds-spinner"></div>
    <div class="gds-spinner gds-spinner-lg"></div>\`
}`,...(t=(c=d.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var g,l,v,m,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => \`
    <div class="gds-spinner\${args.cover ? '-cover' : ''} \${args.size}"></div>\`,
  decorators: [story => \`<div class="gds-spinner-wrapper gds-spinner-cover gds-spinner-backdrop">\${story()}</div>\`]
}`,...(v=(l=e.parameters)==null?void 0:l.docs)==null?void 0:v.source},description:{story:"Cover takes up the parent element size. Use the `gds-spinner-backdrop` class to add a backdrop.",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var $,k,z,S,b;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  render: args => `\n    <div class="gds-spinner ${args.size}"></div>`,\n  decorators: [story => `<div class="gds-spinner-wrapper gds-spinner-fullscreen gds-spinner-backdrop">${story()}</div>`]\n}',...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"Fullscreen spinner takes up the entire screen. Use the `gds-spinner-backdrop` class to add a backdrop.",...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};const h=["Spinner","Sizes","Cover","Fullscreen"];export{e as Cover,r as Fullscreen,d as Sizes,n as Spinner,h as __namedExportsOrder,y as default};
