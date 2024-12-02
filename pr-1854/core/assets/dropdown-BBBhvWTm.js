import{m as L,s as te}from"./runtime-CMQcyTl6.js";import{u as se}from"./localized-decorator-B8fm5KIw.js";import{n,g as F,h as f,G as q}from"./custom-element-scoping-b4lD3laR.js";import{a as K}from"./query-p8xgzTDt.js";import{r as ie}from"./query-async-MEroNOeJ.js";import{e as N}from"./class-map-Bz98xO8-.js";import{o as re}from"./if-defined-Ct9lF4W9.js";import{o as oe}from"./icon-BAGUC4Iy.js";import{n as O}from"./when-BR7zwNJC.js";import{t as U}from"./tokens.style-EvBKHrBe.js";import{T as H}from"./transitional-styles-DxQYqyXn.js";import{o as ae}from"./observe-light-dom-CmJPHUQ4.js";import{w as C}from"./watch-tFciLXSI.js";import{a as le}from"./button-Dnkpl5DK.js";import{i as Y}from"./lit-element-C_s9q329.js";import"./popover-DdkKlnj6.js";import"./backdrop-BGzK9qgd.js";import"./chevron-bottom-CTTxLLl8.js";import"./checkmark-D62oMl69.js";import{n as ne,e as he}from"./ref-D_ho-JAG.js";import{s as de,F as pe,L as ce,u as ue}from"./menu-heading-BW0a29tw.js";const ge=Y`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-color-l3-content-tertiary);
      font-family: inherit;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-m);
      height: var(--gds-space-3xl);
      border-style: solid;
      border-width: var(--gds-space-4xs);
      border-radius: var(--gds-space-xs);
      padding-inline: var(--gds-space-m);
      cursor: pointer;
      box-sizing: border-box;
      font-size: var(--gds-space-m);
      font-family: inherit;
      border-color: var(--gds-color-l3-border-secondary);
      color: var(--gds-color-l3-content-tertiary);
      background-color: var(--gds-color-l3-background-secondary);
      transition:
        background-color 0.2s,
        border-color 0.2s,
        color 0.2s;

      &.small {
        height: var(--gds-space-xl);
        padding: var(--gds-space-s);
        padding-right: var(--gds-space-xs);
        font-size: calc(var(--gds-space-s) + 2px);

        .icon {
          width: var(--gds-space-l);
          height: var(--gds-space-l);
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: var(--gds-space-xl);
        width: var(--gds-space-xl);
      }

      &[aria-expanded='true'] ::part(icon) {
        transform: scaleY(-1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-color-l3-content-disabled);
      border-color: var(--gds-color-l3-border-tertiary);
      border-width: 0 0 var(--gds-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-color-l3-border-secondary);
        color: var(--gds-color-l3-content-tertiary);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-color-l3-content-disabled);
      }
    }
  }
`,fe=Y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var ve=Object.defineProperty,me=Object.getOwnPropertyDescriptor,J=e=>{throw TypeError(e)},b=(e,t,s,i)=>{for(var r=i>1?void 0:i?me(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&ve(t,s,r),r},z=(e,t,s)=>t.has(e)||J("Cannot "+s),be=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),V=(e,t,s)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),w=(e,t,s,i)=>(z(e,t,"write to private field"),t.set(e,s),s),I=(e,t,s)=>(z(e,t,"access private method"),s),g,$,S;let u=class extends pe(q){constructor(){super(),V(this,$),V(this,g,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",I(this,$,S)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),I(this,$,S).call(this,e))})}get hidden(){return be(this,g)}set hidden(e){this.isPlaceholder||(w(this,g,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(w(this,g,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>H.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(w(this,g,!0),this.setAttribute("aria-hidden","true")):(w(this,g,!1),this.setAttribute("aria-hidden","false"))}render(){var s;const e=(s=this.parentElement)==null?void 0:s.multiple,t=f`
      <span class="checkbox ${N({checked:this.selected})}">
        ${this.selected?f`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),f`<div>${O(e,()=>t)} <slot></slot></div>`}};g=new WeakMap;$=new WeakSet;S=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};u.styles=[U,de];b([n()],u.prototype,"value",2);b([n({attribute:"aria-hidden",reflect:!0})],u.prototype,"hidden",1);b([n({attribute:"aria-selected",reflect:!0})],u.prototype,"selected",2);b([n({type:Boolean,reflect:!0})],u.prototype,"isPlaceholder",2);b([C("isplaceholder")],u.prototype,"_handlePlaceholderStatusChange",1);u=b([F("gds-option")],u);var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Q=e=>{throw TypeError(e)},E=(e,t,s,i)=>{for(var r=i>1?void 0:i?_e(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&ye(t,s,r),r},we=(e,t,s)=>t.has(e)||Q("Cannot "+s),x=(e,t,s)=>(we(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>t.has(e)?Q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y,A;let v=class extends q{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,R(this,y,he()),R(this,A,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new ce(this)}get navigableItems(){return this.visibleOptionElements}get options(){return x(this,y).value?ue(x(this,y).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),H.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",x(this,A))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return f`<slot ${ne(x(this,y))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};y=new WeakMap;A=new WeakMap;v.styles=fe;E([n({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],v.prototype,"multiple",2);E([n()],v.prototype,"compareWith",2);E([C("multiple")],v.prototype,"_rerenderOptions",1);v=E([F("gds-listbox")],v);var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},a=(e,t,s,i)=>{for(var r=i>1?void 0:i?$e(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(i?d(t,s,r):d(r))||r);return i&&r&&xe(t,s,r),r},G=(e,t,s)=>t.has(e)||X("Cannot "+s),h=(e,t,s)=>(G(e,t,"read from private field"),t.get(e)),p=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Ce=(e,t,s,i)=>(G(e,t,"write to private field"),t.set(e,s),s),M=(e,t,s)=>(G(e,t,"access private method"),s),c,W,P,D,T,B,_,Z,j,ee,m,k;let o=class extends le{constructor(){super(),p(this,_),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,p(this,c),p(this,W,e=>{const t=e.getBoundingClientRect(),i=window.innerHeight-t.bottom,r=t.top;let l=Math.min(r,this.maxHeight);return i>r&&(l=Math.min(i,this.maxHeight)),`${l-16}px`}),p(this,P,e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!t.value)return;this.options.filter(i=>!this.searchFilter(t.value,i)).forEach(i=>i.hidden=!0)}),p(this,D,e=>{var t;(t=this._elListbox)==null||t.then(s=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),s.focus();return}})}),p(this,T,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),p(this,B,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),p(this,m,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),p(this,k,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),se(this)}get type(){return"gds-dropdown"}get options(){return h(this,c)?Array.from(h(this,c)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(h(this,c))return Array.from(h(this,c)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var t,s;let e;return Array.isArray(this.value)?this.value.length>2?e=L(te`${this.value.length} selected`):e=this.value.reduce((i,r)=>{var l;return i+((l=this.options.find(d=>d.value===r))==null?void 0:l.innerHTML)+", "},"").slice(0,-2):e=(t=this.options.find(i=>i.selected))==null?void 0:t.innerHTML,e||((s=this.placeholder)==null?void 0:s.innerHTML)||""}connectedCallback(){super.connectedCallback(),H.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return f`
      ${O(this.label&&!this.hideLabel,()=>f`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${h(this,W)}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <button
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          part="trigger"
          class=${N({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${oe(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${O(this.searchable,()=>f`<input
              id="searchinput"
              type="text"
              aria-label="${L("Filter available options")}"
              placeholder="${L("Search")}"
              @keydown=${h(this,D)}
              @input=${h(this,P)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${re(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${M(this,_,Z)}"
          @gds-focus="${h(this,B)}"
          @keydown=${h(this,T)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),Ce(this,c,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(s=>this.compareWith(s.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var s;const e=this.open;(s=h(this,c))==null||s.forEach(i=>i.hidden=!e),e?M(this,_,j).call(this):(M(this,_,ee).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(i=>i.selected);this.updateComplete.then(()=>t==null?void 0:t.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:e},bubbles:!0,composed:!0}))}};c=new WeakMap;W=new WeakMap;P=new WeakMap;D=new WeakMap;T=new WeakMap;B=new WeakMap;_=new WeakSet;Z=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(s=>s.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var s;return(s=this._elTriggerBtn)==null?void 0:s.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};j=function(){this.addEventListener("blur",h(this,m)),this.addEventListener("gds-blur",h(this,m)),this.addEventListener("keydown",h(this,k))};ee=function(){this.removeEventListener("blur",h(this,m)),this.removeEventListener("gds-blur",h(this,m)),this.removeEventListener("keydown",h(this,k))};m=new WeakMap;k=new WeakMap;o.styles=[U,ge];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],o.prototype,"label",2);a([n({type:Boolean,reflect:!0})],o.prototype,"open",2);a([n({type:Boolean,reflect:!0})],o.prototype,"searchable",2);a([n({type:Boolean,reflect:!0})],o.prototype,"multiple",2);a([n()],o.prototype,"compareWith",2);a([n()],o.prototype,"searchFilter",2);a([n({type:Boolean,attribute:"sync-popover-width"})],o.prototype,"syncPopoverWidth",2);a([n({type:Number,attribute:"max-height"})],o.prototype,"maxHeight",2);a([n()],o.prototype,"size",2);a([n({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);a([n()],o.prototype,"disableMobileStyles",2);a([K("#trigger")],o.prototype,"_elTriggerBtn",2);a([ie("#listbox")],o.prototype,"_elListbox",2);a([K("#searchinput")],o.prototype,"_elSearchInput",2);a([ae({attributes:!0,childList:!0,subtree:!0,characterData:!0})],o.prototype,"_handleLightDOMChange",1);a([C("value")],o.prototype,"_handleValueChange",1);a([C("open")],o.prototype,"_onOpenChange",1);o=a([F("gds-dropdown")],o);
