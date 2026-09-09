const i={title:"Components/Spinner",tags:["autodocs"],parameters:{componentIds:["component-spinners"]},argTypes:{size:{control:{type:"select",labels:{"gds-spinner-sm":"Small","gds-spinner-lg":"Large"}},options:["","gds-spinner-sm","gds-spinner-lg"]}}},n={render:s=>`
    <div class="gds-spinner ${s.size}"></div>`},d={render:()=>`
    <div class="gds-spinner gds-spinner-sm"></div>
    <div class="gds-spinner"></div>
    <div class="gds-spinner gds-spinner-lg"></div>`},e={render:s=>`
    <div class="gds-spinner${s.cover?"-cover":""} ${s.size}"></div>`,decorators:[s=>`<div class="gds-spinner-wrapper gds-spinner-cover gds-spinner-backdrop">${s()}</div>`]},r={render:s=>`
    <div class="gds-spinner ${s.size}"></div>`,decorators:[s=>`<div class="gds-spinner-wrapper gds-spinner-fullscreen gds-spinner-backdrop">${s()}</div>`]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'{\n  render: args => `\n    <div class="gds-spinner ${args.size}"></div>`\n}',...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="gds-spinner gds-spinner-sm"></div>
    <div class="gds-spinner"></div>
    <div class="gds-spinner gds-spinner-lg"></div>\`
}`,...d.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => \`
    <div class="gds-spinner\${args.cover ? '-cover' : ''} \${args.size}"></div>\`,
  decorators: [story => \`<div class="gds-spinner-wrapper gds-spinner-cover gds-spinner-backdrop">\${story()}</div>\`]
}`,...e.parameters?.docs?.source},description:{story:"Cover takes up the parent element size. Use the `gds-spinner-backdrop` class to add a backdrop.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'{\n  render: args => `\n    <div class="gds-spinner ${args.size}"></div>`,\n  decorators: [story => `<div class="gds-spinner-wrapper gds-spinner-fullscreen gds-spinner-backdrop">${story()}</div>`]\n}',...r.parameters?.docs?.source},description:{story:"Fullscreen spinner takes up the entire screen. Use the `gds-spinner-backdrop` class to add a backdrop.",...r.parameters?.docs?.description}}};const a=["Spinner","Sizes","Cover","Fullscreen"];export{e as Cover,r as Fullscreen,d as Sizes,n as Spinner,a as __namedExportsOrder,i as default};
