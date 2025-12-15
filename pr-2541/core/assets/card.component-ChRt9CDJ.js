import{t as d,i as v,s as i,G as g,h as u,g as y}from"./iframe-BZMmfzq-.js";var b=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=(t,a,e,s)=>{for(var r=s>1?void 0:s?p(a,e):a,l=t.length-1,n;l>=0;l--)(n=t[l])&&(r=(s?n(a,e,r):n(r))||r);return s&&r&&b(a,e,r),r};let o=class extends g{constructor(){super(),this.variant="primary",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return u`<slot></slot>`}};o.styles=[d,v`
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
    `];c([i({styleTemplate:function(t,a){let e,s,r;switch(a[0]){case"primary":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break;case"secondary":e="var(--gds-sys-color-border-subtle-01)",s=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"tertiary":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"neutral-01":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break;case"neutral-01-2":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01-2)`,r="var(--gds-sys-color-content-neutral-01)";break;case"neutral-02":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"neutral-02-2":e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-02-2)`,r="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":e="transparent",s=`var(--gds-sys-color-l${this.level}-brand-01)`,r="var(--gds-sys-color-content-inversed)";break;case"brand-02":e="transparent",s=`var(--gds-sys-color-l${this.level}-brand-02)`,r="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":e=`var(--gds-sys-color-border-${a[0]}-02)`,s=`var(--gds-sys-color-l${this.level}-${a[0]}-01)`,r=`var(--gds-sys-color-content-${a[0]}-01)`;break;default:e="transparent",s=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${e};
      --_background-color: ${s};
      --_color: ${r};
      `}})],o.prototype,"variant",2);o=c([y("gds-card")],o);export{o as G};
