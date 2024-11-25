var b=t=>{throw TypeError(t)};var x=(t,e,o)=>e.has(t)||b("Cannot "+o);var h=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),p=(t,e,o)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);import{i as v,x as y}from"./lit-element-C_s9q329.js";import{g as w,G as k}from"./custom-element-scoping-b4lD3laR.js";import{T as C}from"./transitional-styles-D3kSUer7.js";var l;class D{constructor(e){p(this,l,e=>{var n,a;const o=e.target;if(!this.host.navigableItems.includes(o))return;let s=!1;if(e.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[r];i==null||i.focus(),s=!0}else if(e.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[r];i==null||i.focus(),s=!0}else if(e.key==="Home")(n=this.host.navigableItems[0])==null||n.focus(),s=!0;else if(e.key==="End")(a=this.host.navigableItems[this.host.navigableItems.length-1])==null||a.focus(),s=!0;else{const r=e.key.toLowerCase();if(r.length!==1)return;const i=r>="a"&&r<="z",m=r>="0"&&r<="9";if(i||m){const d=this.host.navigableItems.find(f=>{var u;const c=(u=f.textContent)==null?void 0:u.trim().toLowerCase();return c==null?void 0:c.startsWith(r)});d==null||d.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())});(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",h(this,l))}hostDisconnected(){this.host.removeEventListener("keydown",h(this,l))}}l=new WeakMap;function P(t){let e=t;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}const F=t=>{class e extends t{constructor(){super(...arguments),this.onblur=s=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:s.relatedTarget}))},this.onfocus=s=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:s.relatedTarget}))}}focus(s){this.setAttribute("tabindex","0"),super.focus(s)}}return e},H=v`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-stroke-variant2);
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
`,E=v`
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
`;var I=Object.defineProperty,L=Object.getOwnPropertyDescriptor,O=(t,e,o,s)=>{for(var n=s>1?void 0:s?L(e,o):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(n=(s?r(e,o,n):r(n))||n);return s&&n&&I(e,o,n),n};let g=class extends k{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>C.instance.apply(this,"gds-menu-heading"))}render(){return y`<slot></slot>`}};g.styles=E;g=O([w("gds-menu-heading")],g);export{F,D as L,H as s,P as u};
