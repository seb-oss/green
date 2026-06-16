import{i as d,w,f as x,k as f,l as m,m as k,o as $,h as c,G as z,t as i,_ as o,s as t,n as y,p,q as P,u,v as C,g}from"./declarative-layout-mixins-DpDI3i6X.js";const T=d`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;var G=T;let r=class extends w(x(f(m(k($(z)))))){constructor(){super(...arguments),this.level="2"}render(){return c`<slot></slot>`}};r.styles=[i,G];o([t()],r.prototype,"display",2);o([y()],r.prototype,"level",2);o([t(p("content"))],r.prototype,"color",2);o([t(p("background"))],r.prototype,"background",2);o([t({styleTemplate:function(s,a){const e=this,[l,b=e["border-style"]||"solid",v=e["border-color"]||"subtle-01"]=a,_=`var(--gds-sys-space-${l})`,h=P(v,"border",e.level);return`border: ${_} ${b} ${h};`}})],r.prototype,"border",2);o([t(p("border"))],r.prototype,"border-color",2);o([t(u)],r.prototype,"border-width",2);o([t()],r.prototype,"border-style",2);o([t(C)],r.prototype,"border-radius",2);o([t({valueTemplate:s=>`var(--gds-sys-shadow-${s}-01), var(--gds-sys-shadow-${s}-02)`})],r.prototype,"box-shadow",2);o([t()],r.prototype,"opacity",2);o([t()],r.prototype,"overflow",2);o([t()],r.prototype,"box-sizing",2);o([t()],r.prototype,"z-index",2);o([t({styleTemplate:(s,a)=>`font: var(--gds-sys-text-${a[0]});`})],r.prototype,"font",2);o([t({valueTemplate:s=>`var(--gds-sys-text-weight-${s})`})],r.prototype,"font-weight",2);o([t()],r.prototype,"text-align",2);o([t()],r.prototype,"text-wrap",2);o([t()],r.prototype,"overflow-wrap",2);o([t()],r.prototype,"white-space",2);o([t({...u,styleTemplate:(s,a)=>{const e=a[0],l=a[1]||e;return`gap: ${e} ${l};`},cacheOverrideKey:"flex"})],r.prototype,"gap",2);o([t()],r.prototype,"align-items",2);o([t()],r.prototype,"align-content",2);o([t()],r.prototype,"justify-content",2);o([t()],r.prototype,"justify-items",2);o([t()],r.prototype,"flex-direction",2);o([t()],r.prototype,"flex-wrap",2);o([t()],r.prototype,"place-items",2);o([t()],r.prototype,"place-content",2);o([t()],r.prototype,"aspect-ratio",2);o([t()],r.prototype,"cursor",2);o([t()],r.prototype,"pointer-events",2);r=o([g("gds-div")],r);const E=d`
  :host {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01);
    --_color: var(--gds-sys-color-content-neutral-01);
    box-sizing: border-box;
    border-color: var(--_border);
    background-color: var(--_background);
    color: var(--_color);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    display: flex;
    flex-direction: column;
    --gds-card-variant-background: var(--_background);
  }

  :host([variant='neutral-01']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-01-2']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01-2);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-02']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-02);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-02-outlined']) {
    --_border: var(--gds-sys-color-border-neutral-02);
    --_background: var(--gds-sys-color-l2-neutral-02);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-02-2']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-02-2);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='brand-01']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-brand-01);
    --_color: var(--gds-sys-color-content-neutral-05);
  }

  :host([variant='brand-02']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-brand-02);
    --_color: var(--gds-sys-color-content-brand-02);
  }
`;var S=E;let n=class extends r{constructor(){super(),this.variant="neutral-01",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return c`<slot></slot>`}};n.styles=[i,S];o([y({reflect:!0})],n.prototype,"variant",2);n=o([g("gds-card")],n);export{n as G,r as a};
