import{m as se}from"./runtime-CMQcyTl6.js";import{l as A}from"./localized-decorator-B8fm5KIw.js";import{n as c,r as x,g as N,G as ie,h as d}from"./custom-element-scoping-b4lD3laR.js";import{a as D}from"./query-p8xgzTDt.js";import{r as ae}from"./query-async-MEroNOeJ.js";import{r as ne}from"./form-control-footer-CpU6jekn.js";import{n as re}from"./when-BR7zwNJC.js";import{i as L,E as w}from"./lit-element-C_s9q329.js";import{t as oe}from"./tokens.style-B6Zq2CtY.js";import{w as le}from"./watch-tFciLXSI.js";import{s as de}from"./style-expression-property-CYg4CGI6.js";import{a as ce,f as he}from"./button-JbY0W8yK.js";import{e as pe}from"./class-map-Bz98xO8-.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const ue=L`
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

    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--gds-text-size-detail-m);
      height: calc(1lh * var(--_lines));
      line-height: var(--gds-text-line-height-detail-m);
      margin: unset;
      min-height: calc(1lh * 4);
      outline: none;
      overflow: hidden;
      padding: unset;
      resize: none;
      transition:
        var(--_transition),
        resize 0s;

      width: 100%;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }

    [align-items] ::part(_button) {
      margin-top: calc(var(--gds-space-2xs) * -1);
    }

    .resize-handle {
      &:hover,
      &:active {
        &::before {
          width: 22px;
          opacity: 1;
          height: 1px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        background: currentColor;
        inset: 0;
        margin-inline: auto;
        height: 0px;
        width: 12px;
        opacity: 0;
        border-radius: 100px;
        transition: var(--_transition);
      }
    }
  }

  @layer simplified {
  }
`,ge=L`
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
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color, border-color, outline-color;
      position: relative;
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);

      &:focus-within {
        outline-color: currentColor;
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      min-width: var(--gds-space-l);
    }
  }
