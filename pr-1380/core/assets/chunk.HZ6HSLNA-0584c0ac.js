import{i as l}from"./lit-element-2a5e401f.js";import{t as g,_ as o,s,g as b,G as y,h as m}from"./chunk.ZQ4D5K7J-9a6382be.js";var n=l`
  :host {
    --gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1),
      0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    --gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    --gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1),
      0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    --gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 4px 6px -2px rgba(0, 0, 0, 0.03);
    --gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08),
      0px 8px 8px -4px rgba(0, 0, 0, 0.03);
    display: block;
  }
`,c=n,r=class extends y{render(){return m`<slot></slot>`}};r.styles=[g,c];o([s({property:"overflow",valueTemplate:p=>p})],r.prototype,"overflow",2);o([s({property:"box-shadow",valueTemplate:p=>`var(--gds-shadow-${p})`})],r.prototype,"shadow",2);o([s({property:"border-radius",valueTemplate:p=>`var(--gds-sys-radii-${p})`})],r.prototype,"radius",2);o([s({property:"background",valueTemplate:p=>`var(--gds-sys-color-${p})`})],r.prototype,"background",2);o([s({valueTemplate:p=>`1px solid ${p}`,styleTemplate:(p,t)=>{const e=t[0],a=t[1],x=t[2],d=t[3];return`border-top: ${e}; border-right: ${a}; border-bottom: ${x}; border-left: ${d};`}})],r.prototype,"border",2);r=o([b("gds-card")],r);
