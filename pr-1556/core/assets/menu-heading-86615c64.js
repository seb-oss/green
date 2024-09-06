var p=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var g=(s,e,t)=>(p(s,e,"read from private field"),t?t.call(s):e.get(s)),v=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},m=(s,e,t,o)=>(p(s,e,"write to private field"),o?o.call(s,t):e.set(s,t),t);import{i as f,k}from"./lit-element-1d72f0ce.js";import{g as w,G as C}from"./gds-element-d791ed3d.js";import{T as E}from"./transitional-styles-c75c0fd2.js";var d;class P{constructor(e){v(this,d,void 0);m(this,d,t=>{var a,l;const o=t.target;if(!this.host.navigableItems.includes(o))return;let r=!1;if(t.key==="ArrowDown"){const n=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[n];i==null||i.focus(),r=!0}else if(t.key==="ArrowUp"){const n=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[n];i==null||i.focus(),r=!0}else if(t.key==="Home")(a=this.host.navigableItems[0])==null||a.focus(),r=!0;else if(t.key==="End")(l=this.host.navigableItems[this.host.navigableItems.length-1])==null||l.focus(),r=!0;else{const n=t.key.toLowerCase();if(n.length!==1)return;const i=n>="a"&&n<="z",x=n>="0"&&n<="9";if(i||x){const c=this.host.navigableItems.find(y=>{var b;const h=(b=y.textContent)==null?void 0:b.trim().toLowerCase();return h==null?void 0:h.startsWith(n)});c==null||c.focus(),r=!0}}r&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",g(this,d))}hostDisconnected(){this.host.removeEventListener("keydown",g(this,d))}}d=new WeakMap;function F(s){let e=s;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}const H=s=>{class e extends s{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return e},N=f`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-stroke-stroke-variant2);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
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

    :host([aria-hidden='true']) div {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: auto;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-space-2xs);
      border: var(--gds-space-3xs) solid currentColor;
      padding: var(--gds-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-sys-color-base-white);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`,I=f`
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
`;var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,z=(s,e,t,o)=>{for(var r=o>1?void 0:o?O(e,t):e,a=s.length-1,l;a>=0;a--)(l=s[a])&&(r=(o?l(e,t,r):l(r))||r);return o&&r&&L(e,t,r),r};let u=class extends C{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>E.instance.apply(this,"gds-menu-heading"))}render(){return k`<slot></slot>`}};u.styles=I;u=z([w("gds-menu-heading")],u);export{H as F,P as L,N as s,F as u};
