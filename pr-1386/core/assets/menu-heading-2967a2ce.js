var m=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var c=(s,e,t)=>(m(s,e,"read from private field"),t?t.call(s):e.get(s)),f=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},p=(s,e,t,o)=>(m(s,e,"write to private field"),o?o.call(s,t):e.set(s,t),t);import{i as v,x}from"./lit-element-71e04f06.js";import{g as E,G as C}from"./gds-element-54cd6e2a.js";import{T as I}from"./transitional-styles-c1ac9719.js";const F=v`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: #666;
    }
  }
`,H=s=>{class e extends s{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return e};var u;class N{constructor(e){f(this,u,void 0);p(this,u,t=>{var a,l;const o=t.target;if(!this.host.navigableItems.includes(o))return;let n=!1;if(t.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,i=this.host.navigableItems[r];i==null||i.focus(),n=!0}else if(t.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,i=this.host.navigableItems[r];i==null||i.focus(),n=!0}else if(t.key==="Home")(a=this.host.navigableItems[0])==null||a.focus(),n=!0;else if(t.key==="End")(l=this.host.navigableItems[this.host.navigableItems.length-1])==null||l.focus(),n=!0;else{const r=t.key.toLowerCase();if(r.length!==1)return;const i=r>="a"&&r<="z",y=r>="0"&&r<="9";if(i||y){const h=this.host.navigableItems.find(w=>{var g;const d=(g=w.textContent)==null?void 0:g.trim().toLowerCase();return d==null?void 0:d.startsWith(r)});h==null||h.focus(),n=!0}}n&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",c(this,u))}hostDisconnected(){this.host.removeEventListener("keydown",c(this,u))}}u=new WeakMap;function G(s){let e=s;for(;e.assignedElements().length>0&&e.assignedElements()[0].nodeName==="SLOT";)e=e.assignedElements()[0];return e}const k=v`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`;var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,T=(s,e,t,o)=>{for(var n=o>1?void 0:o?O(e,t):e,a=s.length-1,l;a>=0;a--)(l=s[a])&&(n=(o?l(e,t,n):l(n))||n);return o&&n&&L(e,t,n),n};let b=class extends C{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>I.instance.apply(this,"gds-menu-heading"))}render(){return x`<slot></slot>`}};b.styles=k;b=T([E("gds-menu-heading")],b);export{H as F,N as L,F as s,G as u};
