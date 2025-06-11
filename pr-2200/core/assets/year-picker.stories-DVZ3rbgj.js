import{a as D}from"./argTableProps-B5IHRYYP.js";import{l as C}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{i as F,x as u}from"./lit-element-Bx14lxc-.js";import{n as l,r as E,G as P,g as $}from"./custom-element-scoping-CNGU1oQ0.js";import{a as z}from"./query-p8xgzTDt.js";import{e as S}from"./class-map-CXsQwv0r.js";import{o as A}from"./if-defined-CVqwUuaf.js";import{n as L}from"./when-BR7zwNJC.js";import{t as O}from"./tokens.style-vQBwQv71.js";import{T}from"./transitional-styles-CD1mMrWO.js";import{w as G}from"./watch-tFciLXSI.js";import{d as f}from"./attribute-converters-CdI0trPX.js";import{r as R,t as g}from"./index-D1R-c75Z.js";import"./flex-CXYJXTeQ.js";import"./dropdown-D2WOYmZ-.js";import"./option-BLyFyXeE.js";import"./menu-heading-CLLofeDc.js";import"./custom-elements-DBN8LRcp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./flex.component-Apgiyuoj.js";import"./div.component-CrCsvFNO.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./dropdown.component-CXyQZ7rO.js";import"./query-async-MEroNOeJ.js";import"./icon-CMjDogij.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-Dv6R5DZz.js";import"./form-control-header.component-DPzHdoLg.js";import"./badge.component-DwshZFaZ.js";import"./triangle-exclamation.component-Dn2q-7Yn.js";import"./button.component-6nvmO9qk.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BqSibp9P.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-BCrUGdY2.js";import"./chevron-bottom.component-puvYO4hP.js";import"./popover.component-BVGC3wlQ.js";import"./cross-small.component-COJXRAdt.js";import"./menu-heading.component-B3FdIqc8.js";function v(e,t){R(2,arguments);var s=g(e),i=g(t);return s.getFullYear()===i.getFullYear()}const B=F`
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
`;var M=Object.defineProperty,q=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},o=(e,t,s,i)=>{for(var a=i>1?void 0:i?q(t,s):t,c=e.length-1,n;c>=0;c--)(n=e[c])&&(a=(i?n(t,s,a):n(a))||a);return i&&a&&M(t,s,a),a},K=(e,t,s)=>t.has(e)||w("Cannot "+s),U=(e,t,s)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s)=>(K(e,t,"access private method"),s),d,_,y,k;const W=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];let r=class extends P{constructor(){super(...arguments),U(this,d),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.noCurrentYear=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,1,1,12)}getYearCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#yearCell-${e}`)}connectedCallback(){super.connectedCallback(),T.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",m(this,d,k)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),t=5;return u` <table role="grid" aria-label="${A(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:t}).map((s,i)=>u`
            <tr role="row">
              ${W.slice(i*t,i*t+t).map((a,c)=>{const n=new Date(this.focusedYear,1,1),p=(n<this.min||n>this.max)&&!v(n,this.min)&&!v(n,this.max);return L(!this.hideExtraneousYears||!p,()=>u`<td
                        class="${S({small:this.size=="small",today:!this.noCurrentYear&&e==a,disabled:!!p})}"
                        ?disabled=${p}
                        tabindex="${this.focusedYear==a?0:-1}"
                        aria-selected="${m(this,d,_).call(this)==a?"true":"false"}"
                        @click=${()=>p?null:m(this,d,y).call(this,a)}
                        id="yearCell-${a}"
                      >
                        ${a}
                      </td>`,()=>u`<td inert></td>`)})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};d=new WeakSet;_=function(){return this.value?this.value.getFullYear():-1};y=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};k=function(e){var s;let t=!1;e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),t=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),t=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()+4&&(this.focusedYear-=5),t=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()-4&&(this.focusedYear+=5),t=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),t=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),t=!0):e.key==="PageUp"||e.key==="PageDown"?t=!0:(e.key==="Enter"||e.key===" ")&&((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||m(this,d,y).call(this,this.focusedYear),t=!0),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var i;(i=this._elFocusedCell)==null||i.focus()}))};r.styles=[O,B];r.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l()],r.prototype,"value",2);o([l({converter:f})],r.prototype,"min",2);o([l({converter:f})],r.prototype,"max",2);o([l({type:Boolean,attribute:"hide-extraneous-years"})],r.prototype,"hideExtraneousYears",2);o([l({type:Boolean,attribute:"no-current-year"})],r.prototype,"noCurrentYear",2);o([l({converter:f})],r.prototype,"focusedDate",2);o([l({type:Number})],r.prototype,"focusedYear",1);o([l({reflect:!0})],r.prototype,"size",2);o([l()],r.prototype,"label",2);o([E()],r.prototype,"_currentLocale",2);o([z('td[tabindex="0"]')],r.prototype,"_elFocusedCell",2);o([G("value")],r.prototype,"_valueChanged",1);r=o([$("gds-year-picker"),C()],r);r.define();const Te={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...D("gds-year-picker")}},j={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},h={...j,args:{label:"YearPicker"}};var b,x,Y;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(Y=(x=h.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};const Ge=["Default"];export{h as Default,Ge as __namedExportsOrder,Te as default};
