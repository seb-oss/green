import{m as h,l as C}from"./runtime-CNluP0A8.js";import{i as Y,x as f}from"./lit-element-Bx14lxc-.js";import{n as l,r as E,G as $,g as F}from"./gds-element-DKcDvDP5.js";import{a as P}from"./query-p8xgzTDt.js";import{e as z}from"./class-map-CXsQwv0r.js";import{o as A}from"./if-defined-CVqwUuaf.js";import{n as O}from"./when-BR7zwNJC.js";import{t as S}from"./tokens.style-Khpz0lp_.js";import{T as L}from"./transitional-styles-BiORlPgX.js";import{w as T}from"./watch-tFciLXSI.js";import{d as b}from"./attribute-converters-CdI0trPX.js";import{l as N,i as y,a as M,s as x}from"./index-C4WLrI9v.js";const B=Y`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        padding: 0 12px;
        position: relative;
        height: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-2xs);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }

        &.small {
          padding: 0 6px;
          height: var(--gds-sys-space-xl);
          font-size: var(--gds-sys-text-size-detail-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }
      }
    }
  }
`;var G=Object.defineProperty,U=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},a=(e,t,o,n)=>{for(var i=n>1?void 0:n?U(t,o):t,c=e.length-1,r;c>=0;c--)(r=e[c])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&G(t,o,i),i},J=(e,t,o)=>t.has(e)||w("Cannot "+o),R=(e,t,o)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),p=(e,t,o)=>(J(e,t,"access private method"),o),u,D,_,v,k;const g=[h("January"),h("February"),h("March"),h("April"),h("May"),h("June"),h("July"),h("August"),h("September"),h("October"),h("November"),h("December")];let s=class extends ${constructor(){super(...arguments),R(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousMonths=!1,this.noCurrentMonth=!1,this.focusedDate=new Date,this.shortMonthText=!1,this.size="large",this.monthNumber=!1,this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=N(new Date(this.focusedYear,e,1)),o=new Date(this.focusedDate);o.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),o.setMonth(e),o.setHours(12,0,0,0),this.focusedDate=o}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getMonthCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#monthCell-${e}`)}connectedCallback(){super.connectedCallback(),L.instance.apply(this,"gds-month-picker"),this.addEventListener("keydown",p(this,u,k)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),t=new Date().getMonth();return f` <table role="grid" aria-label="${A(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:4}).map((o,n)=>f`
            <tr role="row">
              ${g.slice(n*3,n*3+3).map((i,c)=>{const r=n*3+c;if(r>=g.length)return f`<td inert></td>`;const d=new Date(this.focusedYear,r,1),m=(d<this.min||d>this.max)&&!y(d,this.min)&&!y(d,this.max);return O(!this.hideExtraneousMonths||!m,()=>f`<td
                        class="${z({small:this.size=="small",today:!this.noCurrentMonth&&e==this.focusedYear&&t==r,disabled:!!m})}"
                        ?disabled=${m}
                        tabindex="${this.focusedMonth==r?0:-1}"
                        aria-selected="${p(this,u,_).call(this)==r?"true":"false"}"
                        @click=${()=>m?null:p(this,u,v).call(this,r)}
                        id="monthCell-${r}"
                      >
                        ${p(this,u,D).call(this,r)}
                      </td>`,()=>f`<td inert></td>`)})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};u=new WeakSet;D=function(e){if(this.monthNumber)return e+1;const t=g[e];return this.shortMonthText?t.substring(0,3):t};_=function(){return this.value?this.value.getMonth():-1};v=function(e){this.value=new Date(this.focusedYear,e,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};k=function(e){var o;let t=!1;if(e.key==="ArrowLeft")this.focusedMonth>0&&this.focusedDate>M(this.min,1)&&(this.focusedMonth-=1),t=!0;else if(e.key==="ArrowRight")this.focusedMonth<11&&this.focusedDate<x(this.max,1)&&(this.focusedMonth+=1),t=!0;else if(e.key==="ArrowUp")this.focusedMonth>2&&this.focusedDate>M(this.min,3)&&(this.focusedMonth-=3),t=!0;else if(e.key==="ArrowDown")this.focusedMonth<9&&this.focusedDate<x(this.max,3)&&(this.focusedMonth+=3),t=!0;else if(e.key==="Home")new Date(this.focusedYear,0,1)>this.min?this.focusedMonth=0:this.focusedMonth=this.min.getMonth(),t=!0;else if(e.key==="End")new Date(this.focusedYear,11,1)<this.max?this.focusedMonth=11:this.focusedMonth=this.max.getMonth(),t=!0;else if(e.key==="PageUp"||e.key==="PageDown"){const n=e.key==="PageUp";let i=this.focusedMonth;for(let c=0;c<3;c++){const r=i+(n?-3:3);if(r<0||r>11)break;const d=new Date(this.focusedYear,r,1);if(n&&d<this.min&&!y(d,this.min)||!n&&d>this.max&&!y(d,this.max))break;i=r}i!==this.focusedMonth&&(this.focusedMonth=i),t=!0}else(e.key==="Enter"||e.key===" ")&&((o=this._elFocusedCell)!=null&&o.hasAttribute("disabled")||p(this,u,v).call(this,this.focusedMonth),t=!0);t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()}))};s.styles=[S,B];s.shadowRootOptions={mode:"open",delegatesFocus:!0};a([l()],s.prototype,"value",2);a([l({converter:b})],s.prototype,"min",2);a([l({converter:b})],s.prototype,"max",2);a([l({type:Boolean,attribute:"hide-extraneous-months"})],s.prototype,"hideExtraneousMonths",2);a([l({type:Boolean,attribute:"no-current-month"})],s.prototype,"noCurrentMonth",2);a([l({converter:b})],s.prototype,"focusedDate",2);a([l({type:Number})],s.prototype,"focusedMonth",1);a([l({type:Number})],s.prototype,"focusedYear",1);a([l({type:Boolean,attribute:"short-month-text"})],s.prototype,"shortMonthText",2);a([l({reflect:!0})],s.prototype,"size",2);a([l({type:Boolean,attribute:"month-number"})],s.prototype,"monthNumber",2);a([l()],s.prototype,"label",2);a([E()],s.prototype,"_currentLocale",2);a([P('td[tabindex="0"]')],s.prototype,"_elFocusedCell",2);a([T("value")],s.prototype,"_valueChanged",1);s=a([F("gds-month-picker"),C()],s);export{s as G};
