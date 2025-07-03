import{i}from"./lit-element-Bx14lxc-.js";import{t as p}from"./tokens.style-DBCwR12Q.js";import{s as n}from"./declarative-layout-mixins-Bw_LIblW.js";import{h as v,g as b}from"./gds-element-DKcDvDP5.js";import{G as g}from"./div.component-BmNATssr.js";var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,d=(a,e,o,s)=>{for(var r=s>1?void 0:s?m(e,o):e,l=a.length-1,c;l>=0;l--)(c=a[l])&&(r=(s?c(e,o,r):c(r))||r);return s&&r&&y(e,o,r),r};let t=class extends g{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return v`<slot></slot>`}};t.styles=[p,i`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];d([n({property:"box-shadow",valueTemplate:a=>`var(--gds-sys-shadow-${a}-01), var(--gds-sys-shadow-${a}-02)`})],t.prototype,"shadow",2);d([n({styleTemplate:function(a,e){let o,s,r;switch(e[0]){case"primary":o="transparent",s=`var(--gds-sys-color-l${this.level}-01)`,r="var(--gds-sys-color-content-01)";break;case"secondary":o="var(--gds-sys-color-border-subtle-01)",s=`var(--gds-sys-color-l${this.level}-02)`,r="var(--gds-sys-color-content-01)";break;case"brand-01":o="transparent",s=`var(--gds-sys-color-l${this.level}-brand-01)`,r="var(--gds-sys-color-content-inversed)";break;case"brand-02":o="transparent",s=`var(--gds-sys-color-l${this.level}-brand-02)`,r="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":o=`var(--gds-sys-color-border-${e[0]}-02)`,s=`var(--gds-sys-color-l${this.level}-${e[0]}-01)`,r=`var(--gds-sys-color-content-${e[0]}-01)`;break;default:o="transparent",s=`var(--gds-sys-color-l${this.level}-01)`,r="var(--gds-sys-color-content-01)";break}return`
      --_border-color: ${o};
      --_background-color: ${s};
      --_color: ${r};
      `}})],t.prototype,"variant",2);t=d([b("gds-card")],t);export{t as G};
