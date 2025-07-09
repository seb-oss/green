import{m as h,l as k}from"./runtime-CNluP0A8.js";import{i as C,x as f}from"./lit-element-Bx14lxc-.js";import{n as l,r as Y,G as $,g as E}from"./gds-element-DKcDvDP5.js";import{a as F}from"./query-p8xgzTDt.js";import{e as P}from"./class-map-CXsQwv0r.js";import{o as z}from"./if-defined-CVqwUuaf.js";import{n as A}from"./when-BR7zwNJC.js";import{t as O}from"./tokens.style-Khpz0lp_.js";import{T as S}from"./transitional-styles-BiORlPgX.js";import{w as L}from"./watch-tFciLXSI.js";import{d as g}from"./attribute-converters-CdI0trPX.js";import{l as N,i as m,a as v,s as x}from"./index-C4WLrI9v.js";const T=C`
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

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-2xs);
        height: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-sys-space-2xs) var(--gds-sys-space-2xs) auto auto;
      }
    }
  }
`;var B=Object.defineProperty,G=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},a=(e,t,o,i)=>{for(var n=i>1?void 0:i?G(t,o):t,c=e.length-1,r;c>=0;c--)(r=e[c])&&(n=(i?r(t,o,n):r(n))||n);return i&&n&&B(t,o,n),n},U=(e,t,o)=>t.has(e)||w("Cannot "+o),J=(e,t,o)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),y=(e,t,o)=>(U(e,t,"access private method"),o),u,D,b,_;const M=[h("January"),h("February"),h("March"),h("April"),h("May"),h("June"),h("July"),h("August"),h("September"),h("October"),h("November"),h("December")];let s=class extends ${constructor(){super(...arguments),J(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousMonths=!1,this.noCurrentMonth=!1,this.focusedDate=new Date,this.shortMonthText=!1,this.size="large",this.monthNumber=!1,this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=N(new Date(this.focusedYear,e,1)),o=new Date(this.focusedDate);o.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),o.setMonth(e),o.setHours(12,0,0,0),this.focusedDate=o}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getMonthCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#monthCell-${e}`)}connectedCallback(){super.connectedCallback(),S.instance.apply(this,"gds-month-picker"),this.addEventListener("keydown",y(this,u,_)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),t=new Date().getMonth();return f` <table role="grid" aria-label="${z(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:4}).map((o,i)=>f`
            <tr role="row">
              ${M.slice(i*3,i*3+3).map((n,c)=>{const r=i*3+c;if(r>=M.length)return f`<td inert></td>`;const d=new Date(this.focusedYear,r,1),p=(d<this.min||d>this.max)&&!m(d,this.min)&&!m(d,this.max);return A(!this.hideExtraneousMonths||!p,()=>f`<td
                        class="${P({small:this.size=="small",today:!this.noCurrentMonth&&e==this.focusedYear&&t==r,disabled:!!p})}"
                        ?disabled=${p}
                        tabindex="${this.focusedMonth==r?0:-1}"
                        aria-selected="${y(this,u,D).call(this)==r?"true":"false"}"
                        @click=${()=>p?null:y(this,u,b).call(this,r)}
                        id="monthCell-${r}"
                      >
                        ${this.shortMonthText?n.substring(0,3):n}
                        ${this.monthNumber?" ("+(r+1)+")":""}
                      </td>`,()=>f`<td inert></td>`)})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};u=new WeakSet;D=function(){return this.value?this.value.getMonth():-1};b=function(e){this.value=new Date(this.focusedYear,e,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};_=function(e){var o;let t=!1;if(e.key==="ArrowLeft")this.focusedMonth>0&&this.focusedDate>v(this.min,1)&&(this.focusedMonth-=1),t=!0;else if(e.key==="ArrowRight")this.focusedMonth<11&&this.focusedDate<x(this.max,1)&&(this.focusedMonth+=1),t=!0;else if(e.key==="ArrowUp")this.focusedMonth>2&&this.focusedDate>v(this.min,3)&&(this.focusedMonth-=3),t=!0;else if(e.key==="ArrowDown")this.focusedMonth<9&&this.focusedDate<x(this.max,3)&&(this.focusedMonth+=3),t=!0;else if(e.key==="Home")new Date(this.focusedYear,0,1)>this.min?this.focusedMonth=0:this.focusedMonth=this.min.getMonth(),t=!0;else if(e.key==="End")new Date(this.focusedYear,11,1)<this.max?this.focusedMonth=11:this.focusedMonth=this.max.getMonth(),t=!0;else if(e.key==="PageUp"||e.key==="PageDown"){const i=e.key==="PageUp";let n=this.focusedMonth;for(let c=0;c<3;c++){const r=n+(i?-3:3);if(r<0||r>11)break;const d=new Date(this.focusedYear,r,1);if(i&&d<this.min&&!m(d,this.min)||!i&&d>this.max&&!m(d,this.max))break;n=r}n!==this.focusedMonth&&(this.focusedMonth=n),t=!0}else(e.key==="Enter"||e.key===" ")&&((o=this._elFocusedCell)!=null&&o.hasAttribute("disabled")||y(this,u,b).call(this,this.focusedMonth),t=!0);t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var i;(i=this._elFocusedCell)==null||i.focus()}))};s.styles=[O,T];s.shadowRootOptions={mode:"open",delegatesFocus:!0};a([l()],s.prototype,"value",2);a([l({converter:g})],s.prototype,"min",2);a([l({converter:g})],s.prototype,"max",2);a([l({type:Boolean,attribute:"hide-extraneous-months"})],s.prototype,"hideExtraneousMonths",2);a([l({type:Boolean,attribute:"no-current-month"})],s.prototype,"noCurrentMonth",2);a([l({converter:g})],s.prototype,"focusedDate",2);a([l({type:Number})],s.prototype,"focusedMonth",1);a([l({type:Number})],s.prototype,"focusedYear",1);a([l({type:Boolean,attribute:"short-month-text"})],s.prototype,"shortMonthText",2);a([l({reflect:!0})],s.prototype,"size",2);a([l({type:Boolean,attribute:"month-number"})],s.prototype,"monthNumber",2);a([l()],s.prototype,"label",2);a([Y()],s.prototype,"_currentLocale",2);a([F('td[tabindex="0"]')],s.prototype,"_elFocusedCell",2);a([L("value")],s.prototype,"_valueChanged",1);s=a([E("gds-month-picker"),k()],s);export{s as G};
