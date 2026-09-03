"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7612],{801(e,t,s){s.d(t,{K:()=>f});var i,o,a,r,l,n,d,c,h=s(745),p=s(4367),g=s(3578),u=s(3539),b=s(7526),y=s(5073),v=s(4987),m=s(6312),x=s(9443).AH`
  @layer tokens, core, variants, sizes, states, notification;

  @layer core {
    :host {
      display: inline-block;
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: var(--gds-sys-space-3xs);
      padding: var(--_padding);
      min-height: var(--_block-size);
      border-radius: var(--_border-radius);
      width: 100%;
      min-width: var(--_inline-size);
      font: var(--_font);
      background-color: var(--_bg);
      color: var(--_color);
      box-sizing: border-box;

      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-xs);
      --_block-size: var(--gds-sys-space-xs);
      --_border-radius: var(--gds-sys-space-2xs);
      --_inline-size: var(--gds-sys-space-l);
      --_font: var(--gds-sys-text-detail-s-book);
    }
  }

  @layer variants {
    .badge.information {
      --_bg: var(--gds-sys-color-l3-information-03);
      --_color: var(--gds-sys-color-content-neutral-01);
    }

    .badge.notice {
      --_bg: var(--gds-sys-color-l3-notice-03);
      --_color: var(--gds-sys-color-content-notice-01);
    }

    .badge.positive {
      --_bg: var(--gds-sys-color-l3-positive-03);
      --_color: var(--gds-sys-color-content-positive-03);
    }

    .badge.warning {
      --_bg: var(--gds-sys-color-l3-warning-03);
      --_color: var(--gds-sys-color-content-warning-01);
    }

    .badge.negative {
      --_bg: var(--gds-sys-color-l3-negative-03);
      --_color: var(--gds-sys-color-content-negative-01);
    }

    .badge.disabled {
      --_bg: var(--gds-sys-color-l3-disabled-03);
      --_color: var(--gds-sys-color-content-disabled-01);
    }
  }

  @layer sizes {
    .badge.small {
      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-2xs);
      --_block-size: var(--gds-sys-space-m);
      --_border-radius: var(--gds-sys-space-3xs);
      --_font: var(--gds-sys-text-detail-xs-book);
    }
  }

  @layer notification {
    .badge.notification {
      --_padding: var(--gds-sys-space-3xs);
      --_block-size: var(--gds-sys-space-xs);
      --_border-radius: var(--gds-sys-space-max);
      --_inline-size: 0;
      justify-content: center;
      gap: 0;
      --_bg: var(--gds-sys-color-l3-negative-01);
      --_font: var(--gds-sys-text-detail-xs-book);
      --_color: var(--gds-sys-color-content-neutral-05);
    }

    .badge.notification.with-content {
      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-2xs);
      --_block-size: var(--gds-sys-space-m);
      --_inline-size: var(--gds-sys-space-l);
    }
  }

  @layer states {
    .badge.rounded {
      --_border-radius: var(--gds-sys-space-max);
      justify-content: center;
    }
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }
`;let f=class extends((0,v.Q8)((0,v.TM)((0,v.lt)(u.j)))){constructor(){super(...arguments),(0,h.VK)(this,i),(0,h.VK)(this,a),(0,h.VK)(this,l),(0,h.VK)(this,d),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const e=(0,g.H)({badge:!0,[this.variant]:!0,[this.size]:"small"===this.size,notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return b.qy`
      <div class="${e}">
        ${[(0,h.jq)(this,a,r).call(this),(0,h.jq)(this,l,n).call(this),(0,h.jq)(this,d,c).call(this)]}
      </div>
    `}};i=new WeakSet,o=function(e,t){const s=e.target.assignedNodes({flatten:!0});this[t]=s.length>0&&s.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim())},a=new WeakSet,r=function(){if("small"!==this.size||!this.notification)return b.qy`<slot
        name="lead"
        @slotchange=${e=>(0,h.jq)(this,i,o).call(this,e,"leadSlotOccupied")}
      ></slot>`},l=new WeakSet,n=function(){return b.qy`<slot
      @slotchange=${e=>(0,h.jq)(this,i,o).call(this,e,"mainSlotOccupied")}
    ></slot>`},d=new WeakSet,c=function(){return b.qy`<slot name="trail"></slot>`},f.styles=[y.LU,x],(0,h.Cc)([(0,p.MZ)()],f.prototype,"variant",2),(0,h.Cc)([(0,p.MZ)({type:String})],f.prototype,"size",2),(0,h.Cc)([(0,p.MZ)({attribute:"notification",type:Boolean,reflect:!0})],f.prototype,"notification",2),(0,h.Cc)([(0,p.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],f.prototype,"rounded",2),(0,h.Cc)([(0,p.wk)()],f.prototype,"mainSlotOccupied",2),(0,h.Cc)([(0,p.wk)()],f.prototype,"leadSlotOccupied",2),f=(0,h.Cc)([(0,b.Y$)("gds-badge",{dependsOn:[m.o]})],f)},8609(e,t,s){s.d(t,{z:()=>d});var i=s(745),o=s(4367),a=s(5073),r=s(7526),l=s(8833),n=s(9443).AH`
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
`;let d=class extends l.o{constructor(){super(),this.variant="neutral-01",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return r.qy`<slot></slot>`}};d.styles=[a.LU,n],(0,i.Cc)([(0,o.MZ)({reflect:!0})],d.prototype,"variant",2),d=(0,i.Cc)([(0,r.Y$)("gds-card")],d)},8833(e,t,s){s.d(t,{o:()=>p});var i=s(745),o=s(4367),a=s(3539),r=s(5073),l=s(9399),n=s(4508),d=s(7526),c=s(4987),h=s(9443).AH`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;let p=class extends((0,c.Q8)((0,c.vi)((0,c.TM)((0,c.Md)((0,c.lt)((0,c.qC)(a.j))))))){constructor(){super(...arguments),this.level="2"}render(){return d.qy`<slot></slot>`}};p.styles=[r.LU,h],(0,i.Cc)([(0,l.F)()],p.prototype,"display",2),(0,i.Cc)([(0,o.MZ)()],p.prototype,"level",2),(0,i.Cc)([(0,l.F)((0,n.T$)("content"))],p.prototype,"color",2),(0,i.Cc)([(0,l.F)((0,n.T$)("background"))],p.prototype,"background",2),(0,i.Cc)([(0,l.F)({styleTemplate:function(e,t){const s=this,[i,o=s["border-style"]||"solid",a=s["border-color"]||"subtle-01"]=t;return`border: var(--gds-sys-space-${i}) ${o} ${(0,n.ol)(a,"border",s.level)};`}})],p.prototype,"border",2),(0,i.Cc)([(0,l.F)((0,n.T$)("border"))],p.prototype,"border-color",2),(0,i.Cc)([(0,l.F)(n.MF)],p.prototype,"border-width",2),(0,i.Cc)([(0,l.F)()],p.prototype,"border-style",2),(0,i.Cc)([(0,l.F)(n.SE)],p.prototype,"border-radius",2),(0,i.Cc)([(0,l.F)({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],p.prototype,"box-shadow",2),(0,i.Cc)([(0,l.F)()],p.prototype,"opacity",2),(0,i.Cc)([(0,l.F)()],p.prototype,"overflow",2),(0,i.Cc)([(0,l.F)()],p.prototype,"box-sizing",2),(0,i.Cc)([(0,l.F)()],p.prototype,"z-index",2),(0,i.Cc)([(0,l.F)({styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],p.prototype,"font",2),(0,i.Cc)([(0,l.F)({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],p.prototype,"font-weight",2),(0,i.Cc)([(0,l.F)()],p.prototype,"text-align",2),(0,i.Cc)([(0,l.F)()],p.prototype,"text-wrap",2),(0,i.Cc)([(0,l.F)()],p.prototype,"overflow-wrap",2),(0,i.Cc)([(0,l.F)()],p.prototype,"white-space",2),(0,i.Cc)([(0,l.F)({...n.MF,styleTemplate:(e,t)=>{const s=t[0];return`gap: ${s} ${t[1]||s};`},cacheOverrideKey:"flex"})],p.prototype,"gap",2),(0,i.Cc)([(0,l.F)()],p.prototype,"align-items",2),(0,i.Cc)([(0,l.F)()],p.prototype,"align-content",2),(0,i.Cc)([(0,l.F)()],p.prototype,"justify-content",2),(0,i.Cc)([(0,l.F)()],p.prototype,"justify-items",2),(0,i.Cc)([(0,l.F)()],p.prototype,"flex-direction",2),(0,i.Cc)([(0,l.F)()],p.prototype,"flex-wrap",2),(0,i.Cc)([(0,l.F)()],p.prototype,"place-items",2),(0,i.Cc)([(0,l.F)()],p.prototype,"place-content",2),(0,i.Cc)([(0,l.F)()],p.prototype,"aspect-ratio",2),(0,i.Cc)([(0,l.F)()],p.prototype,"cursor",2),(0,i.Cc)([(0,l.F)()],p.prototype,"pointer-events",2),p=(0,i.Cc)([(0,d.Y$)("gds-div")],p)},7612(e,t,s){s.d(t,{E:()=>le});var i,o,a,r,l,n,d,c,h,p,g,u,b,y,v,m,x,f,C,w,_,k,S,$,M,z,T,V,E,q=s(2816),W=s(745),L=s(6743),A=s(9443),K=s(4367),Z=s(7639),j=s(505),F=s(7956),O=s(227),H=s(7708),B=s(2655),D=s(7526),P=s(2606),Y=s(3045),N=s(5073),U=s(4457),I=s(5552),G=s(1239),Q=s(685),R=s(1374),X=s(4987),J=s(8558),ee=s(6290),te=s(6428),se=s(2581),ie=s(2144),oe=A.AH`
  @layer base, reset;

  @layer base {
    :host {
      isolation: auto;
      contain: none;
    }

    #field::part(_base) {
      cursor: pointer;
      block-size: auto;
    }

    #clear-btn {
      margin-top: calc(-1 * var(--gds-sys-space-xs));
      margin-bottom: calc(-1 * var(--gds-sys-space-xs));
    }

    button#trigger {
      flex: 0 1 100%;
      cursor: pointer;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    #trigger:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-sys-radius-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-content-disabled-01);
      border-color: var(--gds-sys-color-border-neutral-01);
      border-width: 0 0 var(--gds-sys-space-5xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-neutral-01);
        color: var(--gds-sys-color-content-neutral-01);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-sys-text-weight-book);
        color: var(--gds-sys-color-content-disabled-01);
      }
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`,ae=s(4851);let re=class extends J.S{constructor(){super(),(0,W.VK)(this,o),(0,W.VK)(this,m),(0,W.VK)(this,f),(0,W.VK)(this,k),(0,W.VK)(this,$),(0,W.VK)(this,z),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,(0,W.VK)(this,i,void 0),(0,W.VK)(this,r,()=>D.qy`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${this.placeholder?.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${e=>{e.stopImmediatePropagation()}}
        @input=${e=>{(0,W.jq)(this,k,S).call(this,e.target.value,{emitChange:!1}),(0,W.S7)(this,g).call(this,e),(0,W.S7)(this,c).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{"ArrowDown"===e.key&&(e.preventDefault(),(0,W.S7)(this,c).call(this,!0,"show")&&(this.open=!0),this.updateComplete.then(()=>(0,W.S7)(this,w).call(this))),"Enter"===e.key&&(0,W.jq)(this,k,S).call(this,this.value,{emitInput:!1})}}
      />
    `),(0,W.VK)(this,l,()=>D.qy`
      <button
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${(0,Z._)(this.displayValue)}</span>
        </slot>
      </button>
    `),(0,W.VK)(this,n,e=>{this.open||this.dispatchCustomEvent("gds-blur",{detail:{relatedTarget:e.relatedTarget},bubbles:!1,composed:!0})}),(0,W.VK)(this,d,e=>{if(this.combobox){const t=e.getBoundingClientRect(),s=window.innerHeight-t.bottom,i=t.top;let o=Math.min(i,this.maxHeight);return s>i&&(o=Math.min(s,this.maxHeight)),o-16+"px"}return Math.min(window.innerHeight,this.maxHeight)-16+"px"}),(0,W.VK)(this,c,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),(0,W.VK)(this,h,e=>{(0,W.S7)(this,c).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),(0,W.VK)(this,p,e=>{e.preventDefault(),e.stopPropagation(),(0,W.jq)(this,k,S).call(this,void 0,{beforeDispatch:()=>this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0})})}),(0,W.VK)(this,g,e=>{if(!e.currentTarget)return;if(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}}))return;const t=e.currentTarget;this.options.forEach(e=>e.hidden=!1),t.value&&this.options.filter(e=>!this.searchFilter(t.value,e)).forEach(e=>e.hidden=!0)}),(0,W.VK)(this,u,e=>{"ArrowDown"!==e.key&&"Tab"!==e.key||(e.preventDefault(),(0,W.S7)(this,w).call(this))}),(0,W.VK)(this,b,e=>{if("Tab"===e.key&&this.searchable)return e.preventDefault(),void this._elSearchInput?.focus()}),(0,W.VK)(this,y,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),(0,W.VK)(this,v,e=>{const t=e.target;this.options.includes(t)&&(this.multiple?(0,W.jq)(this,k,S).call(this,(0,W.jq)(this,m,x).call(this,t)):(0,W.jq)(this,k,S).call(this,t.value,{beforeDispatch:()=>{(0,W.S7)(this,c).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))}}))}),(0,W.VK)(this,w,()=>{this.updateComplete.then(()=>{const e=this.navigableItems;(e.find(e=>e.selected)||e[0])?.focus()})}),(0,W.VK)(this,_,!1),(0,W.VK)(this,V,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(0,W.S7)(this,c).call(this,!1,"close")&&(this.open=!1)}),(0,W.VK)(this,E,e=>{"Tab"===e.key&&!this.searchable&&(0,W.S7)(this,c).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}),new I.y(this)}get type(){return"gds-dropdown"}get options(){return(0,W.S7)(this,i)?Array.from((0,W.S7)(this,i)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if((0,W.S7)(this,i))return Array.from((0,W.S7)(this,i)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){if(void 0===this.value)return this.placeholder?.innerText||"";let e;return e=Array.isArray(this.value)?this.value.slice(0,5).reduce((e,t)=>e+this.options.find(e=>this.compareWith(e.value,t))?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):this.options.find(e=>this.compareWith(e.value,this.value))?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}get navigableItems(){return this.options.filter(e=>!e.hidden)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",(0,W.S7)(this,n)),U.n.instance.applyScoped(this,"gds-dropdown","t-listbox"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleOpenChange()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",(0,W.S7)(this,n))}render(){return D.qy`
      ${(0,j.z)(!this.plain&&!this.hideLabel,()=>D.qy`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${(0,j.z)(this.supportingText.length>0,()=>D.qy`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `)}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${(0,W.S7)(this,d)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[(0,F.cY)(8),(0,F.UU)()]:ie.E.DefaultMiddleware}
        @gds-ui-state=${(0,W.S7)(this,h)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${(0,j.z)(this.value&&this.multiple&&this.value.length>0,()=>D.qy`<gds-badge
                rounded
                size=${"small"===this.size?"small":"default"}
                slot="lead"
                aria-label=${(0,L.ab)(L.gx`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${(0,j.z)(this.clearable&&!this.disabled&&(Array.isArray(this.value)?this.value.length>0:Boolean(this.value)),()=>D.qy`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${"small"===this.size?"xs":"small"}
                label="${(0,L.ab)("Clear selection")}"
                @click=${(0,W.S7)(this,p)}
                slot="action"
              >
                <gds-icon-cross-small></gds-icon-cross-small>
              </gds-button>`)}
          ${(0,j.z)(this.combobox&&!this.multiple,()=>(0,W.S7)(this,r).call(this))}
          ${(0,j.z)(!this.combobox||this.multiple,()=>(0,W.S7)(this,l).call(this))}
          <gds-icon-chevron-bottom
            size=${"small"===this.size?"m":"l"}
            slot="action"
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${(0,j.z)(this.searchable,()=>D.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,L.ab)("Filter available options")}"
              placeholder="${(0,L.ab)("Search")}"
              @keydown=${(0,W.S7)(this,u)}
              @input=${(0,W.S7)(this,g)}
            />`)}
        <div
          id="listbox"
          class="menu-listbox"
          role="listbox"
          aria-multiselectable="${this.multiple}"
          tabindex="-1"
          @focus="${(0,W.S7)(this,w)}"
          @gds-select="${(0,W.S7)(this,v)}"
          @gds-focus="${(0,W.S7)(this,y)}"
          @keydown=${(0,W.S7)(this,b)}
        >
          <slot></slot>
        </div>
      </gds-popover>

      ${(0,j.z)((0,W.jq)(this,o,a).call(this),()=>D.qy`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.invalid?this.errorMessage:A.s6}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),(0,W.OV)(this,i,this.querySelectorAll("[gds-element=gds-option]")),this.multiple||(0!==this.options.length||this.placeholder)&&(void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.combobox||this.placeholder||void 0!==this.options.find(e=>this.compareWith(e.value,this.value))||(this.value=this.options[0]?.value))}updated(){(0,W.jq)(this,f,C).call(this)}_handleMultipleChange(){this.options.forEach(e=>e.requestUpdate())}get value(){return super.value}set value(e){(0,W.S7)(this,_)||(super.value=e)}_handleOpenChange(){var e=this;const t=this.open;this.options.forEach(e=>e.hidden=!t),t?(0,W.jq)(this,$,M).call(this):((0,W.jq)(this,z,T).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const s=this.options.find(e=>e.selected);requestAnimationFrame((0,q.A)(function*(){yield e.updateComplete,s?.scrollIntoView({block:"center"})}))}};i=new WeakMap,o=new WeakSet,a=function(){return!this.plain},r=new WeakMap,l=new WeakMap,n=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap,u=new WeakMap,b=new WeakMap,y=new WeakMap,v=new WeakMap,m=new WeakSet,x=function(e){const t=Array.isArray(this.value)?this.value:[],s=e=>t.some(t=>this.compareWith(t,e)),i=!s(e.value);return this.options.filter(t=>t===e?i:s(t.value)).map(e=>e.value)},f=new WeakSet,C=function(){const e=this.multiple?Array.isArray(this.value)?this.value:[]:[this.value];this.options.forEach(t=>{t.selected=e.some(e=>this.compareWith(e,t.value))})},w=new WeakMap,_=new WeakMap,k=new WeakSet,S=function(e,t={}){const{emitInput:s=!0,emitChange:i=!0,beforeDispatch:o}=t;this.value=e,(0,W.OV)(this,_,!0);try{o?.(),s&&this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}),i&&this.dispatchCustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})}finally{(0,W.OV)(this,_,!1)}},$=new WeakSet,M=function(){this.addEventListener("blur",(0,W.S7)(this,V)),this.addEventListener("gds-blur",(0,W.S7)(this,V)),this.addEventListener("keydown",(0,W.S7)(this,E))},z=new WeakSet,T=function(){this.removeEventListener("blur",(0,W.S7)(this,V)),this.removeEventListener("gds-blur",(0,W.S7)(this,V)),this.removeEventListener("keydown",(0,W.S7)(this,E))},V=new WeakMap,E=new WeakMap,re.styles=[N.LU,P.A,Y.A,oe],(0,W.Cc)([(0,K.MZ)({attribute:"supporting-text"})],re.prototype,"supportingText",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,reflect:!0})],re.prototype,"open",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,reflect:!0})],re.prototype,"searchable",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,reflect:!0})],re.prototype,"multiple",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,reflect:!0})],re.prototype,"clearable",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,reflect:!0})],re.prototype,"combobox",2),(0,W.Cc)([(0,K.MZ)()],re.prototype,"compareWith",2),(0,W.Cc)([(0,K.MZ)()],re.prototype,"searchFilter",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,attribute:"sync-popover-width"})],re.prototype,"syncPopoverWidth",2),(0,W.Cc)([(0,K.MZ)({type:Number,attribute:"max-height"})],re.prototype,"maxHeight",2),(0,W.Cc)([(0,K.MZ)({reflect:!0})],re.prototype,"size",2),(0,W.Cc)([(0,K.MZ)({type:Boolean,attribute:"hide-label"})],re.prototype,"hideLabel",2),(0,W.Cc)([(0,K.MZ)({type:Boolean})],re.prototype,"plain",2),(0,W.Cc)([(0,K.MZ)({type:Boolean})],re.prototype,"disableMobileStyles",2),(0,W.Cc)([(0,K.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],re.prototype,"showExtendedSupportingText",2),(0,W.Cc)([(0,K.P)("#trigger")],re.prototype,"_elTriggerBtn",2),(0,W.Cc)([(0,K.P)("#searchinput")],re.prototype,"_elSearchInput",2),(0,W.Cc)([(0,Q.L)({attributes:!0,attributeFilter:["gds-element","value","isplaceholder"],childList:!0,subtree:!0,characterData:!0})],re.prototype,"_handleLightDOMChange",1),(0,W.Cc)([(0,R.w)("multiple")],re.prototype,"_handleMultipleChange",1),(0,W.Cc)([(0,R.w)("open")],re.prototype,"_handleOpenChange",1),re=(0,W.Cc)([(0,G.J)({labelledBy:"#trigger",describedBy:"#trigger",errorMessage:"#trigger"}),(0,L.cc)()],re);let le=class extends((0,X.Q8)((0,X.TM)((0,X.lt)(re)))){};le=(0,W.Cc)([(0,D.Y$)("gds-dropdown",{dependsOn:[B.$,H.V,O.w,ae.Y,ie.E,ee.V,te.o,se.r]})],le)},4851(e,t,s){s.d(t,{Y:()=>x});var i,o,a,r=s(745),l=s(4367),n=s(505),d=s(3539),c=s(7526),h=s(4843),p=s(8146),g=s(8057),u=s(5073),b=s(4457),y=s(1374),v=s(4397),m=s(6290);let x=class extends((0,v.z)(d.j)){constructor(){super(),(0,r.VK)(this,o),(0,r.VK)(this,i,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,r.jq)(this,o,a)),this.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,r.jq)(this,o,a).call(this,e))})}get hidden(){return(0,r.S7)(this,i)}set hidden(e){const t=e.toString();(0,r.OV)(this,i,"true"===t),(0,r.S7)(this,i)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),b.n.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),c.qy`<div class="item">
      ${(0,n.z)(e,()=>(0,g.o)({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};i=new WeakMap,o=new WeakSet,a=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})},x.styles=[u.LU,p.A,h.A],(0,r.Cc)([(0,l.MZ)()],x.prototype,"value",2),(0,r.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],x.prototype,"hidden",1),(0,r.Cc)([(0,l.MZ)({attribute:"aria-selected",reflect:!0,converter:{fromAttribute:e=>"true"===e,toAttribute:e=>e?"true":"false"}})],x.prototype,"selected",2),(0,r.Cc)([(0,l.MZ)({type:Boolean,reflect:!0})],x.prototype,"isPlaceholder",2),(0,r.Cc)([(0,y.w)("isPlaceholder")],x.prototype,"_handlePlaceholderStatusChange",1),x=(0,r.Cc)([(0,c.Y$)("gds-option",{dependsOn:[m.V]})],x)},6312(e,t,s){s.d(t,{o:()=>n});var i=s(745),o=s(5073),a=s(7526),r=s(8833),l=s(9443).AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-neutral-02);
  }
`;let n=class extends r.o{render(){return a.qy`<slot></slot>`}};n.styles=[o.LU,l],n=(0,i.Cc)([(0,a.Y$)("gds-flex")],n)},6290(e,t,s){s.d(t,{V:()=>r});var i=s(745),o=s(7526),a=s(3832);let r=class extends a.M{};r._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80428 21.2651 9.50102 21.4442 9.16519 21.489C8.82937 21.5338 8.48975 21.4403 8.22412 21.23L2.22412 16.48C1.68285 16.0515 1.59144 15.2654 2.01994 14.7241C2.44845 14.1828 3.23461 14.0914 3.77588 14.5199L8.76236 18.4675L19.9945 3.2574C20.4046 2.70206 21.1872 2.58432 21.7426 2.99442Z" fill="currentColor"/>',r._name="checkmark",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-checkmark")],r)},6428(e,t,s){s.d(t,{o:()=>r});var i=s(745),o=s(7526),a=s(3832);let r=class extends a.M{};r._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',r._name="chevron-bottom",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-chevron-bottom")],r)},4464(e,t,s){s.d(t,{w:()=>r});var i=s(745),o=s(7526),a=s(3832);let r=class extends a.M{};r._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',r._name="circle-info",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-circle-info")],r)},8745(e,t,s){s.d(t,{f:()=>r});var i=s(745),o=s(7526),a=s(3832);let r=class extends a.M{};r._regularSVG='<path d="M12 8.75V12.75M12 15.5V15.49M12.25 15.5C12.25 15.6381 12.1381 15.75 12 15.75C11.8619 15.75 11.75 15.6381 11.75 15.5C11.75 15.3619 11.8619 15.25 12 15.25C12.1381 15.25 12.25 15.3619 12.25 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M2.79693 16.2279L10.2809 3.64118C11.0561 2.33738 12.9438 2.33738 13.719 3.64118L21.203 16.2279C21.9957 17.561 21.035 19.25 19.484 19.25H4.516C2.96497 19.25 2.00424 17.561 2.79693 16.2279Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M9.63618 3.25787C10.7021 1.46515 13.2977 1.46515 14.3636 3.25787L21.8476 15.8446C22.9376 17.6777 21.6165 20 19.4839 20H4.51593C2.38326 20 1.06225 17.6777 2.15221 15.8446L9.63618 3.25787ZM12 8C12.4142 8 12.75 8.33579 12.75 8.75V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V8.75C11.25 8.33579 11.5858 8 12 8ZM13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5C11 14.9477 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9477 13 15.5Z" fill="currentColor"/>',r._name="triangle-exclamation",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,i.Cc)([(0,o.Y$)("gds-icon-triangle-exclamation")],r)},227(e,t,s){s.d(t,{w:()=>_});var i,o,a,r,l,n,d,c,h,p,g,u=s(745),b=s(6743),y=s(4367),v=s(3578),m=s(3539),x=s(7526),f=s(4457),C=s(1374),w=s(9443).AH`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-sys-space-xs);
      padding-block: var(--gds-sys-space-xs);
      padding-inline: var(--gds-sys-space-m) var(--gds-sys-space-s);
      min-block-size: var(--gds-sys-space-3xl);
      block-size: var(--gds-sys-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-sys-radius-xs);
      background: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      outline-offset: 0;
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-neutral-01);
      cursor: text;
      transition-property: background-color, outline-offset;
      backface-visibility: hidden;
      transition-duration: var(--gds-sys-motion-duration-fastest);
      transition-timing-function: var(--gds-sys-motion-easing-linear);

      .right {
        display: contents;
      }

      .right.as-flex {
        display: flex;
        position: absolute;
        gap: var(--gds-sys-space-xs);
        right: var(--gds-sys-space-xs);
        top: var(--gds-sys-space-xs);
        block-size: max-content;
      }
    }

    .field:focus-within {
      outline-width: var(--gds-sys-space-4xs);
      outline-offset: var(--gds-sys-space-4xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-sys-space-3xs);
      padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
      min-block-size: var(--gds-sys-space-2xl);
      block-size: var(--gds-sys-space-2xl);
      border-radius: var(--gds-sys-radius-2xs);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-sys-space-s);
      padding-inline-start: var(--gds-sys-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-sys-color-l3-disabled-01);
      color: var(--gds-sys-color-content-disabled-01);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-sys-color-l3-negative-02);
      border-color: var(--gds-sys-color-border-negative-01);
      color: var(--gds-sys-color-content-negative-01);
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-sys-space-s);
    }

    .field.lead-has-badge {
      padding-inline-start: var(--gds-sys-space-2xs);
    }

    .field.small.lead-has-badge {
      padding-inline-start: var(--gds-sys-space-2xs);
    }

    .field.trail-slot-occupied {
      padding-inline-end: var(--gds-sys-space-xs);
    }

    .field.small.trail-slot-occupied {
      padding-inline-end: var(--gds-sys-space-2xs);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-s);
    }

    .field.small.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-2xs);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-sys-space-xs);
      flex: 1;
      align-self: stretch;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-02),
          var(--gds-sys-color-state-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-sys-space-l);
      block-size: var(--gds-sys-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;let _=class extends m.j{constructor(){super(),(0,u.VK)(this,o),(0,u.VK)(this,r),(0,u.VK)(this,n),(0,u.VK)(this,c),(0,u.VK)(this,p),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,(0,u.VK)(this,i,(e,t)=>{const s=t.target.assignedNodes({flatten:!0}),i=s.length>0&&s.some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim());"lead"===e?(this._leadSlotOccupied=i,this._leadHasBadge=i&&s.some(e=>"gds-badge"===e.getAttribute?.("gds-element"))):"trail"===e?this._trailSlotOccupied=i:"action"===e&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),f.n.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return x.qy`
      <div class="field ${(0,v.H)(e)}" part="_base">
        ${(0,u.jq)(this,o,a).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};i=new WeakMap,o=new WeakSet,a=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return x.qy`
      ${(0,u.jq)(this,r,l).call(this)} ${(0,u.jq)(this,n,d).call(this)}
      <div class="${(0,v.H)(e)}">
        ${(0,u.jq)(this,c,h).call(this)} ${(0,u.jq)(this,p,g).call(this)}
      </div>
    `},r=new WeakSet,l=function(){return x.qy` <slot
      name="lead"
      @slotchange=${e=>(0,u.S7)(this,i).call(this,"lead",e)}
    ></slot>`},n=new WeakSet,d=function(){return x.qy`<div
      class="main-slot-wrap ${(0,v.H)({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>(0,u.S7)(this,i).call(this,"main",e)}
      ></slot>
    </div>`},c=new WeakSet,h=function(){return x.qy`
      <slot
        name="action"
        @slotchange=${e=>(0,u.S7)(this,i).call(this,"action",e)}
      ></slot>
    `},p=new WeakSet,g=function(){return x.qy`
      <slot
        name="trail"
        @slotchange=${e=>(0,u.S7)(this,i).call(this,"trail",e)}
      ></slot>
    `},_.styles=[w],(0,u.Cc)([(0,y.MZ)()],_.prototype,"size",2),(0,u.Cc)([(0,y.MZ)({type:Boolean})],_.prototype,"multiline",2),(0,u.Cc)([(0,y.MZ)({type:Boolean,reflect:!0})],_.prototype,"disabled",2),(0,u.Cc)([(0,y.MZ)({type:Boolean})],_.prototype,"invalid",2),(0,u.Cc)([(0,y.P)("slot:not([name])")],_.prototype,"_mainSlotElement",2),(0,u.Cc)([(0,y.wk)()],_.prototype,"_leadSlotOccupied",2),(0,u.Cc)([(0,y.wk)()],_.prototype,"_leadHasBadge",2),(0,u.Cc)([(0,y.wk)()],_.prototype,"_trailSlotOccupied",2),(0,u.Cc)([(0,y.wk)()],_.prototype,"_actionSlotOccupied",2),(0,u.Cc)([(0,C.w)("disabled")],_.prototype,"_handleDisabledChange",1),_=(0,u.Cc)([(0,x.Y$)("gds-field-base"),(0,b.cc)()],_)},7708(e,t,s){s.d(t,{V:()=>b});var i,o,a=s(745),r=s(9443),l=s(4367),n=s(505),d=s(801),c=s(8745),h=s(3539),p=s(1374),g=s(7526),u=r.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host(.visually-hidden) {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 0px;
      height: 0px;
      overflow: hidden;
    }

    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-sys-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-sys-space-xs);
      margin-top: var(--gds-sys-space-3xs);
      font: var(--gds-sys-text-detail-s-regular);
      color: var(--gds-sys-color-content-negative-01);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font: var(--gds-sys-text-detail-xs-regular);
        gap: var(--gds-sys-space-3xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;let b=class extends h.j{constructor(){super(...arguments),(0,a.VK)(this,i)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter?.[1])}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return g.qy`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${(0,n.z)(this.errorMessage,()=>g.qy`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${(0,a.jq)(this,i,o).call(this)}
      </div>
    </div>`}};i=new WeakSet,o=function(){if(!this.charCounter||!1===this.charCounter[1])return r.s6;const[e,t]=this.charCounter;return g.qy`<gds-badge variant="${t}">${e}</gds-badge>`},b.styles=[u],(0,a.Cc)([(0,l.MZ)({type:Array})],b.prototype,"charCounter",2),(0,a.Cc)([(0,l.MZ)()],b.prototype,"errorMessage",2),(0,a.Cc)([(0,p.w)("charCounter"),(0,p.w)("errorMessage")],b.prototype,"_handleVisibilityChange",1),b=(0,a.Cc)([(0,g.Y$)("gds-form-control-footer",{dependsOn:[d.K,c.f]})],b)},2655(e,t,s){s.d(t,{$:()=>f});var i,o,a,r,l,n,d,c=s(745),h=s(6743),p=s(4367),g=s(505),u=s(7595),b=s(8609),y=s(4464),v=s(3539),m=s(7526),x=s(9443).AH`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gds-sys-color-content-neutral-01);
    }

    #label-row > div {
      display: flex;
      flex-direction: column;
    }

    slot[name='label']::slotted(*) {
      font: var(--_font-label, var(--gds-sys-text-detail-m-book));
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-s-regular));
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font: var(--_font-label, var(--gds-sys-text-detail-s-book));
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-s-regular));
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      max-height: var(--_max-height);
    }

    #extended-supporting-text[aria-hidden='false'] {
      margin: var(--gds-sys-space-3xs) 0 0 0;
      padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
    }

    #extended-supporting-text[aria-hidden='true'] {
      max-height: 0;
      opacity: 0;
      translate: 0 2px;
      padding: 0 var(--gds-sys-space-m);
      margin: 0;
      overflow: hidden;
    }
  }
`;let f=class extends v.j{constructor(){super(...arguments),(0,c.VK)(this,i),(0,c.VK)(this,n),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,(0,c.VK)(this,a,()=>m.qy`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${(0,h.ab)("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${(0,c.S7)(this,r)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),(0,c.VK)(this,r,()=>{this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText,cancelable:!0})&&(this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"))}),(0,c.VK)(this,l,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return m.qy`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${(0,g.z)(this._hasExtendedSupportingText,(0,c.S7)(this,a))}
      </div>

      ${(0,c.jq)(this,n,d).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",(0,c.S7)(this,l))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",(0,c.S7)(this,l))}};i=new WeakSet,o=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},a=new WeakMap,r=new WeakMap,l=new WeakMap,n=new WeakSet,d=function(){return m.qy`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${(0,c.jq)(this,i,o)}
        ></slot>
      </div>
    `},f.styles=[x],(0,c.Cc)([(0,p.MZ)({type:Boolean,reflect:!0})],f.prototype,"showExtendedSupportingText",2),(0,c.Cc)([(0,p.wk)()],f.prototype,"_hasExtendedSupportingText",2),(0,c.Cc)([(0,p.P)("#extended-supporting-text")],f.prototype,"_extendedSupportingText",2),f=(0,c.Cc)([(0,m.Y$)("gds-form-control-header",{dependsOn:[u.t,b.z,y.w]}),(0,h.cc)()],f)},2606(e,t,s){s.d(t,{A:()=>i}),s(745);var i=s(9443).AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) {
    gap: var(--gds-sys-space-3xs);
  }

  :host([size='small']) .native-control {
    font: var(--gds-sys-text-detail-s-regular);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-m-regular);
    align-items: center;
    align-self: center;
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
    color: currentColor;
    text-align: left;
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    line-height: 18px;
    width: var(--gds-sys-space-m);
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-m);
    max-width: var(--gds-sys-space-m);
    display: flex;
  }

  slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-l);
    display: flex;
  }
`},8057(e,t,s){s.d(t,{U:()=>l,o:()=>r}),s(745);var i=s(3578),o=s(505),a=s(7526);const r=e=>n({...e,type:"checkbox"}),l=e=>n({...e,type:"radio"}),n=e=>{const{type:t,checked:s,indeterminate:r,disabled:l,invalid:n}=e,d={"rbcb--checkbox":"checkbox"===t,"rbcb--radio":"radio"===t,"--checked":s,"--indeterminate":r,"--disabled":l,"--invalid":n};return a.qy`
    <div class="rbcb ${(0,i.H)(d)}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${(0,o.z)("checkbox"===t,()=>a.qy`
            <gds-icon-minus-small
              class=${(0,i.H)({rbcb__icon:!0,"rbcb__icon--visible":r})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${(0,i.H)({rbcb__icon:!0,"rbcb__icon--visible":s})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `}}}]);
//# sourceMappingURL=7612.2157a565.iframe.bundle.js.map