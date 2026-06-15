import{i as _,I as h,H as g,z as f,h as c,v as y,g as x,Q as P,a as $,n as d,R as m,a7 as b,o as O}from"./iframe-D2OkY6_k.js";import{I as S}from"./people-profile.component-owwk9K3c.js";const A=_`
  @layer tokens, core, sizes, shapes;

  @layer core {
    :host {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
    }

    ::slotted([gds-element='gds-avatar']) {
      --gds-avatar-grouped: 1;
    }
  }
`;var G=Object.getOwnPropertyDescriptor,E=(e,t,r,i)=>{for(var s=i>1?void 0:i?G(t,r):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(s=n(s)||s);return s};let v=class extends h(g(f)){connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","group")}render(){return c`<slot></slot>`}};v.styles=[y,A];v=E([x("gds-avatar-group")],v);const j=_`
  @layer tokens, core, sizes, shapes;

  @layer core {
    :host {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      --_size: var(--gds-sys-space-3xl);
      --_radius: var(--gds-sys-space-max);
      --_font: var(--gds-sys-text-detail-m-book);
      --_overlap: -10px;
      --_cutout-extra: 6px;

      /* Cutout */
      --_cutout-size: calc(var(--_size) + var(--_cutout-extra));
      --_cutout-radius: calc(var(--_cutout-size) / 2);
      --_grouped-enabled: var(
        --gds-avatar-grouped,
        var(--gds-avatar-cutout-enabled, 0)
      );
      --_effective-overlap: calc(var(--_overlap) * var(--_grouped-enabled));
      --_effective-cutout-radius: max(
        0.001px,
        calc(var(--_cutout-radius) * var(--_grouped-enabled))
      );
      --_cutout-right-offset: calc(
        var(--_size) / 2 + var(--_effective-overlap)
      );
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      font: var(--_font);
      letter-spacing: 0.02em;
      user-select: none;
      box-sizing: border-box;
      overflow: hidden;
      background: var(--gds-sys-color-l3-neutral-01-2);
      color: var(--gds-sys-color-content-neutral-01);
      width: var(--_size);
      height: var(--_size);
      border-radius: var(--_radius);
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    slot[name='badge'] {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(33%, -33%);
    }
  }

  @layer sizes {
    :host([size='xs']) {
      --_size: var(--gds-sys-space-xl);
      --_font: var(--gds-sys-text-detail-2xs-book);
      --_overlap: -6px;
      --_cutout-extra: 4px;
    }

    :host([size='s']) {
      --_size: var(--gds-sys-space-2xl);
      --_font: var(--gds-sys-text-detail-xs-book);
      --_overlap: -8px;
      --_cutout-extra: 5px;
    }

    :host([size='m']) {
      --_size: var(--gds-sys-space-3xl);
      --_font: var(--gds-sys-text-detail-s-book);
      --_overlap: -10px;
      --_cutout-extra: 6px;
    }

    :host([size='l']) {
      --_size: var(--gds-sys-space-4xl);
      --_font: var(--gds-sys-text-detail-m-book);
      --_overlap: -12px;
      --_cutout-extra: 8px;
    }
  }

  @layer shapes {
    :host {
      margin-inline-start: var(--_effective-overlap);
    }

    :host(:first-child) {
      margin-inline-start: 0;
    }

    :host(:not(:last-child)) .avatar {
      mask-image: radial-gradient(
        circle var(--_effective-cutout-radius) at
          calc(100% + var(--_cutout-right-offset)) 50%,
        #0000 max(0px, calc(var(--_effective-cutout-radius) - 0.1px)),
        #000 var(--_effective-cutout-radius)
      );
    }

    .avatar.square {
      --_radius: var(--gds-sys-space-2xs);
    }
  }
`;var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},o=(e,t,r,i)=>{for(var s=i>1?void 0:i?I(t,r):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(s=(i?n(t,r,s):n(s))||s);return i&&s&&D(t,r,s),s},M=(e,t,r)=>t.has(e)||z("Cannot "+r),T=(e,t,r)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),u=(e,t,r)=>(M(e,t,"access private method"),r),p,k,w,C;let a=class extends P(h(g(f))){constructor(){super(...arguments),T(this,p),this.src="",this.alt="",this.size="m",this.shape="circular",this.level="2"}render(){const e=$({avatar:!0,[this.size]:!0,[this.shape]:!0,"has-image":!!this.src});return c`
      <div class="${e}">${u(this,p,w).call(this)}</div>
      ${u(this,p,C).call(this)}
    `}};p=new WeakSet;k=function(){return c`<gds-icon-people-profile></gds-icon-people-profile>`};w=function(){return this.src?c`
        <img src="${this.src}" alt="${O(this.alt||void 0)}" />
      `:c`<slot>${u(this,p,k).call(this)}</slot>`};C=function(){return c`<slot name="badge"></slot>`};a.styles=[y,j];o([d({type:String})],a.prototype,"src",2);o([d({type:String})],a.prototype,"alt",2);o([d({type:String,reflect:!0})],a.prototype,"size",2);o([d({type:String,reflect:!0})],a.prototype,"shape",2);o([d()],a.prototype,"level",2);o([m({...b("background"),selector:".avatar"})],a.prototype,"background",2);o([m({...b("content"),selector:".avatar"})],a.prototype,"color",2);a=o([x("gds-avatar",{dependsOn:[S]})],a);export{v as G,a};
