import{i as d}from"./lit-element-Bx14lxc-.js";import{t as i}from"./tokens.style-CJKwYBen.js";import{s as v}from"./declarative-layout-mixins-DFPXvh_g.js";import{h as b,g as p}from"./gds-element-DTROifYq.js";import{G as g}from"./div.component-CpSRkgEJ.js";var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=(t,e,o,s)=>{for(var r=s>1?void 0:s?m(e,o):e,l=t.length-1,n;l>=0;l--)(n=t[l])&&(r=(s?n(e,o,r):n(r))||r);return s&&r&&y(e,o,r),r};let a=class extends g{constructor(){super(),this.variant="primary",this.padding="m;m{l}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return b`<slot></slot>`}};a.styles=[i,d`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-5xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];c([v({styleTemplate:function(t,e){let o,s,r;switch(e[0]){case"primary":o="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break;case"secondary":o="var(--gds-sys-color-border-subtle-01)",s=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":o="transparent",s=`var(--gds-sys-color-l${this.level}-brand-01)`,r="var(--gds-sys-color-content-inversed)";break;case"brand-02":o="transparent",s=`var(--gds-sys-color-l${this.level}-brand-02)`,r="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":o=`var(--gds-sys-color-border-${e[0]}-02)`,s=`var(--gds-sys-color-l${this.level}-${e[0]}-01)`,r=`var(--gds-sys-color-content-${e[0]}-01)`;break;default:o="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${o};
      --_background-color: ${s};
      --_color: ${r};
      `}})],a.prototype,"variant",2);a=c([p("gds-card")],a);export{a as G};
