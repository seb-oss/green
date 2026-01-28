const e={title:"Components/Spinner",tags:["autodocs"],parameters:{componentIds:["component-spinners"]},argTypes:{size:{control:{type:"select",labels:{"gds-spinner-sm":"Small","gds-spinner-lg":"Large"}},options:["","gds-spinner-sm","gds-spinner-lg"]}}},n={render:s=>`
    <div class="gds-spinner ${s.size}"></div>`},r={render:()=>`
    <div class="gds-spinner gds-spinner-sm"></div>
    <div class="gds-spinner"></div>
    <div class="gds-spinner gds-spinner-lg"></div>`},i={render:s=>`
    <div class="gds-spinner${s.cover?"-cover":""} ${s.size}"></div>`,decorators:[s=>`<div class="gds-spinner-wrapper gds-spinner-cover gds-spinner-backdrop">${s()}</div>`]},d={render:s=>`
    <div class="gds-spinner ${s.size}"></div>`,decorators:[s=>`<div class="gds-spinner-wrapper gds-spinner-fullscreen gds-spinner-backdrop">${s()}</div>`]},p=["Spinner","Sizes","Cover","Fullscreen"];export{i as Cover,d as Fullscreen,r as Sizes,n as Spinner,p as __namedExportsOrder,e as default};
