import{t as d,i,s as v,G as b,h as g,g as y}from"./iframe-BIS5g5CB.js";var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=(t,o,e,s)=>{for(var r=s>1?void 0:s?u(o,e):o,l=t.length-1,n;l>=0;l--)(n=t[l])&&(r=(s?n(o,e,r):n(r))||r);return s&&r&&p(o,e,r),r};let a=class extends b{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return g`<slot></slot>`}};a.styles=[d,i`
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
    `];c([v({styleTemplate:function(t,o){let e,s,r;switch(o[0]){case"primary":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break;case"secondary":e="var(--gds-sys-color-border-subtle-01)",s=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":e="transparent",s=`var(--gds-sys-color-l${this.level}-brand-01)`,r="var(--gds-sys-color-content-inversed)";break;case"brand-02":e="transparent",s=`var(--gds-sys-color-l${this.level}-brand-02)`,r="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":e=`var(--gds-sys-color-border-${o[0]}-02)`,s=`var(--gds-sys-color-l${this.level}-${o[0]}-01)`,r=`var(--gds-sys-color-content-${o[0]}-01)`;break;default:e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${e};
      --_background-color: ${s};
      --_color: ${r};
      `}})],a.prototype,"variant",2);a=c([y("gds-card")],a);export{a as G};
