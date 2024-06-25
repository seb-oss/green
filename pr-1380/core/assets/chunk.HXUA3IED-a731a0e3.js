import{i as l}from"./lit-element-2a5e401f.js";import{t as g,_ as t,s as e,g as b,G as n,h as y}from"./chunk.ZQ4D5K7J-2ca0ec85.js";var m=l`
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
`,h=m,r=class extends n{render(){return y`<slot></slot>`}};r.styles=[g,h];t([e({property:"overflow",valueTemplate:p=>p})],r.prototype,"overflow",2);t([e({property:"box-shadow",valueTemplate:p=>`var(--gds-shadow-${p})`})],r.prototype,"shadow",2);t([e({property:"border-radius",valueTemplate:p=>`var(--gds-space-${p})`})],r.prototype,"radius",2);t([e({property:"background",valueTemplate:p=>`var(--gds-sys-color-${p})`})],r.prototype,"background",2);t([e({valueTemplate:p=>`1px solid ${p}`,styleTemplate:(p,o)=>{const s=o[0],a=o.length>1?o[1]:s,x=o.length>2?o[2]:s,d=o.length>3?o[3]:s;return`border-top: ${s}; border-right: ${a}; border-bottom: ${x}; border-left: ${d};`}})],r.prototype,"border",2);t([e()],r.prototype,"padding",2);r=t([b("gds-card")],r);
