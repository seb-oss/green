var v=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var u=(s,e,t)=>(v(s,e,"read from private field"),t?t.call(s):e.get(s)),m=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},p=(s,e,t,o)=>(v(s,e,"write to private field"),o?o.call(s,t):e.set(s,t),t);import{i as f,x as w}from"./lit-element-71e04f06.js";import{g as k,G as E}from"./gds-element-54cd6e2a.js";import{T as C}from"./transitional-styles-73ecf23d.js";const P=f`
  @layer base, reset, transitional-styles;
  @layer base {
    // 2023

    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-stroke-stroke-variant2);
    }

    :host div {
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      min-width: 20ch;
    }

    :host([highlighted]) div {
      background-color: var(--gds-sys-color-container-container-shade1);
      color: var(--gds-sys-color-content-content-inverse);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-container-container-dim1);
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: currentColor;
      outline-width: 2px;
    }
  }
`,F=s=>{class e extends s{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return e};var d;class H{constructor(e){m(this,d,void 0);p(this,d,t=>{var a,l;const o=t.target;if(!this.host.navigableItems.includes(o))return;let n=!1;if(t.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[r];i==null||i.focus(),n=!0}else if(t.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[r];i==null||i.focus(),n=!0}else if(t.key==="Home")(a=this.host.navigableItems[0])==null||a.focus(),n=!0;else if(t.key==="End")(l=this.host.navigableItems[this.host.navigableItems.length-1])==null||l.focus(),n=!0;else{const r=t.key.toLowerCase();if(r.length!==1)return;const i=r>="a"&&r<="z",y=r>="0"&&r<="9";if(i||y){const c=this.host.navigableItems.find(x=>{var b;const h=(b=x.textContent)==null?void 0:b.trim().toLowerCase();return h==null?void 0:h.startsWith(r)});c==null||c.focus(),n=!0}}n&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",u(this,d))}hostDisconnected(){this.host.removeEventListener("keydown",u(this,d))}}d=new WeakMap;function N(s){let e=s;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}const I=f`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-primary-text);
      background-color: var(--gds-sys-color-container-container-dim1);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`;var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,T=(s,e,t,o)=>{for(var n=o>1?void 0:o?O(e,t):e,a=s.length-1,l;a>=0;a--)(l=s[a])&&(n=(o?l(e,t,n):l(n))||n);return o&&n&&L(e,t,n),n};let g=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>C.instance.apply(this,"gds-menu-heading"))}render(){return w`<slot></slot>`}};g.styles=I;g=T([k("gds-menu-heading")],g);export{F,H as L,P as s,N as u};