`;var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,W=e=>{throw TypeError(e)},g=(e,t,s,o)=>{for(var i=o>1?void 0:o?me(t,s):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(i=(o?u(t,s,i):u(i))||i);return o&&i&&fe(t,s,i),i},G=(e,t,s)=>t.has(e)||W("Cannot "+s),y=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_=(e,t,s)=>(G(e,t,"access private method"),s),v,f,P,B,F,Y,R;let p=class extends ie{constructor(){super(),k(this,f),this.size="large",this.multiline=!1,this.disabled=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,k(this,v,(e,t)=>{const o=t.target.assignedNodes({flatten:!0}),i=o.length>0&&o.some(h=>{var u;return h.nodeType===Node.ELEMENT_NODE||h.nodeType===Node.TEXT_NODE&&((u=h.textContent)==null?void 0:u.trim())!==""});e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}render(){const e={field:!0,invalid:this.invalid??!1};return d`
      <gds-flex
        level="3"
        position="relative"
        align-items=${this.multiline?"flex-start":"center"}
        justify-content="space-between"
        gap="${this.size==="small"?"2xs":"xs"}"
        padding="${this.multiline?"s s s m":this.size==="small"?"xs s":this._trailSlotOccupied===!0||this._actionSlotOccupied===!1?"xs m":"xs xs xs m"}"
        min-block-size="${this.size==="small"?"xl":"3xl"}"
        .height="${this.multiline?"max-content":""}"
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class=${pe(e)}
        cursor="text"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${_(this,f,P).call(this)}
      </gds-flex>
    `}};v=new WeakMap;f=new WeakSet;P=function(){return[_(this,f,B).call(this),_(this,f,F).call(this),_(this,f,Y).call(this),_(this,f,R).call(this)].map(t=>d`${t}`)};B=function(){return d` <slot
      name="lead"
      @slotchange=${e=>y(this,v).call(this,"lead",e)}
    ></slot>`};F=function(){return d` <gds-flex
      align-items="center"
      flex="1"
      .height=${this.multiline?"max-content":""}
      overflow="hidden"
    >
      <slot
        @slotchange=${e=>y(this,v).call(this,"main",e)}
      ></slot>
    </gds-flex>`};Y=function(){return d`
      <slot
        name="action"
        @slotchange=${e=>y(this,v).call(this,"action",e)}
      ></slot>
    `};R=function(){return d`
      <slot
        name="trail"
        @slotchange=${e=>y(this,v).call(this,"trail",e)}
      ></slot>
    `};p.styles=[ge];g([c({type:String})],p.prototype,"size",2);g([c({type:Boolean})],p.prototype,"multiline",2);g([c({attribute:"disabled",type:Boolean,reflect:!0})],p.prototype,"disabled",2);g([c({type:Boolean})],p.prototype,"invalid",2);g([D("slot:not([name])")],p.prototype,"_mainSlotElement",2);g([x()],p.prototype,"_leadSlotOccupied",2);g([x()],p.prototype,"_trailSlotOccupied",2);g([x()],p.prototype,"_actionSlotOccupied",2);p=g([N("gds-field-base"),A()],p);var ve=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,H=e=>{throw TypeError(e)},l=(e,t,s,o)=>{for(var i=o>1?void 0:o?_e(t,s):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(i=(o?u(t,s,i):u(i))||i);return o&&i&&ve(t,s,i),i},X=(e,t,s)=>t.has(e)||H("Cannot "+s),b=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(X(e,t,"access private method"),s),a,I,q,E,C,O,V,T,J,K,Q,$,z,M,S,U,Z,j,ee,te;let r=class extends ce{constructor(){super(),m(this,a),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,m(this,E,e=>["type","placeholder","required"].includes(e.name)),m(this,C,e=>{const t=e.target;this.value=t.value}),m(this,O,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),m(this,V,()=>{this.elTextareaAsync.then(e=>e.focus())}),m(this,T,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),n(this,a,$).call(this)}disconnectedCallback(){super.disconnectedCallback(),n(this,a,$).call(this)}render(){return d`${ne(this.variant,[["default",()=>n(this,a,I).call(this)],["floating-label",()=>n(this,a,q).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};a=new WeakSet;I=function(){var e;return d`
      <gds-form-control-header>
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
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        multiline
      >
        ${n(this,a,J).call(this)}
        ${re(this.resize==="auto",()=>n(this,a,U).call(this),()=>w)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${b(this,a,te)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};q=function(){return w};E=new WeakMap;C=new WeakMap;O=new WeakMap;V=new WeakMap;T=new WeakMap;J=function(){return[n(this,a,K).call(this),n(this,a,j).call(this),n(this,a,ee).call(this),n(this,a,Q).call(this)].map(t=>d`${t}`)};K=function(){return d` <slot slot="lead" name="lead"></slot> `};Q=function(){return d`
      <slot
        slot="trail"
        name="trail"
        @slotchange=${n(this,a,Z)}
      ></slot>
    `};$=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",n(this,a,z).bind(this))};z=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",n(this,a,M).bind(this)),document.addEventListener("mouseup",n(this,a,S).bind(this))};M=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};S=function(){this.isDragging=!1,document.removeEventListener("mousemove",n(this,a,M).bind(this)),document.removeEventListener("mouseup",n(this,a,S).bind(this))};U=function(){return d`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${n(this,a,z)}
      ></gds-container>
    `};Z=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(o=>{var i;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((i=o.textContent)==null?void 0:i.trim())!==""})};j=function(){return d`
      <textarea
        @input=${b(this,C)}
        @change=${b(this,O)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${he(b(this,E))}
      ></textarea>
    `};ee=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${se("Clear input")}"
          @click=${b(this,T)}
          slot="action"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:w};te=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[oe,ue];l([c()],r.prototype,"value",2);l([c()],r.prototype,"label",2);l([de({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],r.prototype,"rows",2);l([x()],r.prototype,"lines",2);l([c({attribute:"supporting-text"})],r.prototype,"supportingText",2);l([c({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);l([c({type:Boolean})],r.prototype,"clearable",2);l([c()],r.prototype,"resize",2);l([c({type:Number})],r.prototype,"maxlength",2);l([c({type:String})],r.prototype,"variant",2);l([ae("textarea")],r.prototype,"elTextareaAsync",2);l([D("textarea")],r.prototype,"elTextarea",2);l([x()],r.prototype,"trailSlotOccupied",2);l([le("value")],r.prototype,"_setAutoHeight",1);r=l([N("gds-textarea"),A()],r);
