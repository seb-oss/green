import{i as k,n as d,D as F,V as W,e as A,h as x,a as $,K as z,E as D,l as V,$ as G,F as P,a0 as R}from"./iframe-Dz6-vQgF.js";import{r as H}from"./resize-observer-CfkbZofs.js";import{s as M}from"./attribute-converters-CdI0trPX.js";import{I as B}from"./checkmark.component-fYR-bM0m.js";const I=k`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;var T=Object.defineProperty,U=Object.getOwnPropertyDescriptor,y=(e,t,s,a)=>{for(var l=a>1?void 0:a?U(t,s):t,h=e.length-1,n;h>=0;h--)(n=e[h])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&T(t,s,l),l};let r=class extends F{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),W.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return x`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${A(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};r.styles=[I];r.shadowRootOptions={mode:"open",delegatesFocus:!0};y([d({reflect:!0,type:Boolean})],r.prototype,"selected",2);y([d()],r.prototype,"value",2);y([d({reflect:!0,type:String})],r.prototype,"size",2);r=y([$("gds-filter-chip",{dependsOn:[z,B]})],r);const K=k`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`;var L=Object.defineProperty,q=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},o=(e,t,s,a)=>{for(var l=a>1?void 0:a?q(t,s):t,h=e.length-1,n;h>=0;h--)(n=e[h])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&L(t,s,l),l},w=(e,t,s)=>t.has(e)||S("Cannot "+s),p=(e,t,s)=>(w(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),J=(e,t,s,a)=>(w(e,t,"write to private field"),t.set(e,s),s),C=(e,t,s)=>(w(e,t,"access private method"),s),g,u,_,m,f,v,O,E,b;let i=class extends R{constructor(){super(...arguments),c(this,v),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,g,e=>{if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const s=e.target instanceof r?e.target:null;if(!s||!this.chips.includes(s))return;e.preventDefault();const a=this.chips.indexOf(s);let l=a;switch(e.key){case"ArrowDown":case"ArrowRight":l=(a+1)%this.chips.length;break;case"ArrowUp":case"ArrowLeft":l=(a-1+this.chips.length)%this.chips.length;break;case"Home":l=0;break;case"End":l=this.chips.length-1;break}p(this,u).call(this,l),this.chips[l]?.focus()}),c(this,u,e=>{this.chips.forEach((t,s)=>{t.setAttribute("tabindex",s===e?"0":"-1")})}),c(this,_,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,m,3),c(this,f,0),c(this,b,()=>{this.chips.length!==0&&p(this,u).call(this,0)})}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return x`<div
      class="chips ${A(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
      @keydown=${p(this,g)}
    >
      <slot
        @click=${p(this,_)}
        @slotchange=${C(this,v,E)}
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=C(this,v,O).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*p(this,m)&&(this._collapsed=!0,J(this,f,s)),s>p(this,f)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};g=new WeakMap;u=new WeakMap;_=new WeakMap;m=new WeakMap;f=new WeakMap;v=new WeakSet;O=function(){return this.chips[0]?.offsetHeight||0};E=function(){if(this.value===void 0)if(this.multiple){const e=this.chips.filter(t=>t.selected).map(t=>t.value);e.length&&(this.value=e)}else{const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)}else this._updateSelectedFromValue();this.updateComplete.then(()=>{p(this,b).call(this)})};b=new WeakMap;i.styles=[K];o([d({converter:M})],i.prototype,"value",1);o([d({type:Boolean})],i.prototype,"multiple",2);o([d()],i.prototype,"label",2);o([d({type:Boolean,attribute:"row-collapse"})],i.prototype,"rowCollapse",2);o([D()],i.prototype,"_collapsed",2);o([V("slot")],i.prototype,"_elSlot",2);o([H()],i.prototype,"_handleResize",1);o([G("value")],i.prototype,"_updateSelectedFromValue",1);i=o([$("gds-filter-chips",{dependsOn:[r]}),P({labelledBy:'[role="listbox"]',describedBy:'[role="listbox"]'})],i);export{i as G,r as a};
