import{m as Z}from"./runtime-CMQcyTl6.js";import{l as z}from"./localized-decorator-B8fm5KIw.js";import{n as o,r as x,g as k,G as j,h as n}from"./custom-element-scoping-b4lD3laR.js";import{a as T}from"./query-p8xgzTDt.js";import{r as ee}from"./query-async-MEroNOeJ.js";import{r as te}from"./form-control-footer-CpU6jekn.js";import{i as N,E as M}from"./lit-element-C_s9q329.js";import{t as se}from"./tokens.style-B6Zq2CtY.js";import{a as ae,f as ie}from"./button-JbY0W8yK.js";import{e as A}from"./class-map-Bz98xO8-.js";import{o as le}from"./map-DiiNQ3pp.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const oe=N`
  @layer base, simplified;

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    input {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }
  }

  @layer simplified {
  }
`,ne=N`
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
      user-select: none;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-xs);
      /* In Figma, the border overlaps with the padding, so we need to
         subtract 1px to replicate this in CSS */
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs)
        calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
      min-block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color, border-color, outline-color;
    }

    .field:focus-within {
      outline-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
    }

    /* In Figma, the icon button overlaps 4px with the padding. The rule
       below is there to replicate that so the field doesn't change height
       when the action button appears */
    .field.small slot[name='action']::slotted(*) {
      margin: calc(var(--gds-space-xs) / -0.5) 0;
    }

    .field.multiline {
      align-items: flex-start;
      padding: calc(var(--gds-space-s) - 1px) var(--gds-space-s)
        calc(var(--gds-space-s) - 1px) var(--gds-space-m);
      height: max-content;
    }

    .field.trail-slot-occupied,
    .field:not(.action-slot-occupied):not(.small) {
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
    }

    .field.disabled {
      background: var(--gds-color-l3-background-disabled);
      color: var(--gds-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-color-l3-background-negative-secondary);
      border-color: var(--gds-color-l3-border-negative);
      color: var(--gds-color-l3-content-negative);
    }

    .main-slot-wrap {
      display: flex;
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      min-width: var(--gds-space-l);
    }
  }
`;var re=Object.defineProperty,de=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},u=(e,t,s,i)=>{for(var a=i>1?void 0:i?de(t,s):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(a=(i?h(t,s,a):h(a))||a);return i&&a&&re(t,s,a),a},F=(e,t,s)=>t.has(e)||I("Cannot "+s),y=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),O=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_=(e,t,s)=>(F(e,t,"access private method"),s),b,v,G,B,W,D,P;let p=class extends j{constructor(){super(),O(this,v),this.size="large",this.multiline=!1,this.disabled=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,O(this,b,(e,t)=>{const i=t.target.assignedNodes({flatten:!0}),a=i.length>0&&i.some(d=>{var h;return d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&((h=d.textContent)==null?void 0:h.trim())!==""});e==="lead"?this._leadSlotOccupied=a:e==="trail"?this._trailSlotOccupied=a:e==="action"&&(this._actionSlotOccupied=a)})}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return n`
      <div class="field ${A(e)}">
        ${_(this,v,G).call(this)}
      </div>
    `}};b=new WeakMap;v=new WeakSet;G=function(){const e=[_(this,v,B).call(this),_(this,v,W).call(this),_(this,v,D).call(this),_(this,v,P).call(this)];return n`${le(e,t=>t)}`};B=function(){return n` <slot
      name="lead"
      @slotchange=${e=>y(this,b).call(this,"lead",e)}
    ></slot>`};W=function(){return n`<div
      class="main-slot-wrap ${A({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>y(this,b).call(this,"main",e)}
      ></slot>
    </div>`};D=function(){return n`
      <slot
        name="action"
        @slotchange=${e=>y(this,b).call(this,"action",e)}
      ></slot>
    `};P=function(){return n`
      <slot
        name="trail"
        @slotchange=${e=>y(this,b).call(this,"trail",e)}
      ></slot>
    `};p.styles=[ne];u([o()],p.prototype,"size",2);u([o({type:Boolean})],p.prototype,"multiline",2);u([o({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([o({type:Boolean})],p.prototype,"invalid",2);u([T("slot:not([name])")],p.prototype,"_mainSlotElement",2);u([x()],p.prototype,"_leadSlotOccupied",2);u([x()],p.prototype,"_trailSlotOccupied",2);u([x()],p.prototype,"_actionSlotOccupied",2);p=u([k("gds-field-base"),z()],p);var ce=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,L=e=>{throw TypeError(e)},r=(e,t,s,i)=>{for(var a=i>1?void 0:i?pe(t,s):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(a=(i?h(t,s,a):h(a))||a);return i&&a&&ce(t,s,a),a},X=(e,t,s)=>t.has(e)||L("Cannot "+s),m=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g=(e,t,s)=>(X(e,t,"access private method"),s),c,R,q,$,w,S,E,C,V,H,J,K,Q,U,Y;let l=class extends ae{constructor(){super(),f(this,c),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,f(this,$,e=>["type","placeholder","required"].includes(e.name)),f(this,w,e=>{const t=e.target;this.value=t.value}),f(this,S,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),f(this,E,()=>{this.elInputAsync.then(e=>e.focus())}),f(this,C,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return n`${te(this.variant,[["default",()=>g(this,c,R).call(this)],["floating-label",()=>g(this,c,q).call(this)]])}`}_getValidityAnchor(){return this.elInput}};c=new WeakSet;R=function(){var e;return n`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${m(this,E)}
      >
        ${g(this,c,V).call(this)}
      </gds-field-base>
      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${m(this,c,Y)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};q=function(){return M};$=new WeakMap;w=new WeakMap;S=new WeakMap;E=new WeakMap;C=new WeakMap;V=function(){return[g(this,c,H).call(this),g(this,c,Q).call(this),g(this,c,U).call(this),g(this,c,J).call(this)].map(t=>n`${t}`)};H=function(){return n` <slot slot="lead" name="lead"></slot> `};J=function(){return n`
      <slot
        slot="trail"
        name="trail"
        @slotchange=${g(this,c,K)}
      ></slot>
    `};K=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(i=>{var a;return i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&((a=i.textContent)==null?void 0:a.trim())!==""})};Q=function(){return n`
      <input
        @input=${m(this,w)}
        @change=${m(this,S)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${ie(m(this,$))}
      />
    `};U=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?n`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${Z("Clear input")}"
          @click=${m(this,C)}
          slot="action"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:M};Y=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};l.styles=[se,oe];r([o()],l.prototype,"value",2);r([o()],l.prototype,"label",2);r([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);r([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);r([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);r([o({type:Boolean})],l.prototype,"clearable",2);r([o({type:Number})],l.prototype,"maxlength",2);r([o({type:String})],l.prototype,"variant",2);r([o({type:String})],l.prototype,"size",2);r([ee("input")],l.prototype,"elInputAsync",2);r([T("input")],l.prototype,"elInput",2);r([x()],l.prototype,"trailSlotOccupied",2);l=r([k("gds-input"),z()],l);
